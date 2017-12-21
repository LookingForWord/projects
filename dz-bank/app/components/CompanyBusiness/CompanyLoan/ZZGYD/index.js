import React from 'react'
import './style.scss'

const ZZGYDLoan = ({data}) => {
    return (
        <div className="zzgyd-loan">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/company_banner_loan.jpg')} title={data.title || '金凤凰•制造供应贷'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '金凤凰•制造供应贷'}</h2>
                <div className="zzgyd-loan-main">
                    data.content ?
                    (
                    <div className="zzgyd-loan-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="zzgyd-loan-static">
                        <p>金凤凰·制造供应贷是用于借款人履行与优质大、中型企业或事业单位及国家机关所签订订单、合同的贷款</p>
                        <h6>产品特点</h6>
                        <p>重信用、轻担保、还款灵活、再贷优惠</p>
                        <h6>适用对象</h6>
                        <p>大、中型企业的供货商、与事业单位或国家机关签订购货合同的小微客户</p>
                        <h6>借款条件（共5条）</h6>
                        <p>1、企业经营相关证明；与优质购货方合作在1年以上（含）；</p>
                        <p>2、在我行开立结算账户，并将此账户作为合同结算回款的唯一账户；</p>
                        <p>3、信誉良好，无违法、违约及重大不良信用记录；</p>
                        <p>4、企业现金流稳定，有充足的还款来源和良好的还款意愿；</p>
                        <p>5、我行规定的其他条件。</p>
                        <h6>贷款额度</h6>
                        <p>单户最高可达1000万元</p>
                        <h6>担保要求</h6>
                        <p>担保灵活、无需抵押</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default ZZGYDLoan
