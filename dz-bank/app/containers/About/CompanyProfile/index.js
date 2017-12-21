/**
 * 公司概况
 */
import React from 'react'
import Intro from './Intro'
import Strategy from './Strategy'
import Culture from './Culture'
import Honor from './Honor'
import Duty from './Duty'
import {Switch,Route} from 'react-router-dom'
import CompanyProfileComponent from '../../../components/About/CompanyProfile'

class CompanyProfile extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state={
            navItems:{}
        }
    }

    render(){
        return (
            <CompanyProfileComponent navItems={this.state.navItems}>
                <Switch>
                    <Route path='/about/gsgk/gsjj' component={Intro} exact/>
                    <Route path='/about/gsgk/fzzl' component={Strategy} exact/>
                    <Route path='/about/gsgk/qywh' component={Culture} exact/>
                    <Route path='/about/gsgk/gsry' component={Honor} exact/>
                    <Route path='/about/gsgk/shzr' component={Duty} exact/>
                </Switch>
            </CompanyProfileComponent>
        )
    }

    componentDidMount(){
        this.getNavItems();
    }

    getNavItems(){
        const navItems = require('../../../../mock/companyProfile');
        this.setState({navItems});
    }
}

export default CompanyProfile
