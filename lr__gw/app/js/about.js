/**
 * 关于我们 滚轮事件处理
 */
window.onload = function () {
    /**
     * 满屏处理
     *
     */
    var targetOffset = null;
    var mySwiper = new Swiper('.swiper-container-main', {
            speed: 400,//滑动时间
            mode: 'vertical',
            resistance: '100%',
            loop: false,//是否循环
            mousewheelControl: true,//是否滚轮控制
            pagination: '.pagination',
            paginationClickable: true,
            scrollbarHide: true,//滚动条是否隐藏
            useCSS3Transforms: has3D() ? true : false,
            DOMAnimation: false,
            onSlideChangeStart: function (slide) {//切换屏幕之前
                if (slide.activeIndex !== undefined) {
                    var header = $('.header');
                    var pagCurr = $('.pagination-content span[data-index=' + slide.activeIndex + ']');
                    var pagPre = $('.pagination-content span[data-index=' + slide.previousIndex + ']');
                    pagPre && pagPre.removeAttr('style');
                    //alert(navigator.appVersion);
                    if (slide.activeIndex === 0) {
                        if (header.hasClass('active')) {
                            header.removeClass('active');
                            header.find('img').attr("src", "images/logo1.png");
                        }
                        pagCurr && pagCurr.css("color", "#fff");
                    } else {
                        if (!header.hasClass('active')) {
                            header.addClass('active');
                            header.find('img').attr("src", "images/logo2.png");
                        }
                        pagCurr && pagCurr.css("color", "#448AFF");
                        if (slide.activeIndex === 3 && slide.previousIndex === 2) {
                            var footerHeight = $('.footer').height();
                            var wrapperHeight = $('.swiper-wrapper').height();
                            if (has3D()) {
                                var str = $('.swiper-wrapper')[0].style.transform;
                                if(str){
                                    str = str.substring(str.indexOf(',') + 1, str.lastIndexOf(',') - 2);
                                    targetOffset = Number(str) - footerHeight + wrapperHeight;
                                    if (targetOffset) {
                                        $('.swiper-wrapper').css({
                                            '-webkit-transform': 'translate3d(0px, '+targetOffset+'px, 0px)',
                                            '-o-transform': 'translate3d(0px, '+targetOffset+'px, 0px)',
                                            '-ms-transform': 'translate3d(0px, '+targetOffset+'px, 0px)',
                                            '-moz-transform': 'translate3d(0px, '+targetOffset+'px, 0px)',
                                            'transform': 'translate3d(0px, '+targetOffset+'px, 0px)'
                                        });
                                    }
                                }
                            } else {
                                var no3DStr = $('.swiper-wrapper')[0].style.top;
                                if(no3DStr){
                                    targetOffset = parseFloat(no3DStr)-footerHeight+wrapperHeight;
                                    if (targetOffset) {
                                        $('.swiper-wrapper').css("top",targetOffset+"px");
                                    }
                                }
                            }
                        }
                        if (slide.activeIndex === 3 && slide.previousIndex === 3) {
                            if (targetOffset) {
                                if (has3D()) {
                                    $('.swiper-wrapper').css({
                                        '-webkit-transform': 'translate3d(0px, '+targetOffset+'px, 0px)',
                                        '-o-transform': 'translate3d(0px, '+targetOffset+'px, 0px)',
                                        '-ms-transform': 'translate3d(0px, '+targetOffset+'px, 0px)',
                                        '-moz-transform': 'translate3d(0px, '+targetOffset+'px, 0px)',
                                        'transform': 'translate3d(0px, '+targetOffset+'px, 0px)'
                                    });
                                } else {
                                    $('.swiper-wrapper').css("top",targetOffset+"px");
                                }
                            }
                        }
                    }
                }
            }
        }
    );
    /**
     * 蓝润里程碑动画处理
     */
    var unslider = $('.history-container').unslider({speed: 500,delay: 3000000}),
        data = unslider.data('unslider');
    $('.unslider-arrow').click(function () {
        var fn = this.className.split(' ')[1];
        data[fn]();
    });
};
