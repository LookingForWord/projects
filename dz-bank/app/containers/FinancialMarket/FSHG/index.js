import React from 'react'
import FSHGComponent from '../../../components/FinancialMarket/FSHG'

class FSHG extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <FSHGComponent data={this.state.data}/>
    }
}

export  default FSHG
