import React from 'react'
import THYWComponent from '../../../components/FinancialMarket/THYW'

class TYYW extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <THYWComponent data={this.state.data}/>
    }
}

export  default TYYW
