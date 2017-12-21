import React from 'react'
import ZQYWComponent from '../../../components/FinancialMarket/ZQYW'

class ZQYW extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <ZQYWComponent data={this.state.data}/>
    }
}

export  default ZQYW
