/**
 * 路由配置模块
 */
import React from 'react'
import {BrowserRouter as Router,Switch,Redirect,Route} from 'react-router-dom'
import AsyncComponent from './Bundle'
import App from '@/containers'
import City from 'bundle-loader?lazy!@/containers/City'
import NotFound from 'bundle-loader?lazy!@/components/NotFound'
import Search from 'bundle-loader?lazy!@/containers/Search'
import Detail from 'bundle-loader?lazy!@/containers/Detail'
import Login from 'bundle-loader?lazy!@/containers/Login'
import User from 'bundle-loader?lazy!@/containers/User'
import {PUBLIC_PATH} from '../constants/baseURL'

const RouterMap = () => {
    return (
        <Router basename={PUBLIC_PATH}>
            <Switch>
                <Route path= '/' component={App} exact/>
                <Route path='/city' render={ props => <AsyncComponent requireProps={props} component={City}/>} exact/>
                <Route path='/search/:category/:keyword?' render={ props => <AsyncComponent requireProps={props} component={Search}/>} exact/>
                <Route path='/detail/:id' render={ props => <AsyncComponent requireProps={props} component={Detail}/>} exact/>
                {/*route参数是路由路径(可选的)表示在那登录就返回到那个页面*/}
                <Route path='/login/:route?' render={ props => <AsyncComponent requireProps={props} component={Login}/>} exact/>
                <Route path='/user' render={ props => <AsyncComponent requireProps={props} component={User}/>} exact/>
                <Route path='/404' render={ props => <AsyncComponent requireProps={props} component={NotFound}/>}/>
                <Redirect from='*' to='/404'/>
            </Switch>
        </Router>
    );
}

export default RouterMap

