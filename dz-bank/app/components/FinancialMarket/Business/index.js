/**
 * 金融业务
 */
import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

const Business = props => {

    return (
        <div className="financial-business-container">
            <h2>金融业务</h2>
            <div className="financial-business-items">
                {
                    props.businesses.map( (item,index) => (
                        <div className="financial-business-item inline-block" key={index}>
                            <div className="img-container"><Link to={item.linkUrl} title={item.title} style={ {backgroundImage:`url(${item.imgUrl})`} }/></div>
                            <h4 className="text-ellipsis">{item.title}</h4>
                            <Link to={item.linkUrl} className="detail">了解详情</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Business
