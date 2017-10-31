/**
 * 登录
 */
import React from 'react'
import BaseComponent from '../../components/BaseComponent'
import {connect} from 'react-redux'
import * as userInfoActions from '../../actions/userInfo'
import mapStateToProps from '../../util/mapStateToProps'
import mapDispatchToProps from '../../util/mapDispatchToProps'
import LoginComponent from '../../components/Login'

class Login extends BaseComponent{
    constructor(props,context){
        super(props,context);
        this.state = {
            checking:true
        }
    }

    render(){
        return (
            this.state.checking ? null : <LoginComponent loginHandle={this.loginHandle.bind(this)} />
        );
    }

    componentDidMount(){
        //判断是否已经登录
        this.doCheck();
    }

    doCheck(){
        const userInfo = this.props.userInfo;

        //已经登录则跳转到用户主页
        if(userInfo.username) this.goUserPage();
        //未登录 则进行登录
        else this.setState({checking:false});
    }

    goUserPage(){//默认进入用户主页
        const {history} = this.props;
        history.push('/user');
    }

    loginHandle(username){
        //保存用户名
        const actions = this.props.userInfoActions;
        let userInfo = this.props.userInfo;
        userInfo.username = username;
        actions.updateAction(userInfo);

        //跳转页面
        const {match:{params},history} = this.props;
        const route = params.route;

        //跳转到指定页面
        if(route) history.push(decodeURIComponent(route));
        //跳转到默认页面
        else this.goUserPage();
    }
}

export default connect(mapStateToProps({userInfo:'userInfoState'}),mapDispatchToProps({userInfoActions}))(Login)
