/**
 * Login component
 */
import React from 'react'
import BaseComponent from '../BaseComponent'
import Header from '../Header'
import './style.scss'

class Login extends BaseComponent{
    constructor(props,context){
        super(props,context);
        this.state = {username:'',password:''}
    }

    render(){
        return (
            <div className="login">
                <Header title="登录"/>
                <div className="login-container">
                    <div className="login-input-container phone-container">
                        <i className="icon-tablet"/>
                        <input  type="text"
                                placeholder="请输入手机号"
                                onChange={this.changeHandle.bind(this)}
                                value={this.state.username}
                                name="username"
                                autoComplete="off"
                        />
                    </div>
                    <div className="login-input-container password-container">
                        <i className="icon-key"/>
                        <button>发送验证码</button>
                        <input type="text"
                               placeholder="请输入验证码"
                               name="password"
                               value={this.state.password}
                               onChange={this.changeHandle.bind(this)}
                               autoComplete="off"
                        />
                    </div>
                    <button className="btn-login" onClick={this.clickHandle.bind(this)}>登录</button>
                </div>
            </div>
        );
    }

    changeHandle(e){
        const targetElem = e.currentTarget;
        this.setState({[targetElem.name]:targetElem.value});
    }

    clickHandle(){
        this.props.loginHandle(this.state.username);
    }
}

export default Login