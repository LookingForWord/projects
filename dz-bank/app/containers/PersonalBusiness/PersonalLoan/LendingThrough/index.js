import React from 'react'
import LendingThroughComponent from '../../../../components/PersonalBusiness/PersonalLoan/LendingThrough'

class LendingThrough extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <LendingThroughComponent data={this.state.data}/>
    }
}

export  default LendingThrough
