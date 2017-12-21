import React from 'react'
import './style.scss'

const WeChat = ({data}) => {
    return (
        <div className="we-chat">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/about_banner_lxdh.jpg')} title={data.title || '官方微信'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '官方微信'}</h2>
                <div className="we-chat-main">
                    <h6>官方微信</h6>
                    <p className="img"><img src={data.gfwx || require('./images/dhwx.png')} alt="官方微信"/></p>
                </div>
            </div>
        </div>
    );
}

export default WeChat
