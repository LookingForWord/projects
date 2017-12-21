import React from 'react'
import './style.scss'

const THYW = ({data}) => {
    return (
        <div className="thyw-financial">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../static/images/financial_banner_child.jpg')} title={data.title || '同业业务'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '同业业务'}</h2>
                <div className="thyw-financial-main">
                    data.content ?
                    (
                    <div className="thyw-financial-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="thyw-financial-static">
                        <h6>业务介绍</h6>
                        <p>1、同业存放：同业客户可在本行开立同业账户后存入资金，本行可为客户提供安全，快捷的存取款业务。 </p>
                        <p>2、同业拆借：同业拆借是指经中国人民银行批准，进入全国银行间同业拆借市场的金融机构之间通过全国统一的同业拆借网络进行的无担保资金融通行为。同业拆借交易应当遵循中国人民银行《同业拆借管理办法》及本办法相关规定。</p>
                        <h6>适用对象</h6>
                        <p>1、所有同业机构。</p>
                        <p>2、加入了《同业拆借市场》具有拆借资格金融机构</p>
                        <h6>办理流程</h6>
                        <p>按照《达州银行同业存款管理办法》、《达州银行同业拆借管理办法》执行</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default THYW
