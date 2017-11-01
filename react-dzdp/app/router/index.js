/**
 * 路由配置模块
 */
import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import App from '@/containers'
import City from '@/containers/City'
import NotFound from '@/components/NotFound'
import Search from '@/containers/Search'
import Detail from '@/containers/Detail'
import Login from '@/containers/Login'
import User from '@/containers/User'

const RouterMap = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={App} exact/>
                <Route path="/city" component={City} exact/>
                <Route path="/search/:category/:keyword?" component={Search} exact/>
                <Route path="/detail/:id" component={Detail} exact/>
                {/*route参数是路由路径(可选的)表示在那登录就返回到那个页面*/}
                <Route path="/login/:route?" component={Login} exact/>
                <Route path="/user" component={User} exact/>
                <Route path="*" component= {NotFound}/>
            </Switch>
        </Router>
    );
}

export default RouterMap

