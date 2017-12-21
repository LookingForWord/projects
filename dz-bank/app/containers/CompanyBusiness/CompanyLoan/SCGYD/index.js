import React from 'react'
import SCGYDComponent from '../../../../components/CompanyBusiness/CompanyLoan/SCGYD'

class SCGYD extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <SCGYDComponent data={this.state.data}/>
    }
}

export  default SCGYD
