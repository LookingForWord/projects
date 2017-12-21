import React from 'react'
import './style.scss'

const StockholderIntro = ({data}) => {
    return (
        <div className="inform-stockholder-intro">
            <div className="template-body-banner">
                <img src={data.bannerUrl} title={data.title}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title}</h2>
                <div className="inform-stockholder-intro-main">{data.content}</div>
            </div>
        </div>
    );
}

export default StockholderIntro
