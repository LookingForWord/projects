import React from 'react'
import CorporateEBankComponent from '../../../components/EBank/CorporateEBank'

class CorporateEBank extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <CorporateEBankComponent data={this.state.data}/>
    }
}

export  default CorporateEBank
