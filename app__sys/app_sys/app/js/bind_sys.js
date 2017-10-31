/**
 * Created by CLR on 2017-8-18.
 */

/**
 * 绑定账户验证
 * @constructor
 */
function BindSysVerify(){

    this.usernameVerify = function(username){
        username = $.trim(username);

        if(username == '')return VERIFY_MSG.BIND_SYS.USERNAME_EMPTY;

        return 200;
    }

    this.pwdVerify = function(pwd){
        pwd = $.trim(pwd);

        if(pwd == '')return VERIFY_MSG.BIND_SYS.PWD_EMPTY;

        return 200;
    }
}

$(function(){

    var bindSysVerify = new BindSysVerify();
    $(".bind-sys-form input").blur(function(){
        var currInputName = this.name,
            value = this.value,
            me = $(this);
        switch (currInputName){
            case "username":
                var usernameVerifyResult = stateSwitch(bindSysVerify.usernameVerify(value),$(this));
                if(usernameVerifyResult === 200){
                    $http({
                        url:API_URL.BIND_SYS_USERNAME,
                        method:"POST",
                        data:{
                            username:value
                        }
                    },function(data){
                        if(data.code === 200){//账号正确
                            me.siblings(".login_mobile_correct").addClass('active');
                        }else if(data.code === -1){//错误
                            stateSwitch(VERIFY_MSG.BIND_SYS.USERNAME_ERROR,me);
                        }
                    })
                }
                break;
            case "pwd":
                stateSwitch(bindSysVerify.pwdVerify(value),$(this));
                break;
            default:
                break;
        }
    });
    $(".bind-sys-form button").click(function(e){
        window.event ? window.event.returnValue = false : e.preventDefault();

        var username = $("#username");
        if(stateSwitch(bindSysVerify.usernameVerify(username.val()),username) !== 200) return;

        var pwd = $("#pwd");
        if(stateSwitch(bindSysVerify.pwdVerify(pwd.val()),pwd) !== 200) return;

        $http({
            url:API_URL.BIND_SYS,
            method:"POST",
            data:$(".bind-sys-form").serializeObj()
        },function(data){
            switch (data.code){
                case 200:
                    $(".bind-result").addClass('active');
                    break;
                case -1://密码错误
                    stateSwitch(VERIFY_MSG.BIND_SYS.PWD_ERROR,pwd);
                    break;
                default:
                    break;
            }
        });
    });

    $("body").click(function(){
        var bindModel = $(".bind-result");
        if(bindModel.hasClass('active'))bindModel.removeClass('active');
    });
});