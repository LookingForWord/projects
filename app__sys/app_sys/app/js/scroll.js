/**
 * 轮播模块
 * Created by CLR on 2017-8-21.
 */
$(function(){
    var slide = $('.swiper-slide');
    if(slide.length > 1){
        //重置swiper-wrapper样式
        $('.swiper-wrapper').css({
            width: slide.length*slide.width()+"px"
        });
        //显示分页与左右切换icon
        $('.sys-list-page').addClass('active');
        $('.lr-icon').addClass('active');
        new Swiper('.swiper-container', {
            pagination: '.sys-list-page',
            paginationClickable: true,
            nextButton: '.left-icon',
            prevButton: '.right-icon',
            speed:1000,
            onSlideChangeStart:function(swiper){
                var currPage = $('.sys-list-page span:nth-child('+(swiper.activeIndex + 1)+')');
                $('.sys-list-page span').removeClass('active');
                currPage.length > 0 && currPage.addClass('active');
                if(swiper.activeIndex === 0){
                    $('.right-icon').removeClass('available');
                }else{
                    var rightIcon = $('.right-icon');
                    if(!rightIcon.hasClass('available')){
                        rightIcon.addClass('available');
                    }
                }
                if(swiper.activeIndex === slide.length-1){
                    $('.left-icon').removeClass('available');
                }else{
                    var leftIcon = $('.left-icon');
                    if(!leftIcon.hasClass('available')){
                        leftIcon.addClass('available');
                    }
                }
            },
            onInit:function(swiper){
                var currPage = $('.sys-list-page span:nth-child('+(swiper.activeIndex + 1)+')');
                $('.sys-list-page span').removeClass('active');
                currPage.length > 0 && currPage.addClass('active');
            }
        });
    }else{
        $('.swiper-wrapper').removeAttr('style');
        $('.sys-list-page').removeClass('active');
        $('.lr-icon').removeClass('active');
    }
});