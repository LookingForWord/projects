import React from 'react'
import DFJKComponent from '../../../../components/PersonalBusiness/BankCard/DFJK'

class DFJK extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <DFJKComponent data={this.state.data}/>
    }
}

export  default DFJK
