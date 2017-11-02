/**
 * Route 配置
 */
import App from '@/containers'
import City from '@/containers/City'
import NotFound from '@/components/NotFound'
import Search from '@/containers/Search'
import Detail from '@/containers/Detail'
import Login from '@/containers/Login'
import User from '@/containers/User'

/**
 * routes 每项可选
 *      config -- route的配置 {}
 *      component -- route的组件 Component
 *      routes -- 当前组件的子组件路由 []
 */
const routes = [
    {
        config:{path:"/",exact:true},
        component:App,
        routes:[]
    },
    {
        config:{path:"/city",exact:true},
        component:City
    },
    {
        config:{path:"/search/:category/:keyword?",exact:true},
        component:Search
    },
    {
        config:{path:"/detail/:id",exact:true},
        component:Detail
    },
    {
        //route参数是路由路径(可选的)表示在那登录就返回到那个页面
        config:{path:"/login/:route?",exact:true},
        component:Login
    },
    {
        config:{path:"/user",exact:true},
        component:User
    }
];

export default routes
