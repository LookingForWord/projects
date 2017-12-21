import React from 'react'
import MicroBankComponent from '../../../components/EBank/MicroBank'

class MicroBank extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <MicroBankComponent data={this.state.data}/>
    }
}

export  default MicroBank
