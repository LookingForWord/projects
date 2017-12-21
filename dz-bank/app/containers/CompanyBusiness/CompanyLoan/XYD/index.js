import React from 'react'
import XYDComponent from '../../../../components/CompanyBusiness/CompanyLoan/XYD'

class XYD extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <XYDComponent data={this.state.data}/>
    }
}

export  default XYD
