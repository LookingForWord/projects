import React from 'react'
import ZHSXComponent from '../../../components/FinancialMarket/ZHSX'

class ZHSX extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <ZHSXComponent data={this.state.data}/>
    }
}

export  default ZHSX
