/**
 * 详情页
 */
import React from 'react'
import BaseComponent from '../../components/BaseComponent'
import DetailComponent from '../../components/Detail'
import * as detailActions from '../../actions/detail'
import {resetStateAction} from '../../actions/resetState'
import mapDispatchToProps from '../../util/mapDispatchToProps'
import mapStateToProps from '../../util/mapStateToProps'
import {connect} from 'react-redux'
class Detail extends BaseComponent{
    render(){
        return <DetailComponent data={this.props.detail} loadMore={this.loadMore.bind(this)}/>
    }

    componentDidMount(){
        const {detailActions:{infoAction,commentAction},match:{params},detail:{detailComment}} = this.props;
        infoAction({id:params.id});

        //获取点评第一页
        commentAction({page:detailComment.page,id:params.id});
    }

    loadMore(){
        const {detailActions:{commentAction},match:{params},detail:{detailComment}} = this.props;

        //加载更多
        commentAction({page:detailComment.page,id:params.id});
    }

    componentWillUnmount(){
        //重置state
        this.props.resetStateAction({payload:{name:'detailComment'}});
    }
}

export default connect(mapStateToProps({detail:'detailState'}),mapDispatchToProps({detailActions,resetStateAction}))(Detail)
