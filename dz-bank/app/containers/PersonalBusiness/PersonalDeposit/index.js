import React from 'react'
import FeatureDeposit from './FeatureDeposit'
import DLB from './DLB'
import LHC from './LHC'
import CurrentDeposit from './CurrentDeposit'
import WholeDepositWithdrawal from './WholeDepositWithdrawal'
import SmallDepositWithdrawal from './SmallDepositWithdrawal'
import InformDeposit from './InformDeposit'
import {Switch,Route} from 'react-router-dom'
import PersonalDepositComponent from '../../../components/PersonalBusiness/PersonalDeposit'

class PersonalDeposit extends React.Component{

    render(){
        return (
            <PersonalDepositComponent navItems={this.props.navItems} type={this.props.match.params.type}>
                <Switch>
                    <Route path='/personalBusiness/grck/hqck' component={CurrentDeposit} exact/>
                    <Route path='/personalBusiness/grck/zczq' component={WholeDepositWithdrawal} exact/>
                    <Route path='/personalBusiness/grck/lczq' component={SmallDepositWithdrawal} exact/>
                    <Route path='/personalBusiness/grck/tsck' component={FeatureDeposit} exact/>
                    <Route path='/personalBusiness/grck/dlb' component={DLB} exact/>
                    <Route path='/personalBusiness/grck/lhc' component={LHC} exact/>
                    <Route path='/personalBusiness/grck/grtzck' component={InformDeposit} exact/>
                </Switch>
            </PersonalDepositComponent>
        )
    }
}

export default PersonalDeposit
