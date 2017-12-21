import React from 'react'
import CurrentDepositDepositComponent from '../../../../components/PersonalBusiness/PersonalDeposit/CurrentDeposit'

class CurrentDeposit extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <CurrentDepositDepositComponent data={this.state.data}/>
    }
}

export  default CurrentDeposit
