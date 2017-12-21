import React from 'react'
import './style.scss'

const FeatureDepositLHC = ({data}) => {
    return (
        <div className="feature-deposit">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/personal_banner_personal.jpg')} title={data.title || '特色存款'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '特色存款•乐惠存'}</h2>
                <div className="feature-deposit-main">
                    data.content ?
                    (
                    <div className="feature-deposit-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="feature-deposit-static">
                        <div className="feature-deposit-static-item overflow-top">
                            <h5>乐惠存</h5>
                            <p>1万元起存, 不约定存期的定期存款产品，即客户办理“乐惠存”业务不约定存期，支取时根据实际存期所对应的整存整取存款、通知存款、活期存款分段计付利息。</p>
                            <h6>功能优势</h6>
                            <p>提前支取享定期利息，产品支取灵活。</p>
                            <h6>适用范围</h6>
                            <p>适合那些近期要支用大额活期存款但又不知支用的确切日期的自然人储户。</p>
                            <h6>办理指南</h6>
                            <p>可凭本人有效身份证件到达州银行任一营业网点申请开办“乐惠存”业务。</p>
                        </div>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default FeatureDepositLHC
