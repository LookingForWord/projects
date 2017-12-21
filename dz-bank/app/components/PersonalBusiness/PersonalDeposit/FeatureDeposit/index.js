import React from 'react'
import './style.scss'

const FeatureDeposit = ({data}) => {
    return (
        <div className="feature-deposit">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/personal_banner_personal.jpg')} title={data.title || '特色存款'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '特色存款•多利存'}</h2>
                <div className="feature-deposit-main">
                    data.content ?
                    (
                    <div className="feature-deposit-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="feature-deposit-static">
                        <div className="feature-deposit-static-item overflow-top">
                            <h5>多利存</h5>
                            <p>3万元起存, 年利率5.4%，以5年定期存单开立。按月、季、年支付利息，同时，每月领取的利息可以再投零存整取或其他定期存款产品，综合年化收益率最高可达5.667%。提前支取挂牌按活期计息。</p>
                            <h6>功能优势</h6>
                            <p>安全保障、高额收益、月月付息</p>
                            <h6>适用范围</h6>
                            <p>适合手头有余钱但没有投资需求，短期内无其他用途的定期存款自然人客户。</p>
                            <h6>办理指南</h6>
                            <p>可凭本人有效身份证件和丹凤IC卡到达州银行任一营业网点申请开办“多利存”业务。</p>
                            <div className="clear-fix"><img src={require('../../../../static/images/dlc.png')} alt="多利存"/></div>
                        </div>
                        {/*<div className="feature-deposit-static-item overflow-top">*/}
                            {/*<h5>多利宝</h5>*/}
                            {/*<p>1万元起存, 每月支取利息，到期支取本金。一次性存入本金并约定存期后即可每月支取利息，到期后一次性支取本金。提前支取，利息收益根据本金实际留存期限对应的存款利率靠前挡计息，已得利息从本金中扣除。支取原则：提前支取，利息收益根据本金实际留存期限对应的存款利率靠前挡计息。</p>*/}
                            {/*<h6>功能优势</h6>*/}
                            {/*<p>安全保障、存期灵活、增值无忧</p>*/}
                            {/*<h6>适用范围</h6>*/}
                            {/*<p>适合手头有余钱但没有投资需求，短期内无其他用途的定期存款自然人客户。</p>*/}
                            {/*<h6>办理指南</h6>*/}
                            {/*<p>可凭本人有效身份证件和丹凤IC卡到达州银行任一营业网点申请开办“多利宝”业务。</p>*/}
                        {/*</div>*/}
                        {/*<div className="feature-deposit-static-item overflow-top">*/}
                            {/*<h5>乐惠存</h5>*/}
                            {/*<p>1万元起存, 不约定存期的定期存款产品，即客户办理“乐惠存”业务不约定存期，支取时根据实际存期所对应的整存整取存款、通知存款、活期存款分段计付利息。</p>*/}
                            {/*<h6>功能优势</h6>*/}
                            {/*<p>提前支取享定期利息，产品支取灵活。</p>*/}
                            {/*<h6>适用范围</h6>*/}
                            {/*<p>适合那些近期要支用大额活期存款但又不知支用的确切日期的自然人储户。</p>*/}
                            {/*<h6>办理指南</h6>*/}
                            {/*<p>可凭本人有效身份证件到达州银行任一营业网点申请开办“乐惠存”业务。</p>*/}
                        {/*</div>*/}
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default FeatureDeposit
