import React from 'react'
import DirectBankComponent from '../../../components/EBank/DirectBank'

class DirectBank extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <DirectBankComponent data={this.state.data}/>
    }
}

export  default DirectBank
