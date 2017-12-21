/**
 * 自定义Route 高阶组件
 */
import React from 'react'
import AsyncComponent from '../Bundle'
import {Route} from 'react-router-dom'

const DefineRoute = (route) => {

    return <Route {...route.config } render={
        //props传入router相关对象
        //routes 传入子路由配置
        props => {
            props.routes = route.routes;
            const async = route.async === undefined ? true : route.async;

            return async ?//默认异步
                <AsyncComponent requireProps={props} component={route.component}/>://异步
                <route.component routes={ route.routes } {...props}/> //同步
        }
    }/>
}


export default DefineRoute
