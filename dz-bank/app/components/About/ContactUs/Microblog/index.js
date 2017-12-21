import React from 'react'
import './style.scss'

const MicroBlog = ({data}) => {
    return (
        <div className="micro-blog">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/about_banner_lxdh.jpg')} title={data.title || '官方微博'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '官方微博'}</h2>
                <div className="micro-blog-main">
                    <p>暂无数据！</p>
                </div>
            </div>
        </div>
    );
}

export default MicroBlog
