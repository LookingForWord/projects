import React from 'react'
import './style.scss'

const Supervisors = ({data}) => {
    return (
        <div className="inform-supervisors-composition">
            <div className="template-body-banner">
                <img src={data.bannerUrl} title={data.title}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title}</h2>
                <div className="inform-supervisors-composition-main">{
                    data.content ? data.content: (
                        <div className="inform-supervisors-composition-empty">暂无数据！</div>
                    )
                }</div>
            </div>
        </div>
    );
}

export default Supervisors
