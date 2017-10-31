/**
 * Created by yangshao on 2017/2/27 0027.
 */
//安装node-sass set SASS_BINARY_PATH=E:/node1/win32-x64-46_binding.node   npm install node-sass --save-dev
//npm config set registry=http://registry.npmjs.org
//npm config set strict-ssl false
//npm install jquery@1.12.4 vue node-sass@latest webpack-dev-server html-loader webpack style-loader url-loader image-webpack-loader css-loader file-loader html-webpack-plugin postcss-loader autoprefixer babel-loader babel-core babel-preset-es2015 sass-loader transfer-webpack-plugin --save-dev
var webpack=require('webpack');
var path=require('path');
var htmlWebpackPlugin=require('html-webpack-plugin');//该插件生成html文件并引入打包后的js文件
var TransferWebpackPlugin = require('transfer-webpack-plugin');//复制文件
module.exports={//初始化
    context:__dirname,//定义上下文路径
    entry:{
        login:"./app/js/login",
        register:"./app/js/register",
        forget_pwd:"./app/js/forget_pwd",
        set_basics:"./app/js/set_basics",
        set_pwd:"./app/js/set_pwd",
        index:"./app/js/index",
        sys_list:"./app/js/sys_list",
        bind_sys:"./app/js/bind_sys",
        manage_sys:"./app/js/manage_sys",
        vendor:[// 第三方库
            'jquery'
        ]
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"js/[name].bundle.js",
        //publicPath:'http://cdn.com/'//上线时的绝对地址，生成的文件对文件地址的引用将变成绝对地址
    },
    //devtool:"source-map",
    devServer:{
        hot:true,
        inline:true
    },
    resolve:{
        extensions:['.js','.css','.scss','.vue'],
        alias: {
            //'vue$': 'vue/dist/vue.common.js'
        }
    },
    module:{
        loaders:[
            //处理css
            {
                test:/\.css$/,
                exclude:/node_modules/,
                include:/app/,
                //loader:"style-loader!css-loader?importLoaders=1!postcss-loader"
                loader:"style-loader!css-loader"
            },
            //处理js
            {
                test:/\.js$/,
                exclude:/node_modules/,
                include:/app/,
                loader:"babel-loader",
                query:{presets:"es2015"}
            },
            //处理sass npm i sass-loader --save-dev
            // {
            //    test:/\.scss$/,
            //    include:/app/,
            //    loader:"style-loader!css-loader!sass-loader"
            // },
            //处理html模板文件 npm install html-loader --save-dev 以字符串形式打包
            {
                test:/\.html$/,
                include:/app/,
                loader:"html-loader"
            },
            //npm install url-loader --save-dev  文件小于指定大小，则把地址变成Data url  大于指定文件大小 则让file-loader处理
            {
                test:/\.(png|jpg|gif|svg)$/i,
                exclude:/node_modules/,
                loaders:[
                    'url-loader?limit=2000&name=images/[name]-[hash:5].[ext]',
                    {
                        loader:'image-webpack-loader',//压缩图片以及参数配置
                        query: {
                            progressive: true,
                            optimizationLevel: 7,
                            interlaced: false,
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({//生成多页面时，在拷一份即可
            filename:"login.html",//生成的文件名
            template:"app/login.html",//以已经存在的index页面生成index页面两者的区别就是添加了一些js引用
            inject:'head',//指定脚本引用在head标签中还是body标签中，false表示不自动注入脚本文件
            chunks:['dist/common','login'],//指定要引入的脚本文件
            //excludeChunks:['c'],//指定引入除了c文件的其他脚本文件
            //minify:{//对生成的html进行压缩
            //    removeComments:true,//删除注释
            //    collapseWhitespace:true//删除空格
            //}
        }),
        new htmlWebpackPlugin({//生成多页面时，在拷一份即可
            filename:"register.html",//生成的文件名
            template:"app/register.html",//以已经存在的index页面生成index页面两者的区别就是添加了一些js引用
            inject:'head',//指定脚本引用在head标签中还是body标签中，false表示不自动注入脚本文件
            chunks:['dist/common','register'],//指定要引入的脚本文件
            //excludeChunks:['c'],//指定引入除了c文件的其他脚本文件
            //minify:{//对生成的html进行压缩
            //    removeComments:true,//删除注释
            //    collapseWhitespace:true//删除空格
            //}
        }),
        new htmlWebpackPlugin({//生成多页面时，在拷一份即可
            filename:"forget_pwd.html",//生成的文件名
            template:"app/forget_pwd.html",//以已经存在的index页面生成index页面两者的区别就是添加了一些js引用
            inject:'head',//指定脚本引用在head标签中还是body标签中，false表示不自动注入脚本文件
            chunks:['dist/common','forget_pwd'],//指定要引入的脚本文件
            //excludeChunks:['c'],//指定引入除了c文件的其他脚本文件
            //minify:{//对生成的html进行压缩
            //    removeComments:true,//删除注释
            //    collapseWhitespace:true//删除空格
            //}
        }),
        new htmlWebpackPlugin({//生成多页面时，在拷一份即可
            filename:"set_basics.html",//生成的文件名
            template:"app/set_basics.html",//以已经存在的index页面生成index页面两者的区别就是添加了一些js引用
            inject:'head',//指定脚本引用在head标签中还是body标签中，false表示不自动注入脚本文件
            chunks:['dist/common','set_basics'],//指定要引入的脚本文件
            //excludeChunks:['c'],//指定引入除了c文件的其他脚本文件
            //minify:{//对生成的html进行压缩
            //    removeComments:true,//删除注释
            //    collapseWhitespace:true//删除空格
            //}
        }),
        new htmlWebpackPlugin({//生成多页面时，在拷一份即可
            filename:"set_pwd.html",//生成的文件名
            template:"app/set_pwd.html",//以已经存在的index页面生成index页面两者的区别就是添加了一些js引用
            inject:'head',//指定脚本引用在head标签中还是body标签中，false表示不自动注入脚本文件
            chunks:['dist/common','set_pwd'],//指定要引入的脚本文件
            //excludeChunks:['c'],//指定引入除了c文件的其他脚本文件
            //minify:{//对生成的html进行压缩
            //    removeComments:true,//删除注释
            //    collapseWhitespace:true//删除空格
            //}
        }),
        new htmlWebpackPlugin({//生成多页面时，在拷一份即可
            filename:"index.html",//生成的文件名
            template:"app/index.html",//以已经存在的index页面生成index页面两者的区别就是添加了一些js引用
            inject:'head',//指定脚本引用在head标签中还是body标签中，false表示不自动注入脚本文件
            chunks:['dist/common','index'],//指定要引入的脚本文件
            //excludeChunks:['c'],//指定引入除了c文件的其他脚本文件
            //minify:{//对生成的html进行压缩
            //    removeComments:true,//删除注释
            //    collapseWhitespace:true//删除空格
            //}
        }),
        new htmlWebpackPlugin({//生成多页面时，在拷一份即可
            filename:"sys_list.html",//生成的文件名
            template:"app/sys_list.html",//以已经存在的index页面生成index页面两者的区别就是添加了一些js引用
            inject:'head',//指定脚本引用在head标签中还是body标签中，false表示不自动注入脚本文件
            chunks:['dist/common','sys_list'],//指定要引入的脚本文件
            //excludeChunks:['c'],//指定引入除了c文件的其他脚本文件
            //minify:{//对生成的html进行压缩
            //    removeComments:true,//删除注释
            //    collapseWhitespace:true//删除空格
            //}
        }),
        new htmlWebpackPlugin({//生成多页面时，在拷一份即可
            filename:"bind_sys.html",//生成的文件名
            template:"app/bind_sys.html",//以已经存在的index页面生成index页面两者的区别就是添加了一些js引用
            inject:'head',//指定脚本引用在head标签中还是body标签中，false表示不自动注入脚本文件
            chunks:['dist/common','bind_sys'],//指定要引入的脚本文件
            //excludeChunks:['c'],//指定引入除了c文件的其他脚本文件
            //minify:{//对生成的html进行压缩
            //    removeComments:true,//删除注释
            //    collapseWhitespace:true//删除空格
            //}
        }),
        new htmlWebpackPlugin({//生成多页面时，在拷一份即可
            filename:"manage_sys.html",//生成的文件名
            template:"app/manage_sys.html",//以已经存在的index页面生成index页面两者的区别就是添加了一些js引用
            inject:'head',//指定脚本引用在head标签中还是body标签中，false表示不自动注入脚本文件
            chunks:['dist/common','manage_sys'],//指定要引入的脚本文件
            //excludeChunks:['c'],//指定引入除了c文件的其他脚本文件
            //minify:{//对生成的html进行压缩
            //    removeComments:true,//删除注释
            //    collapseWhitespace:true//删除空格
            //}
        }),
        new webpack.optimize.CommonsChunkPlugin({//将指定的文件的公共代码提取出来打包
            name: 'dist/common',
            chunks: [],//设置公共代码的入口文件。默认是所有的entry
            filename: 'common/common.bundle.js',//设置代码块的文件名称
            minChunks:10
        }),
        //把指定文件夹下的文件复制到指定的目录
        new TransferWebpackPlugin([
            {from:'resource',to:'resource'}
        ], path.resolve(__dirname,"app")),
        new webpack.BannerPlugin('This file is created by yangshao'),//添加头部注释信息
        //new webpack.optimize.UglifyJsPlugin({
        //    comments:(astNode, comment)=>{//压缩输出文件
        //        if(comment.line==1)return true;
        //        return false;
        //    },
        //    beautify:false
        //})
    ]
};