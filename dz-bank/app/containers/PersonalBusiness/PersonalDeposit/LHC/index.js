import React from 'react'
import FeatureDepositLHCComponent from '../../../../components/PersonalBusiness/PersonalDeposit/LHC'

class FeatureDepositLHC extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <FeatureDepositLHCComponent data={this.state.data}/>
    }
}

export  default FeatureDepositLHC
