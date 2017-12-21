import React from 'react'
import './style.scss'

const AssetsManage = ({data}) => {
    return (
        <div className="assets-manage">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../static/images/financial_banner_child.jpg')} title={data.title || '资产管理'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '资产管理'}</h2>
                <div className="assets-manage-main">
                    data.content ?
                    (
                    <div className="assets-manage-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="assets-manage-static">
                        <h6>业务介绍</h6>
                        <p>我行可为投资需要的客户提供各类理财产品，我行注重理财产品的设计开发、风险控制、销售发行、售后管理等。</p>
                        <h6>适用对象</h6>
                        <p>金融同业客户</p>
                        <h6>办理流程</h6>
                        <p>1、签订相关合同及法律文本</p>
                        <p>2、客户前来柜面办理</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default AssetsManage
