import React from 'react'
import ServiceChargeComponent from '../../components/ServiceCharge'

class ServiceCharge extends React.Component{
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

        return <ServiceChargeComponent data={this.state.data}/>
    }
}

export default ServiceCharge
