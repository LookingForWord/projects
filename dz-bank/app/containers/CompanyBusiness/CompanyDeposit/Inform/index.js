import React from 'react'
import InformDepositComponent from '../../../../components/CompanyBusiness/Deposit/Inform'

class InformDeposit extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <InformDepositComponent data={this.state.data}/>
    }
}

export  default InformDeposit
