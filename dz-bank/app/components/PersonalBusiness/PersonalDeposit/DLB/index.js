import React from 'react'
import './style.scss'

const FeatureDepositDLB = ({data}) => {
    return (
        <div className="feature-deposit">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/personal_banner_personal.jpg')} title={data.title || '特色存款'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '特色存款•多利宝'}</h2>
                <div className="feature-deposit-main">
                    data.content ?
                    (
                    <div className="feature-deposit-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="feature-deposit-static">
                        <div className="feature-deposit-static-item overflow-top">
                            <h5>多利宝</h5>
                            <p>1万元起存, 每月支取利息，到期支取本金。一次性存入本金并约定存期后即可每月支取利息，到期后一次性支取本金。提前支取，利息收益根据本金实际留存期限对应的存款利率靠前挡计息，已得利息从本金中扣除。支取原则：提前支取，利息收益根据本金实际留存期限对应的存款利率靠前挡计息。</p>
                            <h6>功能优势</h6>
                            <p>安全保障、存期灵活、增值无忧</p>
                            <h6>适用范围</h6>
                            <p>适合手头有余钱但没有投资需求，短期内无其他用途的定期存款自然人客户。</p>
                            <h6>办理指南</h6>
                            <p>可凭本人有效身份证件和丹凤IC卡到达州银行任一营业网点申请开办“多利宝”业务。</p>
                            <div className="clear-fix"><img src={require('../../../../static/images/dlb.png')} alt="特色存款•多利宝"/></div>
                        </div>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default FeatureDepositDLB
