import React from 'react'
import './style.scss'

const ZKZYDLoan = ({data}) => {
    return (
        <div className="zkzyd-loan">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/company_banner_loan.jpg')} title={data.title || '金凤凰•账款质押贷'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '金凤凰•账款质押贷'}</h2>
                <div className="zkzyd-loan-main">
                    data.content ?
                    (
                    <div className="zkzyd-loan-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="zkzyd-loan-static">
                        {/*<p>“金凤凰•账款质押贷”是以应收账款的收益作为贷款偿还担保，并在登记部门办理登记手续后所发放的贷款。</p>*/}
                        {/*<h6>产品特点</h6>*/}
                        {/*<p>手续简便、无需抵押、流程快捷、还款灵活。</p>*/}
                        {/*<h6>适用对象</h6>*/}
                        {/*<p>从事合法经营并为大、中型企业提供一定的货物、服务或设施而获得的要求义务人付款的小微客户</p>*/}
                        {/*<h6>借款条件（共7条）</h6>*/}
                        {/*<p>1、企业经营相关证明；</p>*/}
                        {/*<p>2、借款人与应收账款债务人有两年以上的交易记录，且交易正常，能按期履约付款；</p>*/}
                        {/*<p>3、应收账款债务人，能按期履约付款；</p>*/}
                        {/*<p>4、在我行开立结算账户，并将此账户作为合同结算回款的唯一账户；</p>*/}
                        {/*<p>5、信誉良好，无违法、违约及重大不良信用记录；</p>*/}
                        {/*<p>6、企业现金流稳定，有充足的还款来源和良好的还款意愿；</p>*/}
                        {/*<p>7、我行规定的其他条件。</p>*/}
                        {/*<h6>贷款额度</h6>*/}
                        {/*<p>最高可达1000万元。</p>*/}
                        {/*<h6>担保要求</h6>*/}
                        {/*<p>凭相关合同履约金作质押方式。</p>*/}
                        <img src={require('../../../../static/images/zkzyd1.png')} alt="金凤凰•账款质押贷"/>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default ZKZYDLoan
