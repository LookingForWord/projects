/**
 * 页面入口模块
 */
import React from 'react'
import BaseComponent from '@/components/BaseComponent'
import {connect} from 'react-redux'
import Home from '@/containers/Home'
import LocalStore from '@/util/localStore'
import {CITY_NAME} from '@/constants'
import * as userInfoActions from '@/actions/userInfo'
import mapStateToProps from '@/util/mapStateToProps'
import mapDispatchToProps from '@/util/mapDispatchToProps'

class App extends BaseComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            initDone: false
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone
                        ? <Home/>
                        : <div>Loading...</div>
                }
            </div>
        );
    }

    componentDidMount() {
        //获取位置信息
        let cityName = LocalStore.getItem(CITY_NAME);
        if (cityName == null) cityName = '成都';

        //更新store中的userInfo
        let {updateAction} = this.props.userInfoActions;
        updateAction({cityName});

        //更新状态
        this.setState({
            initDone:true
        });
    }
}

export default connect(mapStateToProps,mapDispatchToProps({userInfoActions}))(App);