import React from 'react'
import AssetsManageComponent from '../../../components/FinancialMarket/AssetsManage'

class AssetsManage extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{}
        }
    }

    render(){

        return <AssetsManageComponent data={this.state.data}/>
    }
}

export  default AssetsManage
