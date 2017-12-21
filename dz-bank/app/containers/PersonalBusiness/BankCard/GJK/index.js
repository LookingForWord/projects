import React from 'react'
import GJKComponent from '../../../../components/PersonalBusiness/BankCard/GJK'

class GJK extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <GJKComponent data={this.state.data}/>
    }
}

export  default GJK
