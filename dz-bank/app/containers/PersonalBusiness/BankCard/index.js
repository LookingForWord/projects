import React from 'react'
import DFPK from './DFPK'
import DFJK from './DFJK'
import DFBJK from './DFBJK'
import GJJDFK from './GJJDFK'
import GJK from './GJK'
import SHBZK from './SHBZK'
import {Switch,Route} from 'react-router-dom'
import BankCardComponent from '../../../components/PersonalBusiness/BankCard'

class BankCard extends React.Component{
    render(){
        return (
            <BankCardComponent navItems={this.props.navItems} type={this.props.match.params.type}>
                <Switch>
                    <Route path='/personalBusiness/yhk/dfpk' component={DFPK} exact/>
                    <Route path='/personalBusiness/yhk/dfjk' component={DFJK} exact/>
                    <Route path='/personalBusiness/yhk/dfbjk' component={DFBJK} exact/>
                    <Route path='/personalBusiness/yhk/gjjdfk' component={GJJDFK} exact/>
                    <Route path='/personalBusiness/yhk/gjk' component={GJK} exact/>
                    <Route path='/personalBusiness/yhk/shbzk' component={SHBZK} exact/>
                </Switch>
            </BankCardComponent>
        )
    }
}

export default BankCard

