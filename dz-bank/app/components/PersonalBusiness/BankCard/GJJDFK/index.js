import React from 'react'
import './style.scss'

const GJJDFK = ({data}) => {
    return (
        <div className="bank-card-gjjdfk">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/personal_banner_bank.jpg')} title={data.title || '公积金丹凤卡'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '公积金丹凤卡'}</h2>
                <div className="bank-card-gjjdfk-main">
                    data.content ?
                    (
                    <div className="bank-card-gjjdfk-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="bank-card-gjjdfk-static">
                        <p>达州银行公积金丹凤卡是与达州市住房公积金管理中心联合发行的，除现有的丹凤借记卡基本功能外，此卡是公积金缴存人的有效凭证，具有信息查询功能、身份确认功能和提取转账功能。</p>
                        <h6>卡面展示</h6>
                        <img src={require('./images/gjjdfk.png')} title="公积金丹凤卡"/>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default GJJDFK

