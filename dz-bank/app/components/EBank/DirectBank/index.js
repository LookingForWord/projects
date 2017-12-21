import React from 'react'
import './style.scss'

const DirectBank = ({data}) => {
    return (
        <div className="direct-e-bank">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../static/images/e_banner_child.jpg')} title={data.title || '直销银行'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '直销银行'}</h2>
                <div className="direct-e-bank-main">
                    data.content ?
                    (
                    <div className="direct-e-bank-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="direct-e-bank-static">
                        <h6>简介</h6>
                        <p>直销银行专注于为用户打造一站式的移动金融服务平台。客户不但可以随时随地享受安全丰富的金融服务，更可参与丰富精彩的营销活动。</p>
                        <h6>特色优势</h6>
                        <p>1、专业丰富的金融服务</p>
                        <p>直销银行将不断丰富金融产品线，满足客户多元化的财富管理需求。如智能定期、投资理财、创新贷款等；直销银行将不断融合日常营业网点提供的基本金融服务，如构建互联网核心完善账户管理功能。</p>
                        <p>2、多重可靠的安全保障</p>
                        <p>直销银行将不断完成安全保护措施确保客户的账户资金安全。包括采用数据传输加密、生物识别技术等，在此基础上为客户提供智能、安全的转账服务。</p>
                        <p>3、丰富多彩的营销活动</p>
                        <p>随着直销银行的推广，直销银行也将适时推出各类丰富多彩的活动，加强与客户互动。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default DirectBank
