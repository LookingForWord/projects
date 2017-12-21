import React from 'react'
import './style.scss'

const CCTLoan = ({data}) => {
    return (
        <div className="cct-loan">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/company_banner_loan.jpg')} title={data.title || '金凤凰•仓储通'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '金凤凰•仓储通'}</h2>
                <div className="cct-loan-main">
                    data.content ?
                    (
                    <div className="cct-loan-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="cct-loan-static">
                        <p>“金凤凰·仓储通”是指基于我行委托第三方物流监管企业对借款人或担保人合法拥有的储备物、存货或交易应收的商品等进行监管，以商品价值作为首要还款保障为借款人提供的短期融资业务</p>
                        <h6>产品特点</h6>
                        <p>担保灵活、手续简便、放款快捷</p>
                        <h6>适用对象</h6>
                        <p>企业法人客户和个体工商户</p>
                        <h6>借款条件（共5条）</h6>
                        <p>1、成立两年以上且近两年连续盈利；</p>
                        <p>2、有稳定现金流，具备按期偿还贷款本息的能力；</p>
                        <p>3、在经办机构开立结算账户，信用记录良好，具有按时还本付息的意愿和相应的能力；</p>
                        <p>4、监管方具备相关监管资质，具备仓储监管服务能力和偿付能力，并评选入围为我行的合作监管方；</p>
                        <p>5、我行要求的其它条件。</p>
                        <h6>贷款额度</h6>
                        <p>最高可达1000万元。</p>
                        <h6>担保要求</h6>
                        <p>储备物、存货或商品质押。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default CCTLoan
