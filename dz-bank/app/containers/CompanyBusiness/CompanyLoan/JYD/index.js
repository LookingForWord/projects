import React from 'react'
import JYDComponent from '../../../../components/CompanyBusiness/CompanyLoan/JYD'

class JYD extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <JYDComponent data={this.state.data}/>
    }
}

export  default JYD
