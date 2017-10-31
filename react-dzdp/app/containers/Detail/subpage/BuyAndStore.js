/**
 * 购买与收藏
 */
import React from 'react'
import BaseComponent from '../../../components/BaseComponent'
import BuyAndStoreComponent from '../../../components/BuyAndStore'
import {connect} from 'react-redux'
import * as productStoreActions from '../../../actions/productStore'
import mapDispatchToProps from '../../../util/mapDispatchToProps'
import mapStateToProps from '../../../util/mapStateToProps'
import {withRouter} from 'react-router-dom'

class BuyAndStore extends BaseComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {isStore: false}
    }

    render() {
        return <BuyAndStoreComponent
            isStore={this.state.isStore}
            buyHandle={this.buyHandle.bind(this)}
            storeHandle={this.storeHandle.bind(this)}
        />
    }

    componentDidMount(){
        //验证当前商户是否收藏
        this.checkStore();
    }

    //登录检查
    loginCheck() {
        const {id, userInfo, history} = this.props;

        if (!userInfo.username) {
            history.push(`/login/${encodeURIComponent('/detail/' + id)}`);
            return false;
        }

        return true;
    }

    //检查当前商户是否被收藏
    checkStore() {
        const {id, store} = this.props;

        store.store.some(item => {
            if (item.id === id) {
                //已经被收藏
                this.setState({isStore: true});

                //跳出循环
                return false;
            }
        })
    }

    //购买按钮处理函数
    buyHandle() {
        const {history} = this.props;
        //验证登陆
        if (!this.loginCheck()) return;

        //执行购买流程
        //...

        //跳转到用户主页
        history.push('/user');
    }

    //收藏按钮处理函数
    storeHandle() {
        //验证登陆
        if (!this.loginCheck()) return;

        //修改收藏数据
        const {id, productStoreActions} = this.props;
        //已经被收藏 取消收藏
        if (this.state.isStore) productStoreActions.removeAction({id});
        //未收藏则收藏
        else productStoreActions.addAction({id});

        //修改状态
        this.setState({isStore: !this.state.isStore});
    }
}

export default connect(
                        mapStateToProps({userInfo:"userInfoState",store:'productStoreState'}),
                        mapDispatchToProps({productStoreActions})
                )(withRouter(BuyAndStore))

