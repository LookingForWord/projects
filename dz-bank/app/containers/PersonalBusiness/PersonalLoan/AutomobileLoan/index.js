import React from 'react'
import AutomobileLoanComponent from '../../../../components/PersonalBusiness/PersonalLoan/AutomobileLoan'

class AutomobileLoan extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <AutomobileLoanComponent data={this.state.data}/>
    }
}

export  default AutomobileLoan
