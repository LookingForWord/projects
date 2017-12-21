import React from 'react'
import './style.scss'

const InformDeposit = ({data}) => {
    return (
        <div className="inform-deposit">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/company_banner_deposit.jpg')} title={data.title || '单位通知存款'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '单位通知存款'}</h2>
                <div className="inform-deposit-main">
                    data.content ?
                    (
                    <div className="inform-deposit-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="inform-deposit-static">
                        <p>单位通知存款是指存款人在存入款时不约定存期，支取时需提前通知金融机构，约定支取日期和金额方能支取的存款。</p>
                        <h6>适用范围</h6>
                        <p>凡在我行开立人民币基本存款账户或一般账户的企业、事业、机关、部队、社会团体和个体经济户等单位。</p>
                        <h6>办理流程</h6>
                        <p>只要通过电话或书面通知开户行的公司存款部门，即可申请办理通知存款。</p>
                        <p>客户不需要约定存期，只在支取时事先通知存款银行。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default InformDeposit
