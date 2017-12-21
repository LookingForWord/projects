import React from 'react'
import {Link} from 'react-router-dom'
import Page from '../../../commons/Page'
import './style.scss'

const RecruitNotice = ({data,items,clickHandle,total,type}) => {
    return (
        <div className="recruit-notice">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/about_banner_zp.jpg')} title={data.title || '招聘公告'}/>
            </div>
            <div className="template-body-content overflow-top recruit-notice-content">
                <h2>{data.title || '招聘公告'}</h2>
                <div className="recruit-notice-main">
                    {
                        items.data && items.data.length > 0?
                            items.data.map((item,index) =>(
                                    <div className="recruit-notice-item" key={item.id}>
                                        <Link to={`/about/detail/${type}/${item.id}`} className="clear-fix">
                                            <span className="float-left text-ellipsis">{item.title}</span>
                                            <span className="float-right">{item.date}</span>
                                        </Link>
                                    </div>
                            )):(
                            <div className="recruit-notice-item-empty">暂无数据！</div>
                            )
                    }
                </div>
                {
                    total && (<div className="recruit-notice-page-container">
                                <Page clickHandle={ clickHandle } total={total}/>
                             </div>)
                }
            </div>
        </div>
    );
}

export default RecruitNotice
