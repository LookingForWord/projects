import React from 'react'
import './style.scss'

const FSHG = ({data}) => {
    return (
        <div className="fshg-financial">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../static/images/financial_banner_child.jpg')} title={data.title || '买入返售与卖出回购'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '买入返售与卖出回购'}</h2>
                <div className="fshg-financial-main">
                    data.content ?
                    (
                    <div className="fshg-financial-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="fshg-financial-static">
                        <h6>业务介绍</h6>
                        <p>银行承兑汇票转贴现业务。</p>
                        <h6>适用对象</h6>
                        <p>在我行有同业授信额度的商业银行。</p>
                        <h6>办理流程</h6>
                        <p>1、客户提交资料</p>
                        <p>2、行内审查审批</p>
                        <p>3、签订相关合同</p>
                        <p>4、票据查验</p>
                        <p>5、资金清算</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default FSHG
