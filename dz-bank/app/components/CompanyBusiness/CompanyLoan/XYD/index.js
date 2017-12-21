import React from 'react'
import './style.scss'

const XYDLoan = ({data}) => {
    return (
        <div className="xyd-loan">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/company_banner_loan.jpg')} title={data.title || '金凤凰•信用贷'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '金凤凰•信用贷'}</h2>
                <div className="xyd-loan-main">
                    data.content ?
                    (
                    <div className="xyd-loan-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="xyd-loan-static">
                        <p>“金凤凰•信用贷”是指我行对个体工商户和小微企业法人以信用担保方式发放的人民币授信业务。</p>
                        <h6>产品特点</h6>
                        <p>信用担保、方便快捷</p>
                        <h6>适用对象</h6>
                        <p>合法经营的小微企业和个体工商户</p>
                        <h6>借款条件（共5条）</h6>
                        <p>1、有4年（含）以上本行业经营经验，在本地有固定的经营场所并连续经营2年（含）以上；</p>
                        <p>2、经营情况良好且持续，具有稳定的商业模式和收入来源；</p>
                        <p>3、具有一定资产实力的个体工商户和小型企业主；无违法、违纪行为及重大不良信用记录；</p>
                        <p>4、在我行开立结算账户；</p>
                        <p>5、我行要求的其他条件。</p>
                        <h6>贷款额度</h6>
                        <p>最高可达200万元</p>
                        <h6>担保要求</h6>
                        <p>信用借款、无需担保、无需抵押</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default XYDLoan
