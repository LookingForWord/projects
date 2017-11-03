/**
 * Comment
 */
import React from 'react'
import CommentList from '../CommentList'
import LoadMore from '../LoadMore'

import './style.scss'

const Comment = (props) => {

    return (
        <div className="detail-comment-container">
            <h2>用户点评</h2>
            {
                props.data.length
                    ? <CommentList data={props.data}/>
                    : null
            }
            {
                props.hasMore
                    ? <LoadMore isFetching={props.isFetching} loadMore={props.loadMore}/>
                    : null
            }
        </div>
    );
}

export default Comment
