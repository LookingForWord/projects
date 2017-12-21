import React from 'react'
import PJTXComponent from '../../../../components/CompanyBusiness/Note/PJTX'

class PJTX extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <PJTXComponent data={this.state.data}/>
    }
}

export  default PJTX
