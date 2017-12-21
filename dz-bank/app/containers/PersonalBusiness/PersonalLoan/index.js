import React from 'react'
import UnemploymentLoan from './UnemploymentLoan'
import WomenEntrepreneurs from './WomenEntrepreneurs'
import AutomobileLoan from './AutomobileLoan'
import GuaranteeLoan from './GuaranteeLoan'
import LendingThrough from './LendingThrough'
import EntrepreneurLoan from './EntrepreneurLoan'
import {Switch,Route} from 'react-router-dom'
import PersonalLoanComponent from '../../../components/PersonalBusiness/PersonalLoan'

class PersonalLoan extends React.Component{

    render(){

        return (
            <PersonalLoanComponent navItems={this.props.navItems} type={this.props.match.params.type}>
                <Switch>
                    <Route path='/personalBusiness/grdk/sydk' component={UnemploymentLoan} exact/>
                    <Route path='/personalBusiness/grdk/fncydk' component={WomenEntrepreneurs} exact/>
                    <Route path='/personalBusiness/grdk/qcxfdk' component={AutomobileLoan} exact/>
                    <Route path='/personalBusiness/grdk/dbdk' component={GuaranteeLoan} exact/>
                    <Route path='/personalBusiness/grdk/jdt' component={LendingThrough} exact/>
                    <Route path='/personalBusiness/grdk/cyd' component={EntrepreneurLoan} exact/>
                </Switch>
            </PersonalLoanComponent>
        )
    }
}

export default PersonalLoan
