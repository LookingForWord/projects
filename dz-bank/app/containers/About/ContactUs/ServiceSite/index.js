import React from 'react'
import ServiceSiteComponent from '../../../../components/About/ContactUs/ServiceSite'

class ServiceSite extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <ServiceSiteComponent data={this.state.data}/>
    }
}

export  default ServiceSite
