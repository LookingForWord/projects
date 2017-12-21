import React from 'react'
import './style.scss'

const Intro = ({data}) => {
    return (
        <div className="company-intro">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/about_banner_gk.jpg')} title={data.title || '达行简介'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '达行简介'}</h2>
                <div className="template-body-main">
                    {
                        data.content ?
                            (<div className="company-intro-dynamic" dangerouslySetInnerHTML={{__html:data.content}}/>):
                            (<div className="company-intro-static">
                                <p>达州银行成立于2009年12月18日，是达州市唯一一家地方一级法人的城市商业银行，全行下设30家分支机构，分布于通川区、达川区及宣汉县、开江县、大竹县、渠县、万源市，是达州唯一实现全市县（区）网点全覆盖的金融机构，首家异地支行巴中支行定于2017年内开业。</p>
                                <div className="img2-container clear-fix"><img src={require('../../../../static/images/dhjj_img2.jpg')} title="达行简介"/></div>
                                <p>自成立以来，达州银行始终秉承诚信、创新、开拓、自强的企业品格，按照“坚持服务区域不懈怠、坚持创新发展不停步”的基本思路，鼎力支持区域经济发展。截至2016年末，全行资产总额546亿元，各项存款274亿元，资本金30亿元，资本充足率22.63%。2016年缴纳各项税金2.11亿元，自2012年起连续五年成为达州市“十大纳税企业”之一。</p>
                                <div className="img1-container clear-fix"><img src={require('../../../../static/images/dhjj_img1.jpg')} title="达行简介"/></div>
                                <p>达州银行将积极稳妥推进银行业务发展，实现跨区域发展布局，夯实传统金融服务，聚焦互联网金融业务，提升区域竞争力，向创新银行、特色银行发展，努力打造西部地区一流的特色商业银行。</p>
                            </div>)
                    }
                </div>
                {/*<div className="intro-footer clear-fix">*/}
                    {/*<span className="float-left">24小时客服电话：{data.phone || '（028）962559'}</span>*/}
                    {/*<span className="float-right">官方微信：{data.wx || '达州银行股份有限公司（DCCB962559）'}</span>*/}
                    {/*<span>总行地址：{data.address || '达州市通川区朝阳东路58号'}</span>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Intro
