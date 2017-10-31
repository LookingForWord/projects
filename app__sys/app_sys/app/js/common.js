/**
 * 公用模块
 * Created by CLR on 2017-8-22.
 */

/**
 * 请求
 * @param obj jQuery ajax 参数
 * @param sucFun 成功回调
 */
function $http(obj, sucFun) {

    if (typeof obj !== 'object') {
        return console.error('$http需要一个Object作为参数');
    }

    obj.success = function (data) {
        if (!data) {
            return console.error('服务器响应失败！');
        }

        if (typeof data === 'string') {
            data = JSON.parse(data);
        }
        sucFun(data);
    };

    obj.error = function (err) {
        console.error(err);
    };

    obj.statusCode = {
        404: function () {
            //alert('page not found');
        }
    }

    $.ajax(obj);
}

/**
 * 表单数据转对象
 * @return 表单数据对象
 */
$.fn.serializeObj = function () {
    var str = $(this).serialize(),
        data = {};
    if (str != '') {
        var arr = str.split("&");
        $.each(arr, function (index, value) {
            var dataArr = value.split('=');
            dataArr[1] && (data[dataArr[0]] = dataArr[1]);
        })
    }
    return data;
};

/**
 * 获取图形验证码
 * @param $imgCode jQ元素对象
 */
function getImgCode($imgCode) {
    $imgCode.click(function () {
        $http({
            method: "GET",
            url: API_URL.GET_IMG_CODE
        }, function (data) {
            if (data.code === 200) {
                $imgCode.attr('src', data.imgPath);
            }
        });
    });
}

/**
 * 获取手机验证码
 * @param $mobileCode jQuery button对象
 */
function getMobileCode($mobileCode) {
    $mobileCode.click(function () {
        if (!$(this).hasClass('disable')) {
            $http({
                url: API_URL.GET_MOBILE_CODE
            }, function (data) {
                if (data.code === 200) {//发送成功
                    $mobileCode.addClass('disable').html("重新发送(<span>120</span>S)</span>");
                    //启动定时器
                    mobileCodeTimer($mobileCode.find('span'));
                }
            });
        }
    });
}

/**
 * 手机验证码 定时器
 * @param $time
 */
var timer = null;
function mobileCodeTimer($time) {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
    var initTime = parseInt($time.html());
    timer = setInterval(function () {
        $time.html(--initTime);
        //暂停定时器
        if (initTime <= 0) {
            //启用按钮
            $time.parent().removeClass('disable').html('获取验证码');
            clearInterval(timer);
            timer = null;
        }
    }, 1000)
}

/**
 * 公共验证构造函数
 * @constructor
 */
function Verify() {
    /**
     * 手机号验证
     * @param mobile 输入值
     */
    this.mobileVerify = function (mobile) {
        //去空格
        //mobile = $.trim(mobile);

        //输入为空
        if (mobile == '') return VERIFY_MSG.VERIFY.MOBILE_EMPTY;

        //验证手机号规则
        if (!REG_RULE.MOBILE.test(mobile)) return VERIFY_MSG.VERIFY.MOBILE_ERROR;

        return 200;
    };

    /**
     * 密码验证
     * @param pwd
     */
    this.pwdVerify = function (pwd, verifyMsg) {
        verifyMsg = verifyMsg || "VERIFY";
        //pwd = $.trim(pwd);
        if (pwd == '') return VERIFY_MSG[verifyMsg].PWD_EMPTY;

        if (!REG_RULE.PWD.test(pwd)) return VERIFY_MSG[verifyMsg].PWD_RULE;

        return 200;
    }

    /**
     * 图形验证码验证
     */
    this.imgCodeVerify = function (imgCode) {
        //imgCode = $.trim(imgCode);

        //验证为空
        if (imgCode == '') return VERIFY_MSG.VERIFY.IMG_CODE_EMPTY;

        if (!REG_RULE.IMG_CODE.test(imgCode)) return VERIFY_MSG.VERIFY.IMG_CODE_RULE;

        return 200;
    }

    /**
     * 手机验证码验证
     * @param mobileCode
     */
    this.mobileCodeVerify =  function (mobileCode) {
        //mobileCode = $.trim(mobileCode);

        if (mobileCode == '') return VERIFY_MSG.VERIFY.MOBILE_CODE_EMPTY;

        if (!REG_RULE.MOBILE_CODE.test(mobileCode)) return VERIFY_MSG.VERIFY.MOBILE_CODE_RULE;

        return 200;
    }
}

/**
 * 切换验证状态
 * @param verifyResult 验证结果值
 * @param $currInput 目标input
 */
function stateSwitch(verifyResult, $currInput) {
    if (!verifyResult) return;

    var errorElem = $currInput.parent().parent(),
        errorTitle = errorElem.find('.error-title span');
    if (verifyResult === 200) {
        errorElem.removeClass('error');
    } else {
        $currInput.siblings('.login_mobile_correct').removeClass('active');
        //显示错误信息
        errorTitle.html(verifyResult);
        errorElem.addClass('error');
        //清空
        //$currInput.val('');
    }
    return verifyResult;
}

/**
 * 退出登录
 * @param selector
 */
function showModel(e,selector){
    window.event ? window.event.returnValue = false : e.preventDefault();
    $(selector).addClass("active");
}

/**
 * 弹出框确认
 */
function sureModel(e,selector,callback){
    window.event ? window.event.returnValue = false : e.preventDefault();
    callback = callback || function (){};
    callback(e,selector,$(e.currentTarget).attr("data-param"));
}
/**
 * 关闭弹出框
 * @param e
 * @param selector
 */
function closeModel(e,selector){
    window.event ? window.event.returnValue = false : e.preventDefault();
    $(selector).removeClass('active');
}

/**
 * 退出登录
 * @param e
 * @param selector
 */
function exitLoginSure(e,selector){
    //后台处理成功之后执行下面
    closeModel(e,selector);
    window.location.href = 'login.html';
}

/**
 * 删除绑定系统
 * @param e
 * @param selector
 * @param param
 */
function deleteBindSys(e,selector,param){
    closeModel(e,selector);
}





















