import React from 'react'
import DFPKComponent from '../../../../components/PersonalBusiness/BankCard/DFPK'

class DFPK extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <DFPKComponent data={this.state.data}/>
    }
}

export  default DFPK
