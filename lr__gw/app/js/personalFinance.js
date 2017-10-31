$(function () {
    /**
     * 设定产品动效
     */
    //激活
    $('.personal-finance-business-normal').mouseover(function () {
        !$(this).hasClass('active') && $(this).addClass('active');
    });
    //重置
    $('.personal-finance-business-normal').mouseout(function () {
        $(this).hasClass('active') && $(this).removeClass('active');
    });

    /**
     * 滚动条处理
     */
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop(),
            windowInnerHeight = $(this).innerHeight(),
            header = $('.header');
        if(scrollTop > windowInnerHeight/3){
            if (!header.hasClass('active')) {
                header.addClass('active');
                header.find('img').attr("src", "images/logo2.png");
            }
        }else{
            if (header.hasClass('active')) {
                header.removeClass('active');
                header.find('img').attr("src", "images/logo1.png");
            }
        }
    });
})
