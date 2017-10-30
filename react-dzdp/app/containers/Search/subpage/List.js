/**
 * Search List
 */
import React from 'react'
import BaseComponent from '@/components/BaseComponent'
import ListComponent from '@/components/List'
import LoadMore from '@/components/LoadMore'
import {searchListAction} from '@/actions/search'
import {resetStateAction} from '@/actions/resetState'
import {connect} from 'react-redux'
import mapDispatchToProps from '@/util/mapDispatchToProps'
import mapStateToProps from '@/util/mapStateToProps'

class List extends BaseComponent{
    constructor(props,context){
        super(props,context);
        this.state={
            isResetState:false
        }
    }

    render(){
        const {searchListData} = this.props;

        return (
            <div className="home-list-recommend">
                <ListComponent data={searchListData.data}/>
                {
                    searchListData.hasMore ?
                            <LoadMore isFetching={searchListData.isFetching} loadMore={this.getData.bind(this,this.props)}/>:
                            null
                }
            </div>
        );
    }

    componentDidMount(){
        //获取列表第一页数据
        this.getData(this.props);
    }

    componentWillReceiveProps(nextProps){

        if(this.state.isResetState){
            this.getData(nextProps);
            this.setState({isResetState:false});
        }

        const {params} = this.props;
        if(params.category === nextProps.params.category &&
            params.keyword === nextProps.params.keyword) return;

        //重置state
        const {resetStateAction} = this.props;
        resetStateAction({payload:{name:"searchList"}});

        this.setState({isResetState:true});
    }

    getData(props){
        const {searchListAction,searchListData,userInfo:{cityName},params} = props;

        searchListAction({cityName,page:searchListData.page,category:params.category,keyword:params.keyword ? params.keyword : ''});
    }
}

export default connect(
    mapStateToProps({userInfo:'userInfoState',searchListData:'searchState'}),
    mapDispatchToProps({searchListAction,resetStateAction})
)(List)
