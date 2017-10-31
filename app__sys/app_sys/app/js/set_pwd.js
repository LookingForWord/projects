/**
 * 设置密码模块
 * Created by CLR on 2017-8-16.
 */

/**
 * 设置密码 验证构造器
 * @constructor
 */
function SetPwdVerify() {
    Verify.call(this);

    /**
     * 确认密码
     * @param newPwd input对象
     * @param surePwd
     */
    this.surePwdVerify = function (newPwd, surePwd) {
        var verifyResult = stateSwitch(this.pwdVerify(newPwd.val(),"PWD_NEW"), newPwd);
        if (verifyResult !== 200) return null;

        var newPwdVal = newPwd.val();
        //surePwd = $.trim(surePwd);
        if (surePwd == '') return VERIFY_MSG.SET_PWD.SURE_PWD_EMPTY;

        if (surePwd !== newPwdVal) {
            //newPwd.val("");
            return VERIFY_MSG.SET_PWD.SURE_PWD_ERROR;
        }

        return 200;
    }
}

/**
 * 绑定相关事件
 */
$(function () {

    /**
     * 验证
     */
    var setPwdVerify = new SetPwdVerify();
    //失去光标事件
    $('.app-section-content-content input').blur(function () {
        var currInputName = this.name,
            value = this.value,
            me = this;
        switch (currInputName) {
            case "ordPwd":
                var verifyResult = stateSwitch(setPwdVerify.pwdVerify(value, 'PWD_OLD'), $(this));
                if (verifyResult === 200) {
                    $http({
                        url: API_URL.SET_PWD_OLD,
                        method: "POST",
                        data: {
                            mobile: $('#mobile').val(),
                            password: value,
                        }
                    }, function (data) {
                        //原密码错误
                        if (data.code === -1) stateSwitch(VERIFY_MSG.SET_PWD.OLD_PWD_ERROR, $(me));
                    });
                }
                break;
            case "newPwd":
                stateSwitch(setPwdVerify.pwdVerify(value, 'PWD_NEW'), $(this));
                break;
            case "surePwd":
                stateSwitch(setPwdVerify.surePwdVerify($('#new-pwd'), value), $(this));
                break;
            default:
                break;
        }
    });
    //button click事件
    $('.app-section-content-content button').click(function (e) {
        window.event ? window.event.returnValue = false : e.preventDefault();

        var oldPwd = $("#ord-pwd");
        if (stateSwitch(setPwdVerify.pwdVerify(oldPwd.val(), 'PWD_OLD'), oldPwd) !== 200) return;

        var newPwd = $("#new-pwd");
        if (stateSwitch(setPwdVerify.pwdVerify(newPwd.val(), 'PWD_NEW'), newPwd) !== 200) return;

        var surePwd = $("#sure-pwd");
        if (stateSwitch(setPwdVerify.surePwdVerify(newPwd,surePwd.val()), surePwd) !== 200) return;

        //后台验证
        $http({
            url: API_URL.SET_PWD,
            method: "POST",
            data: $(".app-section-content-content").serializeObj()
        }, function (data) {
            switch (data.code) {
                case 200://设置成功
                    $(".set-result-model").addClass('active');
                    setTimeout(function(){
                        window.location.href="login.html";
                    },1000);
                    break;
                case -1://原始密码错误
                    stateSwitch(VERIFY_MSG.SET_PWD.OLD_PWD_ERROR, oldPwd)
                    break;
                default:
                    break;
            }
        });
    });
});