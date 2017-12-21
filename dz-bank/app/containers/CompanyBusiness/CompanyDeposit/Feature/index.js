import React from 'react'
import FeatureDepositComponent from '../../../../components/CompanyBusiness/Deposit/Feature'

class FeatureDeposit extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <FeatureDepositComponent data={this.state.data}/>
    }
}

export  default FeatureDeposit
