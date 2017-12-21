import React from 'react'
import PersonalEBankComponent from '../../../components/EBank/PersonalEBank'

class PersonalEBank extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <PersonalEBankComponent data={this.state.data}/>
    }
}

export  default PersonalEBank
