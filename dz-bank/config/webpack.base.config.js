/**
 * webpack基础配置模块
 */
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
        app:path.resolve(__dirname.substring(0,__dirname.lastIndexOf("config")),'app/entry/index.js'),
    },

    resolve: {
        extensions: ['.js','.jsx','.scss','.css'],
        alias:{
            '@':path.resolve(__dirname.substring(0,__dirname.lastIndexOf("config")),'app/')
        }
    },

    module: {
        loaders:[
            {
                test:/\.(js|jsx)$/,
                //exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                include:/fonts/,
                loader:'url-loader?limit=5000&name=fonts/[name].[hash:8].[ext]'
            }
        ]
    },

    plugins:[
        //html模板插件 自动注入打包之后的js css等
        new htmlWebpackPlugin({
            template:__dirname.substring(0,__dirname.lastIndexOf("config")) + 'app/template/index.html'
        }),
    ]
}