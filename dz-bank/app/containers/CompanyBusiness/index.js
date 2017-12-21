import React from 'react'
import CompanyDeposit from './CompanyDeposit'
import CompanyLoan from './CompanyLoan'
import Note from './Note'
import Index from './First'
import {Switch,Route} from 'react-router-dom'

class CompanyBusiness extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state={
            navItems:{}
        }
    }

    render(){
        return (
                <Switch>
                    <Route path='/companyBusiness' component={Index} exact/>
                    <Route path='/companyBusiness/gsck/:subType?' render={
                        props => <CompanyDeposit {...this.props} navItems={this.state.navItems}/>
                    } exact/>
                    <Route path='/companyBusiness/gsdk/:subType?' render={
                        props => <CompanyLoan {...this.props} navItems={this.state.navItems}/>
                    } exact/>
                    <Route path='/companyBusiness/pj/:subType?' render={
                        props => <Note {...this.props} navItems={this.state.navItems}/>
                    } exact/>
                </Switch>
        )
    }

    componentDidMount(){
        this.getNavItems();
    }

    getNavItems(){
        const navItems = require('../../../mock/companyBusinessNavItems');
        this.setState({navItems});
    }
}

export default CompanyBusiness
