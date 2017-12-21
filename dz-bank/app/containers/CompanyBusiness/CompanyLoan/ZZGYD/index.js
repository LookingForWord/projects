import React from 'react'
import ZZGYDComponent from '../../../../components/CompanyBusiness/CompanyLoan/ZZGYD'

class ZZGYD extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <ZZGYDComponent data={this.state.data}/>
    }
}

export  default ZZGYD
