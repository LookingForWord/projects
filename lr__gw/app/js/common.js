/**
 * Created by CLR on 2017-7-13.
 */

/**
 * 检测当前浏览器是否支持3D
 * @return Boolean
 */
function has3D() {
    if (!window.getComputedStyle) {
        return false;
    }
    var el = document.createElement('p'),
        has3d,
        transforms = {
            'webkitTransform':'-webkit-transform',
            'OTransform':'-o-transform',
            'msTransform':'-ms-transform',
            'MozTransform':'-moz-transform',
            'transform':'transform'
        };
    document.body.insertBefore(el, null);
    for (var t in transforms) {
        if (el.style[t] !== undefined) {
            el.style[t] = "translate3d(1px,1px,1px)";
            has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
        }
    }
    document.body.removeChild(el);
    return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
}
$(function(){
    /**
     * 窗口改变时刷新页面
     */
    $(window).resize(function(){
        window.location.reload();
    });
});
