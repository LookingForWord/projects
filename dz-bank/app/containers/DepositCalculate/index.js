import React from 'react'
import DepositCalculateComponent from '../../components/DepositCalculate'
import {$http} from '../../fetch'
import {DEPOSIT_CALCULATE} from '../../constants'

class DepositCalculate extends React.Component{

    render(){

        return <DepositCalculateComponent submit={this.submit.bind(this)}/>
    }

    submit(data){
        return $http({url:DEPOSIT_CALCULATE,data,headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
    }
}

export default DepositCalculate
