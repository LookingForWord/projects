/**
 * 注册验证模块
 * Created by CLR on 2017-8-15.
 */

/**
 * 注册模块验证构造函数
 * @constructor
 */
function RegisterVerify(){
    //继承公共验证构造函数
    Verify.call(this);
}

/**
 * 绑定相关事件
 */
$(function () {

    //为图像验证码 添加点击事件
    getImgCode($('.captcha-code'));

    //为手机验证按钮 添加点击事件
    getMobileCode($('.mobile-captcha-btn'));

    //更换手机号
    $(".change-mobile").click(function (e) {
        window.event ? window.event.returnValue = false : e.preventDefault();

        //获取图像验证码
        $('.captcha-code').click();

        //清空定时器
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }
        $('.mobile-captcha-btn').addClass('disable').html('重新发送(<span>60</span>S)');

        //重置表单
        $('.login_mobile_correct').removeClass('active');
        $('.register-second-step').removeClass('active')[0].reset();
        $('.register-first-step').addClass('active')[0].reset();
        $('.error').removeClass('error');
    });

    //绑定失去光标事件
    var registerVerify = new RegisterVerify();
    $(".register-form input").blur(function () {
        var currInputName = this.name,
            value = this.value;
        switch (currInputName) {
            case 'mobile':
                var result = stateSwitch(registerVerify.mobileVerify(value), $(this));
                if (result === 200) {
                    $http({
                        url: API_URL.REGISTERED,
                        method: "POST",
                        data: {
                            mobile: value
                        }
                    }, function (data) {
                        if (data.code === 200) {//未注册
                            $('.mobile').siblings('.login_mobile_correct').addClass('active');
                        } else if (data.code === -1) {//已注册
                            stateSwitch(VERIFY_MSG.REGISTER.MOBILE_REGISTERED, $('.mobile'));
                        }
                    });
                }
                break;
            case 'captcha':
                stateSwitch(registerVerify.imgCodeVerify(value), $(this));
                break;
            case 'mobileCaptcha' :
                stateSwitch(registerVerify.mobileCodeVerify(value), $(this));
                break;
            case 'password' :
                stateSwitch(registerVerify.pwdVerify(value), $(this));
                break;
            default:
                break;
        }
    });

    //button绑定点击事件
    $('.register-first-step button').click(function (e) {
        //取消默认事件
        window.event ? window.event.returnValue = false : e.preventDefault();

        var mobile = $('#mobile');
        if (stateSwitch(registerVerify.mobileVerify(mobile.val()), mobile) !== 200) return;

        var imgCode = $('#captcha');
        if (stateSwitch(registerVerify.imgCodeVerify(imgCode.val()), imgCode) !== 200) return;

        //后台验证
        $http({
            url: API_URL.REGISTER_FIRST,
            method: "POST",
            data: $('.register-first-step').serializeObj()
        }, function (data) {
            switch (data.code) {
                case 200://成功
                    //切换内容
                    $('.register-first-step')
                        .removeClass('active')
                        .siblings('.register-second-step').addClass('active').find('.register-header span').html(mobile.val());
                    //启动手机验证定时器
                    mobileCodeTimer($('.mobile-captcha-btn span'));
                    break;
                case -1://已注册
                    stateSwitch(VERIFY_MSG.REGISTER.MOBILE_REGISTERED, mobile);
                    break;
                case 0://验证码错误
                    stateSwitch(VERIFY_MSG.VERIFY.IMG_CODE_ERROR, imgCode);
                    //更新验证码
                    imgCode.siblings('img').click();
                    break;
                default:
                    break;
            }
        });
    });
    $('.register-second-step button').click(function (e) {
        window.event ? window.event.returnValue = false : e.preventDefault();

        var mobileCode = $('#mobile-captcha');
        if (stateSwitch(registerVerify.mobileCodeVerify(mobileCode.val()), mobileCode) !== 200) return;

        var pwd = $('#register-pwd');
        if (stateSwitch(registerVerify.pwdVerify(pwd.val()), pwd) !== 200) return;

        //后台验证
        $http({
            url: API_URL.REGISTER_SECOND,
            method: "POST",
            data: $('.register-second-step').serializeObj()
        }, function (data) {
            switch (data.code) {
                case 200://注册成功
                    $(".set-result-model").addClass('active');
                    setTimeout(function(){
                        window.location.href="login.html";
                    },1000);
                    break;
                case -1://手机验证码错误
                    stateSwitch(VERIFY_MSG.VERIFY.MOBILE_CODE_ERROR, mobileCode);
                    break;
                case 0://手机验证码错误超过5次
                    stateSwitch(VERIFY_MSG.VERIFY.MOBILE_CODE_UPDATE, mobileCode);
                    //重置获取手机验证码按钮
                    $(".mobile-captcha-btn").removeClass('disable').html('获取验证码');
                    break;
                default:
                    break;
            }
        });
    });
});

