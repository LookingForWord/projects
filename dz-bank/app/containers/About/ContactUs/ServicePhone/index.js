import React from 'react'
import ServicePhoneComponent from '../../../../components/About/ContactUs/ServicePhone'

class ServicePhone extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <ServicePhoneComponent data={this.state.data}/>
    }
}

export  default ServicePhone
