import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

const Item = ({item,index}) => {

    return (
        <div className={`company-business-load-item inline-block ${index/5<1 ? 'first' : ''}`}>
            <Link to={item.linkUrl}><em title={item.title} style={ {backgroundImage:`url(${item.imgUrl})`} } className="inline-block"/><h4 className="text-ellipsis">{item.title}</h4></Link>
            <p className="text-ellipsis">{item.content}</p>
        </div>
    );
}

export default Item
