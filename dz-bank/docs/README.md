#搭建react + webpack环境
    》安装node + npm环境
    》初始化npm环境
        npm init 生成package.json文件
    》安装插件
        #详情参考package.json
            #项目依赖：dependencies
            #环境依赖：devDependencies
        #示例如下：
        #webpack环境
        npm i webpack webpack-dev-server -D// --save-dev 只是开发环境需要
        #项目依赖 react react-dom
        npm i react react-dom -S// --save 开发环境和生产环境都需要的
        #详情查看package.json

        npm run start|test|build(打包) 可以简写为 npm start(开启开发环境)|test

#项目结构

  #app 项目源码
    #components 视图组件，负责页面展示
    #constants 项目相关常量
    #containers 容器组件，负责页面相关数据
    #entry 项目入口文件
    #fetch ajax封装
    #polyfill 垫片，用于兼容浏览器部分API
    #router react router入口
    #static 项目相关静态资源
    #template html模版
    #util 工具函数

  #build 项目生产环境代码

  #mock 模拟数据


#部署配置
    当使用HashRouter时可以不配置404重定向到首页 且没必要设置router的basename
    当使用BrowserRouter是需要设置router的basename并且配置404重定向到首页