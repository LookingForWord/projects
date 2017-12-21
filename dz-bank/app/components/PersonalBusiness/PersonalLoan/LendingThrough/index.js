import React from 'react'
import './style.scss'

const LendingThrough = ({data}) => {
    return (
        <div className="lending-through">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/personal_banner_child.jpg')} title={data.title || '金凤凰•借贷通'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '金凤凰•借贷通'}</h2>
                <div className="lending-through-main">
                    data.content ?
                    (
                    <div className="lending-through-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="lending-through-static">
                        <p>“金凤凰•借贷通”指我行面向自然人发放的金额较小、可循环使用的贷款，主要满足个人生产经营、消费等资金需求。</p>
                        <h6>适用对象</h6>
                        <p>公职人员、稳定收入人群。</p>
                        <h6>产品特点</h6>
                        <p>循环使用、随借随还。</p>
                        <h6>贷款范围</h6>
                        <p>具备本市常住户口或有效居住证明，有固定住所；有稳定的职业和经济收入，具备清偿贷款本息的能力；遵纪守法、资信良好，无违法乱纪记录及不良信用记录；在我行开立银行卡结算账户，同意并授权从其账户中扣收本息；我行规定的其他条件。</p>
                        <h6>贷款额度</h6>
                        <p>最高100万元。</p>
                        <h6>担保方式</h6>
                        <p>信用、企业或自然人保证。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default LendingThrough
