import React from 'react'
import './style.scss'

const MicroBank = ({data}) => {
    return (
        <div className="micro-e-bank">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../static/images/e_banner_child.jpg')} title={data.title || '微信银行'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '微信银行'}</h2>
                <div className="micro-e-bank-main">
                    data.content ?
                    (
                    <div className="micro-e-bank-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="micro-e-bank-static">
                        <h6>简介</h6>
                        <p>
                            微信银行是指通过腾讯微信企业公众账号，为银行客户和微信用户打造的专属移动金融和移动生活服务平台，既具有账户查询、理财、缴费等移动金融功能，又能满足客户最新优惠资讯获取、特惠商户查询、荟生活平台等便民实惠服务，指尖微微一动，贴心移动金融和移动生活随时畅享。</p>
                        <p>目前我行已开通微信服务号“达州银行”，扫描下方二维码，敬请持续关注！</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default MicroBank
