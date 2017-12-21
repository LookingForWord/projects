import React from 'react'
import AssetsManage from '../AssetsManage'
import FSHG from '../FSHG'
import ZHSX from '../ZHSX'
import ZQYW from '../ZQYW'
import TYYW from '../TYYW'
import {Switch,Route} from 'react-router-dom'
import SecondComponent from '../../../components/FinancialMarket/Second'

class FinancialMarketSecond extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state={
            navItems:{}
        }
    }

    render(){
        return (
            <SecondComponent navItems={this.state.navItems} type={this.props.match.params.type}>
                <Switch>
                    <Route path='/financialMarket/zcgl' component={AssetsManage} exact/>
                    <Route path='/financialMarket/fshg' component={FSHG} exact/>
                    <Route path='/financialMarket/zhsx' component={ZHSX} exact/>
                    <Route path='/financialMarket/zqyw' component={ZQYW} exact/>
                    <Route path='/financialMarket/tyyw' component={TYYW} exact/>
                </Switch>
            </SecondComponent>
        )
    }

    componentDidMount(){
        this.getNavItems();
    }

    getNavItems(){
        const navItems = require('../../../../mock/FinancialMarketNavItems');
        this.setState({navItems});
    }
}

export default FinancialMarketSecond
