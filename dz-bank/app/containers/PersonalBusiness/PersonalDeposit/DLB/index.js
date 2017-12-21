import React from 'react'
import FeatureDepositDLBComponent from '../../../../components/PersonalBusiness/PersonalDeposit/DLB'

class FeatureDepositDLB extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <FeatureDepositDLBComponent data={this.state.data}/>
    }
}

export  default FeatureDepositDLB
