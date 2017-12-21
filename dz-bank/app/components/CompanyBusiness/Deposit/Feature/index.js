import React from 'react'
import './style.scss'

const FeatureDeposit = ({data}) => {
    return (
        <div className="feature-deposit">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/company_banner_deposit.jpg')} title={data.title || '特色存款'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '特色存款'}</h2>
                <div className="feature-deposit-main">
                    data.content ?
                    (
                    <div className="feature-deposit-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="feature-deposit-static">
                        <h5>乐惠存</h5>
                        <h6>产品简介</h6>
                        <p>不约定存期的定期存款产品，即客户办理“乐惠存”业务不约定存期，支取时根据实际存期所对应的整存整取存款、通知存款、活期存款分段计付利息。人民币起存金额1万元。</p>
                        <h6>适用范围</h6>
                        <p>凡在我行开立人民币基本存款账户或一般账户的企业、事业、机关、部队、社会团体和个体经济户等单位。</p>
                        <h6>办理流程</h6>
                        <p>各支行、营业部均可办理公司客户的活期存款业务。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default FeatureDeposit
