/**
 * 加载更多
 */
import React from 'react'
import BaseComponent from '../BaseComponent'
import './style'

class LoadMore extends BaseComponent{
    constructor(props,context){
        super(props,context);
        this.scrollLoadMore = this.scrollLoadMore.bind(this);
    }

    render(){
        const {isFetching,loadMore} = this.props;

        return (
            <div className="load-more" ref={ elem => this.loadMoreElem = elem}>
                {
                    isFetching ?
                        <span>加载中...</span> :
                        <span onClick={loadMore}>加载更多</span>
                }
            </div>
        );
    }

    scrollLoadMore(){
        if(this.props.isFetching) return;

        //定义截留
        if(this.timer) {
            clearTimeout(this.timer)
            this.timer = null;
        }
        this.timer = setTimeout(() => {
            //获取加载更多距离窗口顶部的高度
            const top = this.loadMoreElem.getBoundingClientRect().top;

            //窗口高度
            const winHeight = window.screen.height;

            //当加载更多元素出现在窗口内时执行加载数据
            if(top && top < winHeight) this.props.loadMore();
        },100)
    }

    componentDidMount(){
        //滚动加载更多
        window.addEventListener('scroll',this.scrollLoadMore,false);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.scrollLoadMore,false);
    }
}
export default LoadMore
