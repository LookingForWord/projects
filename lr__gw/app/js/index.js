/**
 * 滚动条事件处理
 * @param currSelector 目标元素选择器
 * @param headerSelector header元素选择器
 */
function scrollFun(currSelector, headerSelector) {
    var scrollTop = $(this).scrollTop(),
        currentElemTop = $(currSelector).offset().top,
        header = $(headerSelector),
        offsetTop = currentElemTop - scrollTop - header.height();
    if (offsetTop < 10) {
        if (!header.hasClass('active')) {
            header.addClass('active');
            header.find('img').attr("src", "images/logo2.png");
        }
    } else {
        if (header.hasClass('active')) {
            header.removeClass('active');
            header.find('img').attr("src", "images/logo1.png");
        }
    }
}
/**
 * 页面渲染完成时，执行相关函数
 */
$(function () {
    $(window).scroll(function () {
        scrollFun('.index-business', '.header');
    });
});
