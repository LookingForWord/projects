/**
 * 垫片模块
 */
!function () {
    /**
     * Object.assign 垫片
     */
    if (!Object.assign) require('es6-object-assign/auto');

    /**
     * Promise 垫片
     */
    if(!window.Promise) window.Promise = require('es6-promise-polyfill').Promise;
}();
