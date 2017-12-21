import React from 'react'
import './style.scss'

const AgreementDeposit = ({data}) => {
    return (
        <div className="agreement-deposit">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/company_banner_deposit.jpg')} title={data.title || '单位协定存款'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '单位协定存款'}</h2>
                <div className="agreement-deposit-main">
                    data.content ?
                    (
                    <div className="agreement-deposit-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="agreement-deposit-static">
                        <p>协定存款是指客户通过与银行签订《协定存款合同》，约定期限、商定结算账户需要保留的基本存款额度，由银行对基本存款额度内的存款按结息日或支取日活期存款利率计息，超过基本存款额度的部分按结息日或支取日人行公布的高于活期存款利率、低于六个月定期存款利率的协定存款利率给付利息的一种存款。</p>
                        <h6>适用范围</h6>
                        <p>凡申请在我行开立协定存款账户的单位，须同时开立基本存款账户或一般存款账户（以下简称“结算户”），用于正常经济活动的会计核算，该账户称为A户，同时电脑自动生成协定存款账户（以下简称B户）。如单位已有结算账户，则将原有的结算账户作为A户，为其办理协定存款手续。</p>
                        <h6>办理流程</h6>
                        <p>我行可与客户签订单位协定存款合同，在结算账户之上开立协定存款账户，并约定结算账户的额度，由银行将结算账户中超额度的部分转入协定存款账户，单独按照协定存款利率计息。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default AgreementDeposit
