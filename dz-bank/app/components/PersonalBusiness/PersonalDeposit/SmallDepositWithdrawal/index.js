import React from 'react'
import './style.scss'

const SmallDepositWithdrawal = ({data}) => {
    return (
        <div className="small-deposit-withdrawal">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/personal_banner_personal.jpg')} title={data.title || '零存整取'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '零存整取'}</h2>
                <div className="small-deposit-withdrawal-main">
                    data.content ?
                    (
                    <div className="small-deposit-withdrawal-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="small-deposit-withdrawal-static">
                        <div className="small-deposit-withdrawal-static-item overflow-top">
                           <p>开户起存金额为5元，存期分为三个月、六个月、一年、二年、三年、五年六个档次，存款金额由储户自定，每月存入一次，中途如有漏存，应在次月补齐，到期一次支取本息，到期支取时，按实存金额和实际存期计算利息。</p>
                            <h6>功能优势</h6>
                            <p>定期存入，积累性强。</p>
                            <h6>适用范围</h6>
                            <p>适用于定期来办理的小额自然人储户。</p>
                            <h6>办理指南</h6>
                            <p>1、可以去本地区网点柜台办理存、取款等业务。</p>
                            <p>2、可以登录个人网银办理存、取款等业务。</p>
                        </div>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default SmallDepositWithdrawal
