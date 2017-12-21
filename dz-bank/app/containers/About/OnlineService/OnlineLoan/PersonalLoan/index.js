import React from 'react'
import PersonalLoanComponent from '@/components/About/OnlineService/OnlineLoan/PersonalLoan'
import {$http} from '../../../../../fetch'
import {PERSONAL_CREDIT} from '../../../../../constants'

class PersonalLoan extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
    }

    render(){

        return <PersonalLoanComponent submit={this.submit.bind(this)}/>
    }

    submit(data){
        return $http({url:PERSONAL_CREDIT,method:'POST',data,headers:{'Content-Type': 'application/x-www-form-urlencoded'}});
    }
}

export  default PersonalLoan

