/**
 * 用户中心
 */
import React from 'react'
import BaseComponent from '../../components/BaseComponent'
import UserComponent from '../../components/User'
import {connect} from 'react-redux'
import mapStateToProps from '../../util/mapStateToProps'
import {$http} from '../../fetch'
import {ORDER_LIST,SUBMIT_COMMENT} from '../../constants'

class User extends BaseComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: []
        }
    }

    render() {
        const {userInfo} = this.props;
        return <UserComponent
            username={userInfo.username}
            cityName={userInfo.cityName}
            data={this.state.data}
            submitComment= { this.submitComment.bind(this)}
        />
    }

    componentDidMount() {
        //未登录 跳转到登录页面
        const {userInfo: {username}, history} = this.props;
        if (!username) return history.push('/login');

        //获取订单列表
        this.getOrderList(username);

    }

    //获取订单列表数据
    getOrderList(username) {
        if (!username) return;

        const result = $http({url: ORDER_LIST, data: {username}});
        result.then( response => this.setState({data:response}));
    }

    //提交评价
    submitComment(data,callback){
        const result = $http({url:SUBMIT_COMMENT,data,method:"POST"});
        result.then(response => {
            if(response.errno === 0) callback();
        })
    }
}

export default connect(mapStateToProps({userInfo: "userInfoState"}))(User)
