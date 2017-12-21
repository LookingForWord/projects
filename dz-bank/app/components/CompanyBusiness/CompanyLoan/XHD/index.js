import React from 'react'
import './style.scss'

const XHDLoan = ({data}) => {
    return (
        <div className="xhd-loan">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/company_banner_loan.jpg')} title={data.title || '金凤凰•循环贷'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '金凤凰•循环贷'}</h2>
                <div className="xhd-loan-main">
                    data.content ?
                    (
                    <div className="xhd-loan-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="xhd-loan-static">
                        <p>金凤凰•循环贷是为满足小微客户经营资金不足，保证经营活动正常进行的贷款业务。该产品在规定的期限和额度内，可以多次循环适用、随借随还等特点。</p>
                        <h6>产品特点</h6>
                        <p>循环用、手续简、放款快</p>
                        <h6>适用对象</h6>
                        <p>企业法人客户和个体工商户</p>
                        <h6>借款条件（共7条）</h6>
                        <p>1、有固定经营场所，经营管理制度完善、财务管理制度规范；</p>
                        <p>2、信誉良好，具备履行合同、偿还债务的能力；</p>
                        <p>3、无违法、违纪行为及不良信用记录；</p>
                        <p>4、具有持续经营能力，有合法的还款来源和按期还本付息的能力；</p>
                        <p>5、在我行开立结算账户；</p>
                        <p>6、能够提供我行认可的抵（质）押物；</p>
                        <p>7、我行规定的其他条件。</p>
                        <h6>贷款额度</h6>
                        <p>综合授信最高可达2000万元</p>
                        <h6>担保要求</h6>
                        <p>抵（质）押担保</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default XHDLoan
