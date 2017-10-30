/**
 * detail info
 */
import React from 'react'
import Star from '../Star'

import './style.scss'

const DetailInfo =  (props) => {
    const data = props.data.data;

    return (
        data ?
            <div className="detail-info-container">
                <div className="info-container clear-fix">
                    <div className="info-img-container float-left">
                        <img src={require('./images/'+data.img)}/>
                    </div>
                    <div className="info-content">
                        <h1>{data.title}</h1>
                        <div className="price-container">
                            <Star star={data.star}/>
                            <span className="price">￥ {data.price}</span>
                        </div>
                        <p className="sub-title">{data.subTitle}</p>
                    </div>
                </div>
                <p dangerouslySetInnerHTML={{__html:data.desc}} className="info-desc"/>
            </div>
            : null
    );
}

export default DetailInfo
