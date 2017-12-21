import React from 'react'
import InformDeposit from './Inform'
import FixedDeposit from './Fixed'
import AgreementDeposit from './Agreement'
import FeatureDeposit from './Feature'
import CurrentDeposit from './Current'
import {Switch,Route} from 'react-router-dom'
import DepositComponent from '../../../components/CompanyBusiness/Deposit'

class CompanyDeposit extends React.Component{

    render(){
        return (
            <DepositComponent navItems={this.props.navItems} type={this.props.match.params.type}>
                <Switch>
                    <Route path='/companyBusiness/gsck/tzck' component={InformDeposit} exact/>
                    <Route path='/companyBusiness/gsck/dqck' component={FixedDeposit} exact/>
                    <Route path='/companyBusiness/gsck/xdck' component={AgreementDeposit} exact/>
                    <Route path='/companyBusiness/gsck/tsck' component={FeatureDeposit} exact/>
                    <Route path='/companyBusiness/gsck/hqck' component={CurrentDeposit} exact/>
                </Switch>
            </DepositComponent>
        )
    }
}

export default CompanyDeposit
