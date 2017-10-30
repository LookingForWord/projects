/**
 * 首页模块
 */
import React from 'react'
import BaseComponent from '@/components/BaseComponent'
import HomeHeader from '@/components/HomeHeader'
import Category from '@/components/Category'
import HomeAd from '../../components/HomeAd'
import {connect} from 'react-redux'
import mapStateToProps from '@/util/mapStateToProps'
import mapDispatchToProps from '@/util/mapDispatchToProps'
import * as homeActions from '../../actions/home'
import List from './subpage/List'
class Home extends BaseComponent{
    render(){
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                <Category/>
                <HomeAd homeAd={this.props.home.homeAd}/>
                <List  homeListAction={this.props.homeActions.homeListAction}
                      cityName={this.props.userInfo.cityName}
                      homeList={this.props.home.homeList}
                />
            </div>
        );
    }

    componentDidMount(){
        const {homeAdAction} = this.props.homeActions;
        //获取广告信息
        homeAdAction();
    }
}

export default connect(mapStateToProps({userInfo:'userInfoState',home:'homeState'}),mapDispatchToProps({homeActions}))(Home)
