/**
 * 详情组件
 */
import React from 'react'
import Header from '../Header'
import DetailInfo from '../DetailInfo'
import Comment from '../Comment'

const Detail = ({data,loadMore}) => {

    return (
        <div className="commercial-detail">
            <Header title="商户详情"/>
            <DetailInfo data={data.detailInfo}/>
            <Comment {...data.detailComment} loadMore={ loadMore }/>
        </div>
    );
}

export default Detail
