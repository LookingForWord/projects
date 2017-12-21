import React from 'react'
import XEXYDComponent from '../../../../components/CompanyBusiness/CompanyLoan/XEXYD'

class XEXYD extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <XEXYDComponent data={this.state.data}/>
    }
}

export  default XEXYD
