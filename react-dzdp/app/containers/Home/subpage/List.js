/**
 * 猜你喜欢列表
 */
import React from 'react'
import BaseComponent from '@/components/BaseComponent'
import HomeList from '@/components/HomeList'
import LoadMore from '@/components/LoadMore'

export default class List extends BaseComponent{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div className="home-list-recommend">
                <HomeList {...this.props.homeList}/>
                {
                    this.props.homeList.hasMore ?
                        <LoadMore isFetching={this.props.homeList.isFetching} loadMore={this.getData.bind(this)}/>:
                        null
                }
            </div>
        );
    }

    componentDidMount(){
        //获取列表第一页数据
        this.getData();
    }

    getData(){
        const {homeListAction,cityName,homeList} = this.props;
        homeListAction({cityName,page:homeList.page});
    }
}



