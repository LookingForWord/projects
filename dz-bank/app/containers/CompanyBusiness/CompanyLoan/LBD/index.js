import React from 'react'
import LBDComponent from '../../../../components/CompanyBusiness/CompanyLoan/LBD'

class LBD extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <LBDComponent data={this.state.data}/>
    }
}

export  default LBD
