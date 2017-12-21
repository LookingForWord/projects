import React from 'react'
import WholeDepositWithdrawalComponent from '../../../../components/PersonalBusiness/PersonalDeposit/WholeDepositWithdrawal'

class WholeDepositWithdrawal extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <WholeDepositWithdrawalComponent data={this.state.data}/>
    }
}

export  default WholeDepositWithdrawal
