import React from 'react'
import CurrentDepositComponent from '../../../../components/CompanyBusiness/Deposit/Current'

class CurrentDeposit extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <CurrentDepositComponent data={this.state.data}/>
    }
}

export  default CurrentDeposit
