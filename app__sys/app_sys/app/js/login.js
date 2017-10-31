/**
 * 登录模块
 * Created by CLR on 2017-8-14.
 */

/**
 * 登录验证
 * @constructor
 */
function LoginVerify() {
    Verify.call(this);
}

/**
 * 绑定相关事件
 */
$(function () {

    //切换记住我状态
    $('.login-other .float-left').click(function(){
        $(this).find("em").toggleClass('active');
    });

    //为图像验证码 添加click
    getImgCode($('.captcha-code'));

    /**
     * 验证
     */
    var loginVerify = new LoginVerify();
    //失去光标
    $(".login-form input").blur(function () {
        var currInputName = this.name,
            value = this.value;
        switch (currInputName) {
            case 'mobile':
                stateSwitch(loginVerify.mobileVerify(value), $(this));
                break;
            case 'password' :
                stateSwitch(loginVerify.pwdVerify(value), $(this));
                break;
            case "captcha":
                stateSwitch(loginVerify.imgCodeVerify(value), $(this));
                break;
            default:
                break;
        }
    });
    //button点击事件
    $('.login-form button').click(function (e) {
        window.event ? window.event.returnValue = false : e.preventDefault();

        var mobile = $('#mobile');
        if (stateSwitch(loginVerify.mobileVerify(mobile.val()), mobile) !== 200) return;

        var pwd = $("#pwd");
        if (stateSwitch(loginVerify.pwdVerify(pwd.val()), pwd) !== 200) return;

        var imgCodeCaptcha = $('.login-captcha'),
            imgCode = imgCodeCaptcha.find('#captcha');
        if (imgCodeCaptcha.hasClass('active') && stateSwitch(loginVerify.imgCodeVerify(imgCode.val()), imgCode) !== 200) return;

        //后台验证
        $http({
            url: API_URL.LOGIN,
            method: "POST",
            data: $('.login-form').serializeObj()
        }, function (data) {
            switch (data.code) {
                case 200://登录成功
                    //alert('登录成功');
                    window.location.href = "index.html";
                    break;
                case -2://用户名与密码不匹配
                    stateSwitch(VERIFY_MSG.LOGIN.PWD_ERROR,pwd);
                    break;
                case -1://用户名与密码不匹配超过3次
                    stateSwitch(VERIFY_MSG.LOGIN.PWD_ERROR,pwd);
                    //获取验证码
                    $('.captcha-code').click();
                    //清空
                    imgCode.val('');
                    //显示图像验证码
                    imgCodeCaptcha.addClass('active');
                    break;
                case 0://图像验证码错误
                    //获取验证码
                    $('.captcha-code').click();
                    stateSwitch(VERIFY_MSG.VERIFY.IMG_CODE_ERROR,imgCode);
                    break;
                case -3://密码错误超过8次 账户锁定
                    //获取验证码
                    $('.captcha-code').click();
                    //清空
                    imgCode.val('');
                    stateSwitch(VERIFY_MSG.LOGIN.PWD_ERROR_LIMIT,pwd);
                    break;
                default:
                    break;
            }
        });
    });
});
