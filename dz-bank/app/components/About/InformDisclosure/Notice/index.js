import React from 'react'
import {Link} from 'react-router-dom'
import Page from '../../../commons/Page'
import './style.scss'

const Notice = ({data,items,clickHandle,total,type}) => {

    return (
        <div className="inform-notice">
            <div className="template-body-banner">
                <img src={data.bannerUrl} title={data.title}/>
            </div>
            <div className="template-body-content overflow-top inform-notice-content">
                <h2>{data.title}</h2>
                <div className="inform-notice-main">
                    {
                        items.data && items.data.length > 0?
                            items.data.map((item,index) =>(
                                    <div className="inform-notice-item" key={item.id}>
                                        <Link to={`/about/detail/${type}/${item.id}`} className="clear-fix">
                                            <span className="float-left text-ellipsis">{item.title}</span>
                                            <span className="float-right">{item.date}</span>
                                        </Link>
                                    </div>
                            )):(
                            <div className="inform-notice-item-empty">暂无数据！</div>
                            )
                    }
                </div>
                {
                    total && (<div className="inform-notice-page-container">
                                <Page clickHandle={ clickHandle } total={total}/>
                             </div>)
                }
            </div>
        </div>
    );
}

export default Notice
