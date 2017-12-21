import React from 'react'
import WeChatComponent from '../../../../components/About/ContactUs/WeChat'

class WeChat extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <WeChatComponent data={this.state.data}/>
    }
}

export  default WeChat
