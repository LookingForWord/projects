import React from 'react'
import './style.scss'

const FixedDeposit = ({data}) => {
    return (
        <div className="fixed-deposit">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/company_banner_deposit.jpg')} title={data.title || '单位定期存款'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '单位定期存款'}</h2>
                <div className="fixed-deposit-main">
                    data.content ?
                    (
                    <div className="fixed-deposit-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="fixed-deposit-static">
                        <p>定期存款是银行与存款人双方在存款时事先约定期限、利率，到期后支取本息的存款。定期存款用于结算或从定期存款账户中提取现金。客户若临时需要资金可办理提前支取或部分提前支取。人民币起存金额1万元。</p>
                        <h6>适用范围</h6>
                        <p>凡在我行开立人民币基本存款账户或一般账户的企业、事业、机关、部队、社会团体和个体经济户等单位。</p>
                        <h6>办理流程</h6>
                        <p>各支行、营业部均可办理公司客户的定期存款业务。其具体办理程序和要求同活期存款。定期存款存入方式可以是现金存入、转账存入或同城提出代付。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default FixedDeposit
