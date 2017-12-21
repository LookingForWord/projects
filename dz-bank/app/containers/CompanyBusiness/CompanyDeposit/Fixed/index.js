import React from 'react'
import FixedDepositComponent from '../../../../components/CompanyBusiness/Deposit/Fixed'

class FixedDeposit extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <FixedDepositComponent data={this.state.data}/>
    }
}

export  default FixedDeposit
