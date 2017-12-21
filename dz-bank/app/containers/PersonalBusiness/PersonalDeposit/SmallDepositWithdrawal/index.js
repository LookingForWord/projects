import React from 'react'
import SmallDepositWithdrawalComponent from '../../../../components/PersonalBusiness/PersonalDeposit/SmallDepositWithdrawal'

class SmallDepositWithdrawal extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <SmallDepositWithdrawalComponent data={this.state.data}/>
    }
}

export  default SmallDepositWithdrawal
