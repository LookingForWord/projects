import React from 'react'
import './style.scss'

const XEXYDLoan = ({data}) => {
    return (
        <div className="xexyd-loan">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/company_banner_loan.jpg')} title={data.title || '金凤凰•1+N小额信用贷'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '金凤凰•1+N小额信用贷'}</h2>
                <div className="xexyd-loan-main">
                    data.content ?
                    (
                    <div className="xexyd-loan-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="xexyd-loan-static">
                        <p>“金凤凰·1+N小额信用贷”是指向某一龙头或核心企业（或组织）为依托，围绕在这一企业（或组织）周边，并与这一企业（或组织）有着紧密联系的中小客户群体提供的批量审批、单户放款、</p>
                        <h6>产品特点</h6>
                        <p>批量融资、覆盖面广、集中放款、多方共赢</p>
                        <h6>适用对象</h6>
                        <p>与“核心企业（或组织）”有紧密联系的小微客户。</p>
                        <h6>借款条件（共6条）</h6>
                        <p>1、申请人有效身份证明；</p>
                        <p>2、借款人经营相关证明；</p>
                        <p>3、市场（包含商场、超市等）出租率达到70%以上，行业组织成立时间在1年以上；</p>
                        <p>4、信誉良好，无违法、违约行为及重大不良信用记录；</p>
                        <p>5、借款人现金流稳定，有充足的还款来源和良好的还款意愿；</p>
                        <p>6、我行规定的其他条件。</p>
                        <h6>贷款额度</h6>
                        <p>单户最高可达500万元。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default XEXYDLoan
