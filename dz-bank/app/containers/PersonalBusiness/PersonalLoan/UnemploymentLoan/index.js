import React from 'react'
import UnemploymentLoanComponent from '../../../../components/PersonalBusiness/PersonalLoan/UnemploymentLoan'

class UnemploymentLoan extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <UnemploymentLoanComponent data={this.state.data}/>
    }
}

export  default UnemploymentLoan
