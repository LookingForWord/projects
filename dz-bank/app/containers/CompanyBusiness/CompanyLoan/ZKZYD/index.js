import React from 'react'
import ZKZYDComponent from '../../../../components/CompanyBusiness/CompanyLoan/ZKZYD'

class ZKZYD extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <ZKZYDComponent data={this.state.data}/>
    }
}

export  default ZKZYD
