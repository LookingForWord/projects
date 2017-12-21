import React from 'react'
import News from './News'
import Notice from './Notice'
import PublicityEducation from './PublicityEducation'
import {Switch,Route} from 'react-router-dom'
import NewNoticeComponent from '../../../components/About/NewNotice'

class NewNotice extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state={
            navItems:{}
        }
    }

    render(){
        return (
            <NewNoticeComponent navItems={this.state.navItems}>
                <Switch>
                    <Route path='/about/xwgg/dhyw' component={News} exact/>
                    <Route path='/about/xwgg/zygg' component={Notice} exact/>
                    <Route path='/about/xwgg/xcjy/:subType?' component={PublicityEducation} exact/>
                </Switch>
            </NewNoticeComponent>
        )
    }

    componentDidMount(){
        this.getNavItems();
    }

    getNavItems(){
        const navItems = require('../../../../mock/newNotice');
        this.setState({navItems});
    }
}

export default NewNotice
