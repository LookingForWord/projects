import React from 'react'
import './style.scss'

const JYDLoan = ({data}) => {
    return (
        <div className="jyd-loan">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/company_banner_loan.jpg')} title={data.title || '金凤凰•经营贷'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '金凤凰•经营贷'}</h2>
                <div className="jyd-loan-main">
                    data.content ?
                    (
                    <div className="jyd-loan-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="jyd-loan-static">
                        <p>“金凤凰•经营贷”是我行对自然人客户因生产经营所需资金而发放的人民币贷款。包括用于生产经营流动性资金需求、租赁商铺、购置机械设备及其他合理信贷资金需求为用途的贷款业务。</p>
                        <h6>产品特点</h6>
                        <p>用途广、担保活、手续简、放款快</p>
                        <h6>适用对象</h6>
                        <p>企业法人客户和个体工商户</p>
                        <h6>借款条件（共6条）</h6>
                        <p>1、拥有自由经营实体，持有合法有效的营业执照或其他证明其合法经营的手续；</p>
                        <p>2、有固定的经营场所，贷款用途明确、合法；</p>
                        <p>3、无违法、违纪行为及不良信用记录；</p>
                        <p>4、具有持续经营能力，有合法的还款来源和按期还本付息的能力；</p>
                        <p>5、在我行开立结算账户；</p>
                        <p>6、我行规定的其他条件。</p>
                        <h6>贷款额度</h6>
                        <p>综合授信最高可达1000万元</p>
                        <h6>担保要求</h6>
                        <p>保证担保、抵（质）押担保</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default JYDLoan
