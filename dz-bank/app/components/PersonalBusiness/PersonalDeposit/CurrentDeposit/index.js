import React from 'react'
import './style.scss'

const CurrentDeposit = ({data}) => {
    return (
        <div className="current-deposit">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/personal_banner_personal.jpg')} title={data.title || '活期存款'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '活期存款'}</h2>
                <div className="current-deposit-main">
                    data.content ?
                    (
                    <div className="current-deposit-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="current-deposit-static">
                        <div className="current-deposit-static-item overflow-top">
                            <p>一元起存，由储蓄机构发给卡、存折，凭卡、折存取，开户后可以随时存取。</p>
                            <h6>功能优势</h6>
                            <p>随时存取、灵活方便。</p>
                            <h6>适用范围</h6>
                            <p>适合用于普通生活的日常开支的自然人客户。</p>
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

export default CurrentDeposit
