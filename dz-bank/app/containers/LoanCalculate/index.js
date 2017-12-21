import React from 'react'
import LoanCalculateComponent from '../../components/LoanCalculate'
import {$http} from '../../fetch'
import {LOAN_CALCULATE} from '../../constants'

class LoanCalculate extends React.Component{

    render(){

        return <LoanCalculateComponent submit={this.submit.bind(this)}/>
    }

    submit(data){
        return $http({url:LOAN_CALCULATE,data,headers:{'Content-Type': 'application/x-www-form-urlencoded'}});
    }
}

export default LoanCalculate
