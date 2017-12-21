import React from 'react'
import './style.scss'

const CurrentDeposit = ({data}) => {
    return (
        <div className="current-deposit">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/company_banner_deposit.jpg')} title={data.title || '单位活期存款'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '单位活期存款'}</h2>
                <div className="current-deposit-main">
                    data.content ?
                    (
                    <div className="current-deposit-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="current-deposit-static">
                        <p>单位活期存款是一种随时可以存取、按结息期计算利息的存款，其存取主要通过现金或转账办理。活期存款账户分为基本存款账户、一般存款账户、临时存款账户和专用存款账户。这种存款的特点是不固定期限，客户存取方便，随时可以支取。</p>
                        <h6>适用范围</h6>
                        <p>凡在我行开立人民币基本存款账户或一般账户的企业、事业、机关、部队、社会团体和个体经济户等单位。</p>
                        <h6>办理流程</h6>
                        <p>各支行、营业部均可办理公司客户的活期存款业务。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default CurrentDeposit
