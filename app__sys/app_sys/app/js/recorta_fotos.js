/**
 * 图片裁剪模块
 *      基于jquery
 *      Created by yangshao on 2017/8/13.
 */
!function(factory){
    try{
        factory(jQuery);
    }catch (err){
        console.error(err);
    }
}(function($){
    /**
     * 构造器
     * @param options 参数选项 objects
     */
    var recortaFotos = function(options,el){
        try{
            if(typeof options === 'object'){
                var imgBox = el || $(options.imageBox),
                    obj = {
                        state : {},
                        ratio : 1,//当前图片比例
                        options : options,//当前传入参数
                        imageBox : imgBox,//背景图片容器
                        thumbBox : imgBox.find(options.thumbBox),//视图框
                        image : new Image(),//创建image对象
                        getDataURL: function ()
                        {//获取裁剪后的图片的data64 url
                            if(imgBox.length > 0){
                                //获取视图框宽高
                                var width = this.thumbBox.width(),
                                    height = this.thumbBox.height(),
                                    //创建canvas
                                    canvas = document.createElement("canvas"),
                                    dim = imgBox.css('background-position').split(' '),
                                    size = imgBox.css('background-size').split(' '),
                                    dx = parseInt(dim[0]) - imgBox.width()/2 + width/2,
                                    dy = parseInt(dim[1]) - imgBox.height()/2 + height/2,
                                    dw = parseInt(size[0]),
                                    dh = parseInt(size[1]),
                                    sh = parseInt(this.image.height),
                                    sw = parseInt(this.image.width);

                                //设置canvas宽高
                                canvas.width = width;
                                canvas.height = height;

                                //绘制裁剪出来的图片
                                var context = canvas.getContext('2d');
                                context.drawImage(
                                    this.image,//要使用的图像
                                    0,//开始裁剪的x坐标
                                    0,//开始裁剪的y坐标
                                    sw,//被裁剪图像的宽度
                                    sh,//被裁剪图像的高度
                                    dx,//在画布上放置图像的x坐标位置
                                    dy,//在画布上放置图像的y坐标位置
                                    dw,//要使用图像的宽度
                                    dh//要使用图像的高度
                                )
                            }

                            //转换图像为dataUrl
                            return canvas.toDataURL('image/png');
                        },
                        getBlob: function()
                        {//将dataUrl转成blob对象
                            var imageData = this.getDataURL();
                            var b64 = imageData.replace('data:image/png;base64,','');
                            var binary = atob(b64);
                            var array = [];
                            for (var i = 0; i < binary.length; i++) {
                                array.push(binary.charCodeAt(i));
                            }
                            return  new Blob([new Uint8Array(array)], {type: 'image/png'});
                        },
                        zoomIn: function ()
                        {//放大
                            this.ratio*=1.1;
                            setBackground();
                        },
                        zoomOut: function ()
                        {//缩小
                            this.ratio*=0.9;
                            setBackground();
                        }
                    },
                    setBackground = function(){//重置背景图位置
                        var w = parseInt(obj.image.width) * obj.ratio;
                        var h = parseInt(obj.image.height) * obj.ratio;

                        var pw = (imgBox.width() - w)/2;
                        var ph = (imgBox.height() - h) /2;

                        imgBox.css({
                            'background-image': 'url(' + obj.image.src + ')',
                            'background-size': w +'px ' + h + 'px',
                            'background-position': pw + 'px ' + ph + 'px',
                            'background-repeat': 'no-repeat'
                        });

                        //设置预览图片
                        preview();
                    },
                    preview = function(){//设置预览图片
                        if(options.previewFun){
                            options.previewFun();
                        }
                    },
                    imgMouseDown = function(e){//鼠标按下事件处理函数
                        e.stopImmediatePropagation();//阻止冒泡
                        obj.state.dragable = true;
                        obj.state.mouseX = e.clientX;
                        obj.state.mouseY = e.clientY;
                    },
                    imgMouseMove = function(e){//鼠标移动事件
                        e.stopImmediatePropagation();
                        if(obj.state.dragable){//保证按下移动鼠标才会执行
                            var x = e.clientX - obj.state.mouseX;
                            var y = e.clientY - obj.state.mouseY;

                            //改变背景图的位置
                            var bg = imgBox.css('background-position').split(' ');
                            var bgX = x + parseInt(bg[0]);
                            var bgY = y + parseInt(bg[1]);
                            imgBox.css('background-position',bgX+"px "+bgY+"px");

                            //重置鼠标的初始位置
                            obj.state.mouseX = e.clientX;
                            obj.state.mouseY = e.clientY;

                            //设置预览图片
                            preview();
                        }
                    },
                    imgMouseUp = function(e){//鼠标松开按钮时
                        e.stopImmediatePropagation();
                        obj.state.dragable = false;
                    },
                    zoomImage = function(e){//缩放图片
                        //滚动条向上滑动 放大图片  否则缩小图片
                        e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? obj.ratio *= 1.1 : obj.ratio *= .9;
                        setBackground();
                    };

                    //图片加载完成
                obj.image.onload = function(){
                    setBackground();//设置背景
                    //绑定事件
                    imgBox.bind('mousedown',imgMouseDown);
                    imgBox.bind('mousemove',imgMouseMove);
                    $(window).bind('mouseup',imgMouseUp);
                    imgBox.bind('mousewheel DOMMouseScroll',zoomImage);
                };
                obj.image.src = options.imgSrc;
                //移除事件
                imgBox.on('remove',function(){$(window).unbind('mouseup',imgMouseUp)});

                return obj;
            }else{
                throw new Error("recortaFotos需要一个对象作为参数！");
            }
        }catch (err){
            console.error(err);
        }
    };

    //为jquery添加裁剪函数
    $.fn.recortaFotos = function(options){
        return new recortaFotos(options,this);
    };
});