import React from 'react'
import CorporateLoanComponent from '@/components/About/OnlineService/OnlineLoan/CorporateLoan'
import {$http} from '../../../../../fetch'
import {ENTERPRISE_CREDIT} from '../../../../../constants'

class CorporateLoan extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
    }

    render(){

        return <CorporateLoanComponent submit={this.submit.bind(this)}/>
    }

    submit(data){
        return $http({url:ENTERPRISE_CREDIT,method:'POST',data,headers:{'Content-Type': 'application/x-www-form-urlencoded'}});
    }
}

export  default CorporateLoan

