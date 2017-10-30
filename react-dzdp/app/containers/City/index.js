/**
 * 城市模块
 */
import React from 'react'
import BaseComponent from '@/components/BaseComponent'
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import {connect} from 'react-redux'
import mapStateToProps from '../../util/mapStateToProps'
import mapDispatchToProps from '../../util/mapDispatchToProps'
import * as userInfoActions from '../../actions/userInfo'
import localStore from '../../util/localStore'
import {CITY_NAME} from '../../constants'
import CityList from '../../components/CityList'
import * as resetStateActions from '../../actions/resetState'

class City extends BaseComponent{
    render(){

        return (
            <div className="city">
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                <CityList changeCity={this.changeCity.bind(this)}/>
            </div>
        );
    }

    changeCity(cityName){
        if(cityName == null) return;

        const {history,userInfoActions:{updateAction},resetStateActions:{resetStateAction}} = this.props;

        //修改redux
        updateAction({cityName});

        //修改localStore
        localStore.setItem(CITY_NAME,cityName);

        //重置homeList的state状态
        resetStateAction({payload:{name:"homeList"}});

        //跳转到首页
        history.push('/');
    }
}


export default connect(mapStateToProps({userInfo:'userInfoState'}),mapDispatchToProps({userInfoActions,resetStateActions}))(City);
