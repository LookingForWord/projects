import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

const Item = ({item}) => {

    return (
        <div className="personal-business-card-item swiper-slide">
            <Link to={item.linkUrl} className='img-container'><img src={item.imgUrl} title={item.title}/></Link>
            <h4 className="text-ellipsis">{item.title}</h4>
            <p className="text-ellipsis">{item.content}</p>
            <Link to={item.linkUrl} className="detail">了解详情</Link>
        </div>
    );
}

export default Item
