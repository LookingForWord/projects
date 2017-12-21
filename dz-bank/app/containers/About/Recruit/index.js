import React from 'react'
import RecruitNotice from './RecruitNotice'
import {Switch,Route} from 'react-router-dom'
import RecruitComponent from '../../../components/About/Recruit'

class Recruit extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state={
            navItems:{}
        }
    }

    render(){
        return (
            <RecruitComponent navItems={this.state.navItems}>
                <Switch>
                    <Route path='/about/rczp/zpgg' component={RecruitNotice} exact/>
                </Switch>
            </RecruitComponent>
        )
    }

    componentDidMount(){
        this.getNavItems();
    }

    getNavItems(){
        const navItems = require('../../../../mock/RecruitNavItems');
        this.setState({navItems});
    }
}

export default Recruit
