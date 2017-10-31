/**
 * 详情组件
 */
import React from 'react'
import Header from '../Header'
import DetailInfo from '../DetailInfo'
import Comment from '../Comment'

const Detail = (props) => {
    const {data,loadMore} = props;
    return (
        <div className="commercial-detail">
            <Header title="商户详情"/>
            <DetailInfo data={data.detailInfo}/>
            {props.children}
            <Comment {...data.detailComment} loadMore={ loadMore }/>
        </div>
    );
}

export default Detail
