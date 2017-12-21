import React from 'react'
import EntrepreneurLoanComponent from '../../../../components/PersonalBusiness/PersonalLoan/EntrepreneurLoan'

class EntrepreneurLoan extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <EntrepreneurLoanComponent data={this.state.data}/>
    }
}

export  default EntrepreneurLoan
