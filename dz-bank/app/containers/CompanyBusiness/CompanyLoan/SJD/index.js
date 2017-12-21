import React from 'react'
import SJDComponent from '../../../../components/CompanyBusiness/CompanyLoan/SJD'

class SJD extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <SJDComponent data={this.state.data}/>
    }
}

export  default SJD
