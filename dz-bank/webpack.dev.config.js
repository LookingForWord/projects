/**
 * webpack开发环境配置模块
 */
var webpack = require('webpack')
var openBrowserPlugin = require('open-browser-webpack-plugin')
var config = require('./config/dev.env')
var merge = require('webpack-merge')
var baseConfig = require('./config/webpack.base.config')

module.exports = merge(baseConfig,{
    output:{
        filename:"bundle.js",
        publicPath:config.PUBLIC_PATH
    },

    module:{
        loaders:[
            {
                test:/\.scss$/,
                exclude:/node_modules/,
                loader:'style-loader!css-loader!postcss-loader!sass-loader'
            },
            {
                test:/\.css$/,
                //exclude:/node_modules/,
                loader:'style-loader!css-loader!postcss-loader'
            },
            {
                test:/\.(png|gif|jpg|jpeg|bmp|ico)$/i,
                include:/images/,
                loader:'url-loader?limit=5000'//限制大小5k
            }
        ]
    },

    plugins:[
        //热加载插件
        new webpack.HotModuleReplacementPlugin(),

        //打开浏览器
        new openBrowserPlugin({
            url:'http://localhost:8081'
        }),

        //向js中暴露当前环境  可在业务js代码中使用（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV:config.NODE_ENV,
                PUBLIC_PATH:JSON.stringify(config.PUBLIC_PATH)
            }
        })
    ],

    devServer:{
        historyApiFallback:true,//不跳转 在开封单页面应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline:true,//实时刷新
        hot:true,//使用热加载插件HotModuleReplacementPlugin
        port:8081,
        proxy: {//代理
            '/api/':{
                target:'http://10.191.13.122:8080/',
                secure: false,
                pathRewrite:{
                    '^/api/':''
                }
            }
        }
    }
})