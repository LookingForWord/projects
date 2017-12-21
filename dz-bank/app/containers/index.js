/**
 * 应用入口文件
 */
import React from 'react'
import Header from '../components/commons/Header'
import Footer from '../components/commons/Footer'
import Home from './Home'
import PersonalBusiness from 'bundle-loader?lazy!./PersonalBusiness'
import CompanyBusiness from 'bundle-loader?lazy!./CompanyBusiness'
import EBank from 'bundle-loader?lazy!./EBank'
import FinancialMarket from 'bundle-loader?lazy!./FinancialMarket'
import CompanyProfile from 'bundle-loader?lazy!./About/CompanyProfile'
import InformDisclosure from 'bundle-loader?lazy!./About/InformDisclosure'
import OnlineServer from 'bundle-loader?lazy!./About/OnlineService'
import NewNotice from 'bundle-loader?lazy!./About/NewNotice'
import Detail from 'bundle-loader?lazy!./About/Detail'
import LoanCalculate from 'bundle-loader?lazy!./LoanCalculate'
import DepositCalculate from 'bundle-loader?lazy!./DepositCalculate'
import ServiceCharge from 'bundle-loader?lazy!./ServiceCharge'
import LoanRate from 'bundle-loader?lazy!./LoanRate'
import DepositRate from 'bundle-loader?lazy!./DepositRate'
// import ContactUs from 'bundle-loader?lazy!./About/ContactUs'
import Recruit from 'bundle-loader?lazy!./About/Recruit'
import ProductDetail from 'bundle-loader?lazy!./ProductDetail'
import NotFound from 'bundle-loader?lazy!@/components/NotFound'
import AsyncComponent from '../router/Bundle'
import {withRouter,Switch,Route,Redirect} from 'react-router-dom'

class App extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state={
            navItems:[],
            action:true
        }
    }

    render(){
        return (
            <div className='app'>
                <Header match={ this.props.match} navItems={this.state.navItems} action={this.state.action}/>
                <section className='app-main overflow-top'>
                    <Switch>
                        <Route exact component={Home} path="/home"/>
                        <Redirect to="/home" from='/' exact/>
                        <Route path='/home/productDetail/:id' exact render={
                            props => <AsyncComponent requireProps={props} component={ProductDetail}/>
                        }/>
                        <Route path='/home/loanCalculate' exact render={
                            props => <AsyncComponent requireProps={props} component={LoanCalculate}/>
                        }/>
                        <Route path='/home/depositCalculate' exact render={
                            props => <AsyncComponent requireProps={props} component={DepositCalculate}/>
                        }/>
                        <Route path='/home/serviceCharge' exact render={
                            props => <AsyncComponent requireProps={props} component={ServiceCharge}/>
                        }/>
                        <Route path='/home/loanRate' exact render={
                            props => <AsyncComponent requireProps={props} component={LoanRate}/>
                        }/>
                        <Route path='/home/depositRate' exact render={
                            props => <AsyncComponent requireProps={props} component={DepositRate}/>
                        }/>
                        <Route path='/personalBusiness/:type?/:subType?' exact render={
                            props => <AsyncComponent requireProps={props} component={PersonalBusiness}/>
                        }/>
                        <Route path='/companyBusiness/:type?/:subType?' exact render={
                            props => <AsyncComponent requireProps={props} component={CompanyBusiness}/>
                        }/>
                        <Route path='/eBank/:type?' exact render={
                            props => <AsyncComponent requireProps={props} component={EBank}/>
                        }/>
                        <Route path='/financialMarket/:type?' exact render={
                            props => <AsyncComponent requireProps={props} component={FinancialMarket}/>
                        }/>
                        <Route path='/about/gsgk/:type?' exact render={
                            props => <AsyncComponent requireProps={props} component={CompanyProfile}/>
                        }/>
                        {/*<Route path='/about/lxwm/:type?' exact render={*/}
                            {/*props => <AsyncComponent requireProps={props} component={ContactUs}/>*/}
                        {/*}/>*/}
                        <Route path='/about/xwgg/:type?/:subType?' exact render={
                            props => <AsyncComponent requireProps={props} component={NewNotice}/>
                        }/>
                        <Route path='/about/xxpl/:type?/:subType?' exact render={
                            props => <AsyncComponent requireProps={props} component={InformDisclosure}/>
                        }/>
                        <Route path='/about/rczp/:type?' exact render={
                            props => <AsyncComponent requireProps={props} component={Recruit}/>
                        }/>
                        <Route path='/about/detail/:type/:id' exact render={
                            props => <AsyncComponent requireProps={props} component={Detail}/>
                        }/>
                        <Route path='/about/zxfw/:type?/:subType?' exact render={
                            props => <AsyncComponent requireProps={props} component={OnlineServer}/>
                        }/>
                        <Redirect to="/about/gsgk/gsjj" from='/about' exact/>
                        <Route path='*' exact render={
                            props => <AsyncComponent requireProps={props} component={NotFound}/>
                        }/>
                    </Switch>
                </section>
                <Footer action={this.state.action}/>
            </div>
        )
    }

    componentDidMount(){
        this.getHeaderItems();
    }

    componentWillUpdate(){
        this.state.action && this.setState({action:false});
    }

    componentDidUpdate(){
        (!this.state.action) && this.setState({action:true});
    }

    getHeaderItems(){
        const navItems = require('../../mock/header');
        this.setState({navItems});
    }
}

export default withRouter(App)
