import React from 'react'
import ServiceSiteComponent from '../../components/ServiceSite'

class ServiceSite extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state={
            data:{
                title:'',
                content:''
            }
        }
    }

    render(){

        return <ServiceSiteComponent data={this.state.data}/>
    }
}

export default ServiceSite
