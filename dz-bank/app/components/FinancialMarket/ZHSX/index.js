import React from 'react'
import './style.scss'

const ZHSX = ({data}) => {
    return (
        <div className="zhsx-financial">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../static/images/financial_banner_child.jpg')} title={data.title || '综合授信'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '综合授信'}</h2>
                <div className="zhsx-financial-main">
                    data.content ?
                    (
                    <div className="zhsx-financial-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="zhsx-financial-static">
                        <h6>业务介绍</h6>
                        <p>我行在对授信客户的业务和财务只要指标进行综合分析的基础上，评定其信用等级，根据等级和公司规模，相应确定授信额度和授信期限。</p>
                        <h6>适用对象</h6>
                        <p>所有同业机构</p>
                        <h6>办理流程</h6>
                        <p>按照《达州银行金融同业综合授信管理办法》执行</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default ZHSX
