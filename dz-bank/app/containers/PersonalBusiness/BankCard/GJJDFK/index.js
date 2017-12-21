import React from 'react'
import GJJDFKComponent from '../../../../components/PersonalBusiness/BankCard/GJJDFK'

class GJJDFK extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <GJJDFKComponent data={this.state.data}/>
    }
}

export  default GJJDFK
