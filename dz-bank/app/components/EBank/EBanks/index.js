import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

const EBanks = props => {

    return (
        <div className="e-banks-container">
            <h2>电子银行</h2>
            <div className="e-banks-items">
                {
                    props.eBanks.map( (item,index) => (
                        <div className="e-banks-item inline-block" key={index}>
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

export default EBanks
