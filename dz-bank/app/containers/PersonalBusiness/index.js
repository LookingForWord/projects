import React from 'react'
import Index from './First'
import BankCard from './BankCard'
import PersonalDeposit from './PersonalDeposit'
import PersonalLoan from './PersonalLoan'
import {Switch,Route} from 'react-router-dom'

class PersonalBusiness extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state={
            navItems:{}
        }
    }

    render(){
        return (
                <Switch>
                    <Route path='/personalBusiness' component={Index} exact/>
                    <Route path='/personalBusiness/yhk/:subType?' render={
                        props => <BankCard {...this.props} navItems={this.state.navItems}/>
                    } exact/>
                    <Route path='/personalBusiness/grck/:subType?' render={
                        props => <PersonalDeposit {...this.props} navItems={this.state.navItems}/>
                    } exact/>
                    <Route path='/personalBusiness/grdk/:subType?' render={
                        props => <PersonalLoan {...this.props} navItems={this.state.navItems}/>
                    } exact/>
                </Switch>
        )
    }

    componentDidMount(){
        this.getNavItems();
    }

    getNavItems(){
        const navItems = require('../../../mock/personalBusinessNavItems');
        this.setState({navItems});
    }
}

export default PersonalBusiness
