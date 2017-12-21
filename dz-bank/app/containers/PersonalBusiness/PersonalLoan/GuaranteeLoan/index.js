import React from 'react'
import GuaranteeLoanComponent from '../../../../components/PersonalBusiness/PersonalLoan/GuaranteeLoan'

class GuaranteeLoan extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <GuaranteeLoanComponent data={this.state.data}/>
    }
}

export  default GuaranteeLoan
