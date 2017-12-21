import React from 'react'
import QYDComponent from '../../../../components/CompanyBusiness/CompanyLoan/QYD'

class QYD extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <QYDComponent data={this.state.data}/>
    }
}

export  default QYD
