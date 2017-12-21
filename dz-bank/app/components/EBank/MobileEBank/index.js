import React from 'react'
import './style.scss'

const MobileEBank = ({data}) => {
    return (
        <div className="mobile-e-bank">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../static/images/e_banner_child.jpg')} title={data.title || '手机银行'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '手机银行'}</h2>
                <div className="mobile-e-bank-main">
                    data.content ?
                    (
                    <div className="mobile-e-bank-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="mobile-e-bank-static">
                        <h6>简介</h6>
                        <p>达州银行手机银行是为智能手机和移动终端用户量身打造的手机金融服务平台，创建“常用功能”、“个人银行”、“我的惠银”、“更多服务”等金融服务专区，为您提供丰富实用的金融服务。</p>
                        <h6>特色优势</h6>
                        <p>1、个性易用的功能布局、全新流畅的使用体验，助您移动金融和移动生活更时尚精彩，让您充分享受移动生活的乐趣。</p>
                        <p>2、在安全方面，采用数据全程加密、密码超限保护、登录超时控制等机制，并通过用户信息绑定、短信验证等多种安全措施，为您的资金交易保驾护航。</p>
                        <p>3、金融服务丰富，为您提供账户查询、账户管理、行内转账、跨行转账、本人账户互转、活期转定期、定期转活期、通知存款开立、通知存款支取、昵称设置、意见反馈等丰富的移动金融服务。</p>
                        <h6>开办条件</h6>
                        <p>1、已在达州银行开立借记卡，信誉良好的客户。</p>
                        <p>2、持有通信运营商（中国移动、中国联通、中国电信）提供号码的手机。</p>
                        <p>3、手机银行客户端系列移动终端为iPhone或Android智能手机。</p>
                        <h6>开通渠道</h6>
                        <p>在营业网点开通，客户本人须携带有效身份证件和账户凭证原件（借记卡或存折），签署《个人账户开户及综合服务申请表》，填写准确的手机号码，设定登录密码，开通基于客户端的手机银行服务。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default MobileEBank
