import React from 'react'
import CCTComponent from '../../../../components/CompanyBusiness/CompanyLoan/CCT'

class CCT extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <CCTComponent data={this.state.data}/>
    }
}

export  default CCT
