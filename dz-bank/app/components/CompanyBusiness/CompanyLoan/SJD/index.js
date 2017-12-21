import React from 'react'
import './style.scss'

const SJDLoan = ({data}) => {
    return (
        <div className="sjd-loan">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/company_banner_loan.jpg')} title={data.title || '金凤凰·税金贷'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '金凤凰·税金贷'}</h2>
                <div className="sjd-loan-main">
                    data.content ?
                    (
                    <div className="sjd-loan-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="sjd-loan-static">
                        <p>“金凤凰·税金贷”（以下简称本产品）是指我行主要依据借款申请人的纳税记录向符合条件的小微企业（企业主）、个体工商户发放的，用于日常生产经营活动的信用贷款。</p>
                        <h6>产品特点</h6>
                        <p>纳税信用保证、无需抵押质押</p>
                        <h6>适用对象</h6>
                        <p>企业法人客户和个体工商户</p>
                        <h6>借款条件（共6条）</h6>
                        <p>1、在本地有固定的生产经营场所； </p>
                        <p>2、连续经营1年（含）以上或连续纳税6个月（含）以上； </p>
                        <p>3、申请借款时无拖欠税金、无恶意拖欠银行贷款、无被法院强制执行记录等重大不良信用记录； </p>
                        <p>4、借款申请人同意并授权我行查询其纳税记录，并将在我行开立的结算账户作为销售回款和税款划缴的主要账户； </p>
                        <p>5、具有按时还本付息的意愿和相应的能力； </p>
                        <p>6、我行要求的其他条件。</p>
                        <h6>贷款额度</h6>
                        <p>最高可达500万元。</p>
                        <h6>担保要求</h6>
                        <p>信用担保。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default SJDLoan
