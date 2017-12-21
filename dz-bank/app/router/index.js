/**
 * 路由配置模块
 */
import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import App from '@/containers'
import {PUBLIC_PATH} from '../constants/baseURL'

const RouterMap = () => {
    return (
        <Router basename={PUBLIC_PATH}>
            <App/>
        </Router>
    );
}

export default RouterMap

