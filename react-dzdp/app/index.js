/**
 * 应用入口模块
 */
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from '@/store'
import RouterMap from './router'
import './static/css/common'
import './static/css/font'

//创建Store对象
const store = configureStore();


if (process.env.NODE_ENV === 'dev') {
    store.subscribe(function(){
        console.log(`%c state日志：`,'color:red;',store.getState())
    });
}

render(
    <Provider store={store}>
        <RouterMap/>
    </Provider>
    ,document.getElementById('app')
);
