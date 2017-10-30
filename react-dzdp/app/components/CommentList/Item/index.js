/**
 * comment item
 */
import React from 'react'
import Star from '../../Star'
import './style.scss'

const Item = ({data}) => {

    return (
        <div className="comment-item">
            <h3>
                <i className="icon-user"/>
                &nbsp;
                {data.username}
            </h3>
            <Star star={data.star}/>
            <p>{data.comment}</p>
        </div>
    );
}

export default Item
