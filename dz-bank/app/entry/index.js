/**
 * 工程入口模块
 */
import "babel-polyfill"
import '../util/adaptation'
import '../static/css/common'
//import '../polyfill/First'
import React from 'react'
import {render} from 'react-dom'
import RouterMap from '../router'

render(<RouterMap/>,document.getElementById('app'));
