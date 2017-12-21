import React from 'react'
import PJCDComponent from '../../../../components/CompanyBusiness/Note/PJCD'

class PJCD extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <PJCDComponent data={this.state.data}/>
    }
}

export  default PJCD
