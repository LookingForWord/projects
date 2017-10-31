/**
 * 常量模块
 * Created by CLR on 2017-8-14.
 */

/**
 * 接口地址
 */
var API_BASE_URL = 'http://localhost/app_sys/app_sys/app/',//接口基路径
    API_URL = {//接口列表
        REGISTER_FIRST: API_BASE_URL + "resource/registerFirst.json",//注册第一步
        REGISTERED: API_BASE_URL + "resource/registerFirst.json",//失去光标检验是否注册
        GET_IMG_CODE: API_BASE_URL + "resource/imgCode.json",//获取图像验证码
        REGISTER_SECOND: API_BASE_URL + "resource/registerFirst.json",//注册第二步
        GET_MOBILE_CODE: API_BASE_URL + "resource/imgCode.json",//获取手机验证码
        LOGIN: API_BASE_URL + "resource/registerFirst.json",//登录接口
        SET_PWD_OLD: API_BASE_URL + "resource/registerFirst.json",//原始密码验证
        SET_PWD: API_BASE_URL + "resource/registerFirst.json",//更新密码
        FORGET_PWD_FIRST: API_BASE_URL + "resource/registerFirst.json",//忘记密码第一步
        FORGET_PWD_SURE: API_BASE_URL + "resource/registerFirst.json",//忘记密码确认
        SET_BASICS: API_BASE_URL + "resource/registerFirst.json",//设置基本资料
        SET_BASICS_HEAD: API_BASE_URL + "resource/registerFirst.json",//头像上传地址
        BIND_SYS_USERNAME: API_BASE_URL + "resource/registerFirst.json",//绑定系统账号验证
        BIND_SYS: API_BASE_URL + "resource/registerFirst.json",//绑定系统
    };

/**
 * 验证信息
 */
var VERIFY_MSG = {
    REGISTER: {
        MOBILE_REGISTERED: "该手机号已注册，请登录",
    },
    VERIFY: {
        MOBILE_EMPTY: "请输入手机号",
        MOBILE_ERROR: "请输入正确的手机号码",
        PWD_EMPTY: "请输入密码",
        PWD_RULE: "请输入密码（6-16位数字或字母）",
        IMG_CODE_EMPTY: "请输入图形验证码",
        IMG_CODE_RULE: "请输入图形验证码(4位数字)",
        IMG_CODE_ERROR: "图形验证码错误",
        MOBILE_CODE_EMPTY: "请输入手机验证码",
        MOBILE_CODE_ERROR: "手机验证码输入错误",
        MOBILE_CODE_RULE: "请输入手机验证码(6位数字)",
        MOBILE_CODE_UPDATE: "请重新获取验证码"
    },
    LOGIN: {
        PWD_ERROR: "用户名或密码错误",
        PWD_ERROR_LIMIT: "密码错误次数过多,账户已锁定,建议找回密码"
    },
    SET_PWD: {
        OLD_PWD_ERROR: "原密码输入错误",
        SURE_PWD_EMPTY: "请再次输入新密码",
        SURE_PWD_ERROR: "新密码两次输入不一致"
    },
    PWD_OLD: {
        PWD_EMPTY: "请输入原密码",
        PWD_RULE: "请输入原密码（6-16位数字或字母）",
    },
    PWD_NEW: {
        PWD_EMPTY: "请输入新密码",
        PWD_RULE: "请输入新密码（6-16位数字或字母）",
    },
    FORGET_PWD: {
        MOBILE_UNREGISTERED: "该手机号未注册",
        SURE_PWD_EMPTY: "请再次输入密码",
        SURE_PWD_ERROR: "两次密码输入不一致"
    },
    SET_BASICS:{
        IDENTITY_CARD_RULE:"身份证格式错误",
        EMAIL_RULE:"邮箱格式错误",
        QQ_RULE:"QQ格式错误"
    },
    BIND_SYS:{
        USERNAME_EMPTY:"账户不能为空",
        USERNAME_ERROR:"请输入正确的账号",
        PWD_EMPTY:"密码不能为空",
        PWD_ERROR:"用户名或密码错误"
    }
}

/**
 * 验证规则
 */
var REG_RULE = {
    MOBILE: /^1[34578]\d{9}$/,
    PWD: /^[a-zA-Z\d]{6,16}$/,/**********/
    IMG_CODE: /^\d{4}$/,/**********/
    MOBILE_CODE: /^\d{6}$/,/********/
    IDENTITY_CARD:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
    EMAIL:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
    QQ:/^[1-9][0-9]{4,14}$/
}
