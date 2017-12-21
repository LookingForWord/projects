/**
 * 公司概况
 */
import React from 'react'
import Report from './Report'
import XXPL from './XXPL'
import Stockholder from './Stockholder'
import Structure from '../CompanyProfile/Structure'
import Governance from './Governance'
import {Switch,Route} from 'react-router-dom'
import InformDisclosureComponent from '../../../components/About/InformDisclosure'

class InformDisclosure extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state={
            navItems:{}
        }
    }

    render(){
        return (
            <InformDisclosureComponent navItems={this.state.navItems}>
                <Switch>
                    <Route path='/about/xxpl/dqbg' component={Report} exact/>
                    <Route path='/about/xxpl/xxplu' component={XXPL} exact/>
                    <Route path='/about/xxpl/zzjg' component={Structure} exact/>
                    <Route path='/about/xxpl/gdxx' component={Stockholder} exact/>
                    <Route path='/about/xxpl/gszl/:subType?' component={Governance} exact/>
                </Switch>
            </InformDisclosureComponent>
        )
    }

    componentDidMount(){
        this.getNavItems();
    }

    getNavItems(){
        const navItems = require('../../../../mock/informDisclosure');
        this.setState({navItems});
    }
}

export default InformDisclosure
