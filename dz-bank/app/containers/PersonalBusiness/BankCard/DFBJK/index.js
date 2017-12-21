import React from 'react'
import DFBJKComponent from '../../../../components/PersonalBusiness/BankCard/DFBJK'

class DFBJK extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <DFBJKComponent data={this.state.data}/>
    }
}

export  default DFBJK
