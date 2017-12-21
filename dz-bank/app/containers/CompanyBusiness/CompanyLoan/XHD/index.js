import React from 'react'
import XHDComponent from '../../../../components/CompanyBusiness/CompanyLoan/XHD'

class XHD extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <XHDComponent data={this.state.data}/>
    }
}

export  default XHD
