import React from 'react'
import './style.scss'

const Detail = props => {

    return (
        <div className="about-detail-container overflow-top">
            <h4><span>关于达行<em>/</em></span>{/*<span>{props.title}<em>/</em></span>*/}<span style={{color:'#A1753A'}}>{props.type}<em></em></span></h4>
            {
                props.data.title ? (
                    <div className="about-detail-main">
                        <h2>{props.data.title}</h2>
                        <p>发布时间： <span>{props.data.date}</span></p>
                        <div className="about-detail-main-content" dangerouslySetInnerHTML={{__html:props.data.content}}/>
                    </div>
                ):(
                    <div className="about-detail-main-empty">暂无数据！</div>
                )
            }
        </div>
    );
}

export default Detail