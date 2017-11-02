/**
 * 自定义Route 高阶组件
 */
import React from 'react'
import {Route} from 'react-router-dom'

const DefineRoute = (route) => {
    console.log('route',route)
    return <Route {...route.config } render={
        //props传入router相关对象
        //routes 传入子路由配置
        props => {
            console.log('props',props);
            return <route.component routes={ route.routes } {...props}/>
        }
    }/>
}


export default DefineRoute
