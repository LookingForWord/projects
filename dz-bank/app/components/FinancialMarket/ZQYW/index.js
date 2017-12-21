import React from 'react'
import './style.scss'

const ZQYW = ({data}) => {
    return (
        <div className="zqyw-financial">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../static/images/financial_banner_child.jpg')} title={data.title || '债券业务'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '债券业务'}</h2>
                <div className="zqyw-financial-main">
                    data.content ?
                    (
                    <div className="zqyw-financial-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="zqyw-financial-static">
                        <h6>业务介绍</h6>
                        <p>1、一级市场投标：我行可在一级市场或者二级市场购买债券，一级市场购买签订《债券分销协议》。 </p>
                        <p>2、债券正回购：临时需要资金时我行可通过《中国银行间本币交易系统》进行债券质押向同业机构借低成本的资金。 </p>
                        <p>3、债券逆回购：我行临时多余资金时，为提高闲置资金有更好的收益，可通过《中国银行间本币交易系统》质押给需要资金的同业机构。</p>
                        <h6>适用对象</h6>
                        <p>1、具有债券发行分销债券。</p>
                        <p>2、加入了《中国外汇交易中心》具有交易资格的金融机构。</p>
                        <h6>办理流程</h6>
                        <p>按照《达州银行债券投资业务管理办法》执行。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default ZQYW
