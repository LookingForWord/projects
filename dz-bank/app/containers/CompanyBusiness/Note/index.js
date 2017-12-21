import React from 'react'
import PJCD from './PJCD'
import PJTX from './PJTX'
import {Switch,Route} from 'react-router-dom'
import CompanyLoanComponent from '../../../components/CompanyBusiness/CompanyLoan'

class Note extends React.Component{

    render(){
        return (
            <CompanyLoanComponent navItems={this.props.navItems} type={this.props.match.params.type}>
                <Switch>
                    <Route path='/companyBusiness/pj/pjcd' component={PJCD} exact/>
                    <Route path='/companyBusiness/pj/pjtx' component={PJTX} exact/>
                </Switch>
            </CompanyLoanComponent>
        )
    }
}

export default Note
