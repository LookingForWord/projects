import React from 'react'
import './style.scss'

const InformDeposit = ({data}) => {
    return (
        <div className="inform-deposit">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/personal_banner_personal.jpg')} title={data.title || '个人通知存款'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '个人通知存款'}</h2>
                <div className="inform-deposit-main">
                    data.content ?
                    (
                    <div className="inform-deposit-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="inform-deposit-static">
                        <div className="inform-deposit-static-item overflow-top">
                           <p>5万元起存,一次性存入可以分次支取。必须凭本人的有效实名证件开户。若开户时选择凭密码支取。支取前，由储户确定取款时提前一天通知或提前七天通知。储户每次取款应不少于五万元。储户通知后若按约支取，则按通知存款一天或七天利率档次计息。</p>
                            <h6>功能优势</h6>
                            <p>较为灵活方便、收益高于活期。</p>
                            <h6>适用范围</h6>
                            <p>适合那些近期要支用大额活期存款但又不知支用的确切日期的自然人储户。</p>
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

export default InformDeposit
