#搭建react + webpack环境
    》安装node + npm环境
    》初始化npm环境
        npm init 生成package.json文件
    》安装插件
        #详情参考package.json 示例如下：
        #webpack环境
        npm i webpack webpack-dev-server -D// --save-dev 只是开发环境需要
        #项目依赖 react react-dom
        npm i react react-dom -S// --save 开发环境和生产环境都需要的

        npm run start|test 可以简写为 npm start|test
#React
    #在jsx语法中的注释
        》{ js的注释 }
    #结构划分
        》components 公共部分 只负责渲染数据
            pages 各个公共组件的目录
        》containers 页面部分 + 加载数据
            pages 各个页面的总目录
                index.js 当前页面的入口文件
                subPage 当前页面所需要的子组件
            index.js 所有页面的根容器
        》router
            index.js
        》static
        》util
        》actions
        》constants
            actions的type常量
        》reducers
            index.js 合并所有的reducers
        》store
            创建store
            export default function configureStore(initialState){
                const store = createStore(rootReducer,initialState,
                    //触发redux-devTools
                    window.devToolsExtension ? window.devToolsExtension() : undefined
                )

                return store;
            }
        》fetch
        》index.js 入口文件
        》index.html 页面模板文件
    #react性能优化
        #性能检测 npm i react-addons-perf -D
        #在index.js入口文件中测试
            import Rerf from 'react-addons-perf'
            if(process.env.NODE_ENV === 'dev'){
                window.Perf = Perf;
            }
            //在浏览器console中运行下面命令
            //运行程序前 先运行Perf.start()
            //程序运行
            //程序运行结束 Perf.stop()停止检测
            //Perf.printWasted()即可打印出浪费性能的组件列表,十几毫秒以下都是可以接受的。
        #优化方式
            》PureRenderMixin优化 -- 最基本的优化方式 -- 推荐优化方案
                安装工具 npm i react-addons-pure-render-mixin -S
                import PureRenderMixin from 'react-addons-pure-render-mixin'
                class List extends React.Component{
                    constructor(props,context){
                        super(props,context);
                        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
                    }
                }
            》Immutable.js优化 -- 终极优化方式
                用它来处理数据，它实现了js中不可变的数据概念，适用于数据结构层次深的情况。
    #约束性和非约束性组件
        非约束性组件：针对表单控件通过defaultValue来指定默认值，然后通过DOM来操作该控件的值(消耗性能)
        约束性组件(推荐)：监控表单控件的变化，将值保存在state中，直接从state中获取设置值。
    #react router
        npm i react-router -S

        静态资源懒加载方案：
            将react-router和webpack的require.ensure结合起来
        配置可选参数
            /search/:category/:keyword?
#redux
    npm i redux react-redux -S
#fetch
    npm install whatwg-fetch -S
    兼容老版本浏览器 npm install es6-promise -S
    #基本使用
        fetch()必须接受一个参数(资源路径)。无论请求成功与否，它都返回一个promise对象，resolve对应请求的Response。
        你也可以传入一个可选的第二个参数init(Request)。
#数据Mock(模拟)
    #使用koa来模拟后端接口
    #安装
        npm install koa koa-body koa-router -D
#css3的字体图标
    能像文字一样用css的font-size和color来控制大小和颜色而且是矢量缩放。
    开源字体图标库中，常用的图标都能找到
    资源小，不用担心性能
    #使用：
        添加对应class就ok了(需要在webpack配置对对应文件的支持loader)
    #Font Awesome
       css3字体图标库 有几百个。
    #icomoon
        字体图标生成器网站
#轮播 使用react-swipe
    npm install swipe-js-iso react-swipe -S

#部署配置
    当使用HashRouter时可以不配置404重定向到首页 且没必要设置router的basename
    当使用BrowserRouter是需要设置router的basename并且配置404重定向到首页