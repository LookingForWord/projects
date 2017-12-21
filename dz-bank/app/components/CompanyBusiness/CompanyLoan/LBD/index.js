import React from 'react'
import './style.scss'

const LBDLoan = ({data}) => {
    return (
        <div className="lbd-loan">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/company_banner_loan.jpg')} title={data.title || '金凤凰•联保贷'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '金凤凰•联保贷'}</h2>
                <div className="lbd-loan-main">
                    data.content ?
                    (
                    <div className="lbd-loan-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="lbd-loan-static">
                        <p>“金凤凰•联保贷”是自愿组成联保小组的小微企业发放的，联保体成员之间协商确定向我行申请贷款额度，并为其他成员的全部债务（以此形式产生的）承担连带保证责任的联保体。</p>
                        <h6>产品特点</h6>
                        <p>多户联保、互相监督、责任连带、互助共赢</p>
                        <h6>适用对象</h6>
                        <p>合法经营的小微企业和个体工商户</p>
                        <h6>借款条件（共5条）</h6>
                        <p>1、小微企业应位于我行认可的大型专业市场、工业园区、特色产业集群所在地等特定区域内；</p>
                        <p>2、法人股东户籍均须在当地市级行政区域内，自然人户籍或房产须在当地市级行政区域内；</p>
                        <p>3、联保小组所有成员必须在我行开立结算账户，与贷款人签订同意从其账户中扣收贷款本息的协议；</p>
                        <p>4、无违法、违纪行为及重大不良信用记录；</p>
                        <p>5、我行要求的其他条件。</p>
                        <h6>贷款额度</h6>
                        <p>单户最高可达500万元</p>
                        <h6>担保要求</h6>
                        <p>联保小组成员相互承担连带保证责任</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default LBDLoan
