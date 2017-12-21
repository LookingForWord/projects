/**
 * 适配工具
 */
!function (designWidth) {
    let screenWidth = innerWidth ;//window.screen.width;

    if (screenWidth < designWidth){
        let initScale = Math.ceil(screenWidth*10000/designWidth)/10000;
        let contentStr = `width=device-width, initial-scale=${initScale}, user-scalable=yes, maximum-scale=1`;

        let viewportMeta = document.querySelector('meta[name="viewport"]');
        viewportMeta.setAttribute('content',contentStr);
    }

}(1400);
