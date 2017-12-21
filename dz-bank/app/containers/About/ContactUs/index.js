import React from 'react'
import {Switch,Route} from 'react-router-dom'
import ServicePhone from './ServicePhone'
import ServiceSite from './ServiceSite'
import WeChat from './WeChat'
//import MicroBlog from './MicroBlog'

class ContactUs extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state={
            navItems:{}
        }
    }

    render(){
        return (
        <Switch>
            <Route path='/about/zxfw/lxdh/kfdh' component={ServicePhone} exact/>
            <Route path='/about/zxfw/lxdh/fwwd' component={ServiceSite} exact/>
            <Route path='/about/zxfw/lxdh/gfwx' component={WeChat} exact/>
            {/*<Route path='/about/zxfw/lxdh/gfwb' component={MicroBlog} exact/>*/}
        </Switch>
        )
    }
}

export default ContactUs
