import React from 'react'
import ConsultComplaint from './ConsultComplaint'
import OnlineLoan from './OnlineLoan'
import ContactUs from '../ContactUs'
import {Switch,Route} from 'react-router-dom'
import OnlineServiceComponent from '../../../components/About/OnlineService'

class OnlineService extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state={
            navItems:{}
        }
    }

    render(){
        return (
            <OnlineServiceComponent navItems={this.state.navItems}>
                <Switch>
                    <Route path='/about/zxfw/zxts' component={ConsultComplaint} exact/>
                    <Route path='/about/zxfw/zxsd/:subType?' component={OnlineLoan} exact/>
                    <Route path='/about/zxfw/lxdh/:subType?' component={ContactUs} exact/>
                </Switch>
            </OnlineServiceComponent>
        )
    }

    componentDidMount(){
        this.getNavItems();
    }

    getNavItems(){
        const navItems = require('../../../../mock/onlineService');
        this.setState({navItems});
    }
}

export default OnlineService
