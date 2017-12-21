import React from 'react'
import MobileEBankComponent from '../../../components/EBank/MobileEBank'

class MobileEBank extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <MobileEBankComponent data={this.state.data}/>
    }
}

export  default MobileEBank
