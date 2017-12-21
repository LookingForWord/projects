import React from 'react'
import './style.scss'

const WholeDepositWithdrawal = ({data}) => {
    return (
        <div className="whole-deposit-withdrawal">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/personal_banner_personal.jpg')} title={data.title || '整存整取'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '整存整取'}</h2>
                <div className="whole-deposit-withdrawal-main">
                    data.content ?
                    (
                    <div className="whole-deposit-withdrawal-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="whole-deposit-withdrawal-static">
                        <div className="whole-deposit-withdrawal-static-item overflow-top">
                            <p>一般五十元起存，人民币存期分三个月、半年、一年、二年、三年、和五年；外币存期为一个月、三个月、半年、一年、二年，本金一次存入。可以存单、定期一本通及借记卡三种形式存入。外币储蓄存款的币种为美元、港币等各外币币种，可办理部分提前支取一次，存款到期，凭存单支取本息，也可按原存期自动转存多次。定期储蓄到期支取按存单开户日存款利率计付利息，提前支取按支取日活期储蓄存款利率计息，逾期支取，逾期部分按支取日活期存款利率计息。</p>
                            <h6>功能优势</h6>
                            <p>定期存款利息较高。</p>
                            <h6>适用范围</h6>
                            <p>适用于较长时间不需动用款项的自然人储户。</p>
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

export default WholeDepositWithdrawal
