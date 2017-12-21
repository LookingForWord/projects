import React from 'react'
import './style.scss'

const SCGYDLoan = ({data}) => {
    return (
        <div className="scgyd-loan">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/company_banner_loan.jpg')} title={data.title || '金凤凰•商超供应贷'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '金凤凰•商超供应贷'}</h2>
                <div className="scgyd-loan-main">
                    data.content ?
                    (
                    <div className="scgyd-loan-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="scgyd-loan-static">
                        {/*<p>金凤凰•商超供应贷”是指专门为优质大型的商场经营商户及超市供应商精心研发的，用于满足日常经营资金不足的贷款业务。</p>*/}
                        {/*<h6>产品特点</h6>*/}
                        {/*<p>重信用、轻抵押、专注商超链</p>*/}
                        {/*<h6>适用对象</h6>*/}
                        {/*<p>优质商场、超市的经营商户及供应商</p>*/}
                        {/*<h6>借款条件（共6条）</h6>*/}
                        {/*<p>1、持有合法有效的营业执照等相关证明，且作为商超供应商一年以上；</p>*/}
                        {/*<p>2、有稳定现金流，具备按期偿还贷款本息的能力；</p>*/}
                        {/*<p>3、在经办机构开立结算账户，将此账户作为商超的回款账户，与我行签订同意从其结算账户中扣收贷款本息的协议；</p>*/}
                        {/*<p>4、与优质商超签订进场或供货协议；</p>*/}
                        {/*<p>5、无违法、违纪行为及重大不良信用记录；</p>*/}
                        {/*<p> 6、我行要求的其他条件。</p>*/}
                        {/*<h6>贷款额度</h6>*/}
                        {/*<p>单户最高可达500万元</p>*/}
                        {/*<h6>担保要求</h6>*/}
                        {/*<p>信用借款，可追加其他灵活的担保方式</p>*/}
                        <img src={require('../../../../static/images/scgyd1.png')} alt="金凤凰•商超供应贷"/>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default SCGYDLoan
