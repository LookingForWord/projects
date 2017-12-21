import React from 'react'
import PersonalEBank from '../PersonalEBank'
import CorporateEBank from '../CorporateEBank'
import MobileEBank from '../MobileEBank'
import MicroBank from '../MicroBank'
import DirectBank from '../DirectBank'
import {Switch,Route} from 'react-router-dom'
import SecondComponent from '../../../components/EBank/Second'

class EBankSecond extends React.Component{
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
                    <Route path='/eBank/grwy' component={PersonalEBank} exact/>
                    <Route path='/eBank/qywy' component={CorporateEBank} exact/>
                    <Route path='/eBank/sjyh' component={MobileEBank} exact/>
                    <Route path='/eBank/wxyh' component={MicroBank} exact/>
                    <Route path='/eBank/zxyh' component={DirectBank} exact/>
                </Switch>
            </SecondComponent>
        )
    }

    componentDidMount(){
        this.getNavItems();
    }

    getNavItems(){
        const navItems = require('../../../../mock/eBankNavItems');
        this.setState({navItems});
    }
}

export default EBankSecond
