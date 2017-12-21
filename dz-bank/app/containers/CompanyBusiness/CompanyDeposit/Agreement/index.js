import React from 'react'
import AgreementDepositComponent from '../../../../components/CompanyBusiness/Deposit/Agreement'

class AgreementDeposit extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <AgreementDepositComponent data={this.state.data}/>
    }
}

export  default AgreementDeposit
