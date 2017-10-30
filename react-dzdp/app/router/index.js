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

const RouterMap = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={App} exact/>
                <Route path="/city" component={City} exact/>
                <Route path="/search/:category/:keyword?" component={Search} exact/>
                <Route path="/detail/:id" component={Detail} exact/>
                <Route path="*" component= {NotFound}/>
            </Switch>
        </Router>
    );
}

export default RouterMap

