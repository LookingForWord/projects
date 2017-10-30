/**
 * comment list
 */
import React from 'react'
import Item from './Item'

import './style.scss'

const CommentList = ({data}) => {
    return (
        <div className="comment-list">
            {
                data.map((item,index) => {
                    return <Item key={index} data={item}/>
                })
            }
        </div>
    );
}

export default CommentList
