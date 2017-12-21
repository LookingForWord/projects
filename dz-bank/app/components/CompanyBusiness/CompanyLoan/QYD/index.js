import React from 'react'
import './style.scss'

const QYDLoan = ({data}) => {
    return (
        <div className="qyd-loan">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/company_banner_loan.jpg')} title={data.title || '金凤凰•企业贷'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '金凤凰•企业贷'}</h2>
                <div className="qyd-loan-main">
                    data.content ?
                    (
                    <div className="qyd-loan-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="qyd-loan-static">
                        <p>“金凤凰•企业贷”是指我行对小微企业法人类客户发放的用于满足在生产经营过程中而产生临时性、季节性资金需求或满足生产经营过程中长期平均占用的流动资金需求的人民币贷款。</p>
                        <h6>产品特点</h6>
                        <p>手续简便、周转性强</p>
                        <h6>适用对象</h6>
                        <p>适用于有中、短期资金需求的法人客户</p>
                        <h6>借款条件（共7条）</h6>
                        <p>1、有固定经营场所，经营管理制度完善、财务管理制度规范；</p>
                        <p>2、具备履行合同、偿还债务的能力；</p>
                        <p>3、无违法、违纪行为及重大不良信用记录；</p>
                        <p>4、能具有持续经营能力，有合法的还款来源和按期还本付息的能力；</p>
                        <p>5、在我行开立结算账户；</p>
                        <p>6、自有流动资金不低于所需营运资金量的10%；</p>
                        <p>7、我行要求的其他条件。</p>
                        <h6>贷款额度</h6>
                        <p>综合授信最高可达2000万元</p>
                        <h6>担保要求</h6>
                        <p>保证担保、抵（质）押担保</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default QYDLoan
