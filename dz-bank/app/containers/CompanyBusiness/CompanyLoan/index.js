import React from 'react'
import XHD from './XHD'
import JYD from './JYD'
import QYD from './QYD'
import SCGYD from './SCGYD'
import LBD from './LBD'
import XYD from './XYD'
import ZZGYD from './ZZGYD'
import XEXYD from './XEXYD'
import ZKZYD from './ZKZYD'
import CCT from './CCT'
import SJD from './SJD'
import {Switch,Route} from 'react-router-dom'
import CompanyLoanComponent from '../../../components/CompanyBusiness/CompanyLoan'

class CompanyLoan extends React.Component{

    render(){
        return (
            <CompanyLoanComponent navItems={this.props.navItems} type={this.props.match.params.type}>
                <Switch>
                    <Route path='/companyBusiness/gsdk/xhd' component={XHD} exact/>
                    <Route path='/companyBusiness/gsdk/jyd' component={JYD} exact/>
                    <Route path='/companyBusiness/gsdk/qyd' component={QYD} exact/>
                    <Route path='/companyBusiness/gsdk/scgyd' component={SCGYD} exact/>
                    <Route path='/companyBusiness/gsdk/lbd' component={LBD} exact/>
                    <Route path='/companyBusiness/gsdk/xyd' component={XYD} exact/>
                    <Route path='/companyBusiness/gsdk/zzgyd' component={ZZGYD} exact/>
                    <Route path='/companyBusiness/gsdk/xexyd' component={XEXYD} exact/>
                    <Route path='/companyBusiness/gsdk/zkzyd' component={ZKZYD} exact/>
                    <Route path='/companyBusiness/gsdk/cct' component={CCT} exact/>
                    <Route path='/companyBusiness/gsdk/sjd' component={SJD} exact/>
                </Switch>
            </CompanyLoanComponent>
        )
    }
}

export default CompanyLoan
