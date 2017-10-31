/**
 * 忘记密码
 * Created by CLR on 2017-8-15.
 */

/**
 * 忘记密码相关验证
 * @constructor
 */
function ForgetPwdVerify() {
    Verify.call(this);

    /**
     * @param pwdElem 输入密码元素
     * @param surePwdVal 确认值
     */
    this.surePwdVerify = function (pwdElem, surePwdVal) {
        var verifyResult = stateSwitch(this.pwdVerify(pwdElem.val()), pwdElem);
        if (verifyResult !== 200) return null;

        var pwdVal = pwdElem.val();
        //surePwdVal = $.trim(surePwdVal);
        if (surePwdVal == '') return VERIFY_MSG.FORGET_PWD.SURE_PWD_EMPTY;

        if (surePwdVal !== pwdVal) {
            //pwdElem.val("");
            return VERIFY_MSG.FORGET_PWD.SURE_PWD_ERROR;
        }

        return 200;
    }
}

/**
 * 绑定相关事件
 */
$(function () {

    //获取验证码绑定click事件
    getImgCode($(".img-captcha"));

    //为手机验证按钮 添加点击事件
    getMobileCode($('.mobile-captcha-btn'));

    //更换手机号
    $(".change-mobile").click(function (e) {
        window.event ? window.event.returnValue = false : e.preventDefault();

        //获取图像验证码
        $('.img-captcha').click();

        //清空定时器
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }
        $('.mobile-captcha-btn').addClass('disable').html('重新发送(<span>60</span>S)');

        //重置表单
        $('.login_mobile_correct').removeClass('active');
        $('.forget-pwd-second-step').removeClass('active')[0].reset();
        $('.forget-pwd-first-step').addClass('active')[0].reset();
        $('.error').removeClass('error');
    });

    /**
     * 验证
     */
    var forgetPwdVerify = new ForgetPwdVerify();
    //失去光标
    $('.forget-pwd-form input').blur(function () {
        var me = $(this),
            currInputName = this.name,
            value = me.val();
        switch (currInputName) {
            case "mobile":
                var mobileVerifyResult = stateSwitch(forgetPwdVerify.mobileVerify(value), me);
                if (mobileVerifyResult === 200) {
                    $http({
                        url: API_URL.REGISTERED,
                        method: "POST",
                        data: {mobile: value}
                    }, function (data) {
                        data.code = -1;
                        if (data.code === 200) {//未注册
                            stateSwitch(VERIFY_MSG.FORGET_PWD.MOBILE_UNREGISTERED, me);
                        } else if (data.code === -1) {//已注册
                            me.siblings(".login_mobile_correct").addClass('active');
                        }
                    });
                }
                break;
            case "captcha":
                stateSwitch(forgetPwdVerify.imgCodeVerify(value), me);
                break;
            case "mobileCaptcha":
                stateSwitch(forgetPwdVerify.mobileCodeVerify(value), me);
                break;
            case "newPwd":
                stateSwitch(forgetPwdVerify.pwdVerify(value), me);
                break;
            case "surePwd":
                stateSwitch(forgetPwdVerify.surePwdVerify($("#set-pwd"), value), me);
                break;
            default:
                break;
        }
    });
    //button click
    $(".forget-pwd-first-step button").click(function (e) {
        window.event ? window.event.returnValue = false : e.preventDefault();

        var mobile = $('#mobile');
        if (stateSwitch(forgetPwdVerify.mobileVerify(mobile.val()), mobile) !== 200) return;

        var imgCode = $('#captcha');
        if (stateSwitch(forgetPwdVerify.imgCodeVerify(imgCode.val()), imgCode) !== 200) return;

        $http({
            url: API_URL.FORGET_PWD_FIRST,
            method: "POST",
            data: $('.forget-pwd-first-step').serializeObj()
        }, function (data) {
            switch (data.code) {
                case 200://成功
                    //切换内容
                    $('.forget-pwd-first-step')
                        .removeClass('active')
                        .siblings('.forget-pwd-second-step').addClass('active').find('.forget-pwd-header span').html(mobile.val());
                    //启动手机验证定时器
                    mobileCodeTimer($('.mobile-captcha-btn span'));
                    break;
                case -1://未注册
                    stateSwitch(VERIFY_MSG.FORGET_PWD.MOBILE_UNREGISTERED, mobile);
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
    $(".forget-pwd-second-step button").click(function (e) {
        window.event ? window.event.returnValue = false : e.preventDefault();

        var mobileCode = $("#mobile-captcha");
        if (stateSwitch(forgetPwdVerify.mobileCodeVerify(mobileCode.val()), mobileCode) !== 200) return;

        var newPwd = $("#set-pwd");
        if (stateSwitch(forgetPwdVerify.pwdVerify(newPwd.val()), newPwd) !== 200) return;

        var surePwd = $("#sure-pwd");
        if (stateSwitch(forgetPwdVerify.surePwdVerify(newPwd, surePwd.val()), surePwd) !== 200) return;

        $http({
            url: API_URL.FORGET_PWD_SURE,
            method: "POST",
            data: $(".forget-pwd-second-step").serializeObj()
        }, function (data) {
            switch (data.code) {
                case 200://设置成功
                    $(".set-result-model").addClass('active');
                    setTimeout(function(){
                        window.location.href="login.html";
                    },1000);
                    break;
                case -1://验证码错误
                    stateSwitch(VERIFY_MSG.VERIFY.MOBILE_CODE_ERROR, mobileCode);
                    break;
                case -2://验证码错误超过5次
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