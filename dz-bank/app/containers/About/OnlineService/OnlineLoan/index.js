import React from 'react'
import PersonalLoan from './PersonalLoan'
import CorporateLoan from './CorporateLoan'
import {Switch,Route} from 'react-router-dom'

class OnlineLoan extends React.Component{
    render(){

        return (
            <Switch>
                <Route path="/about/zxfw/zxsd/grsd" component={PersonalLoan} exact/>
                <Route path="/about/zxfw/zxsd/frsd" component={CorporateLoan} exact/>
            </Switch>
        );
    }
}

export  default OnlineLoan
