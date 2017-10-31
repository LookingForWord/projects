/**
 * 基本信息模板
 * Created by CLR on 2017-8-16.
 */

/**
 * 基本信息验证构造器
 * @constructor
 */
function SetBasicsVerify() {
    Verify.call(this);

    /**
     * 身份证验证
     * @param identityCard
     */
    this.identityCardVerify = function (identityCard) {
        //identityCard = $.trim(identityCard);

        if (identityCard != '' && !REG_RULE.IDENTITY_CARD.test(identityCard)) return VERIFY_MSG.SET_BASICS.IDENTITY_CARD_RULE;

        return 200;
    };

    /**
     * 邮箱验证
     * @param email
     */
    this.emailVerify = function (email) {
        //email = $.trim(email);

        if (email != '' && !REG_RULE.EMAIL.test(email)) return VERIFY_MSG.SET_BASICS.EMAIL_RULE;

        return 200;
    };

    this.qqVerify = function(qq){
        //qq = $.trim(qq);

        if(qq != '' && !REG_RULE.QQ.test(qq)) return VERIFY_MSG.SET_BASICS.QQ_RULE;

        return 200;
    }
}

/**
 * 绑定相关事件
 */
$(function () {

    /**
     * 基本信息验证
     */
    var setBasicsVerify = new SetBasicsVerify();
    //失去光标
    $(".basics input").blur(function () {
        var currInputName = this.name,
            value = this.value;
        switch (currInputName) {
            case "identityCard":
                stateSwitch(setBasicsVerify.identityCardVerify(value), $(this));
                break;
            case "email":
                stateSwitch(setBasicsVerify.emailVerify(value), $(this));
                break;
            case "qq":
                stateSwitch(setBasicsVerify.qqVerify(value),$(this));
                break;
            default:
                break;
        }
    });
    //button click
    $('.basics-btn .sure-btn').click(function (e) {
        window.event ? window.event.returnValue = false : e.preventDefault();

        var identityCard = $("#identity-card");
        if (stateSwitch(setBasicsVerify.identityCardVerify(identityCard.val()), identityCard) !== 200) return;

        var email = $("#email");
        if (stateSwitch(setBasicsVerify.emailVerify(email.val()), email) !== 200) return;

        var qq = $("#qq");
        if (stateSwitch(setBasicsVerify.qqVerify(qq.val()), qq) !== 200) return;

        //后台验证
        $http({
            url: API_URL.SET_BASICS,
            methods: "POST",
            data: $(".basics").serializeObj()
        }, function (data) {
            switch (data.code) {
                case 200:
                    alert("设置成功！");
                    break;
                default:
                    break;
            }
        });
    });

    /**
     * 处理图片
     */
    var options = {
            thumbBox: '.images-box-view',
            imgSrc: '',
            previewFun: function () {//预览裁剪之后的图片
                var dataUrl = recorta.getDataURL();
                if (dataUrl) $('.preview-head').html('<img src="' + dataUrl + '"/>');
            }
        };
    var recorta = $('.images-box').recortaFotos(options);
    var uploadState = false;
    $('#upload-image').on('change', function () {
        uploadState = false;
        var imgReg = /.jpeg|.jpg|.bmp|.gif|.png/;

        if (window.FileReader) {//支持图片裁剪
            if (!this.files) return console.warn("当前file不存在！");
            var reader = new FileReader(),
                file = this.files[0],
                filename = file.name.substring(file.name.lastIndexOf('.'));
            if (imgReg.test(filename) && file.size / (1024 * 1024) < 2) {
                console.log('哈哈哈');
                reader.onload = function (e) {
                    options.imgSrc = e.target.result;
                    console.log('哈哈哈嘻嘻');
                    //显示视图框
                    $('.images-box-view').addClass('active');
                    recorta = $('.images-box').recortaFotos(options);

                    uploadState = true;
                    //清空file
                    this.value = '';
                };
                reader.readAsDataURL(file);
            } else {
                return console.error("请选择符合规则的头像！");
            }

        } else {//不支持图片裁剪
            if (!document.all) return console.error("您当前浏览器不支持图片预览！");//ie !!document.all true 其他浏览器为false

            this.select();
            this.blur();
            var realLocalPath = document.selection.createRange().text;//IE9下获取实际的本地文件路径
            if (!realLocalPath) return console.error("您当前浏览器不支持图片预览！");

            if (!imgReg.test(realLocalPath.substring(realLocalPath.lastIndexOf('.')))) return console.error("请选择符合规则的头像！");

            var img = $(".images-box img");
            img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + realLocalPath + "\")";
            img[0].src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

            var imgWidth = img.width(),
                imgHeight = img.height(),
                limitWidth = 80,
                limitHeight = 80;
            if (imgWidth > limitWidth || imgHeight > limitHeight){
                img.removeClass('active');
                return alert("请选择80 X 80的头像！");
            }
            alert('您当前浏览器不支持图像裁剪，是否上传您选择的头像！');
            img.addClass('active');
            $(".preview-head").append(img.clone(true));

            uploadState = true;
            //清空file
            this.value = '';
        }
    });

    /**
     * 头像上传
     * @param data
     */
    function uploadSuc(data){
        console.log(data);
    }
    $('.save-image').click(function () {
        console.log("来来浪");
        console.log(uploadState === false);
        if(!uploadState) return;

        if(window.FileReader){
            //获取base64
            var data = recorta.getBlob(),
                formData = new FormData();
            formData.append("file",data);
            $http({
                url:API_URL.SET_BASICS_HEAD,
                method:"POST",
                data:formData,
                processData : false,
                contentType : false,
            },uploadSuc);
        }else{
            $('.upload-image-label form').ajaxSubmit({
                url : API_URL.SET_BASICS_HEAD,
                type:"POST",
                success : uploadSuc,
                resetForm : true,
            });
        }
    });
});