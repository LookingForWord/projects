import React from 'react'
import './style.scss'

const PJTX = ({data}) => {
    return (
        <div className="pjtx">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/company_banner_pj.jpg')} title={data.title || '银行承兑汇票贴现'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '银行承兑汇票贴现'}</h2>
                <div className="pjtx-main">
                    data.content ?
                    (
                    <div className="pjtx-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="pjtx-static">
                        <h6>品种定义</h6>
                        <p>银行承兑汇票贴现是指我行以完全背书形式购买持票人能证明其合法取得、具备真实贸易背景、尚未到期的银行承兑汇票的行为。</p>
                        <h6>适用对象</h6>
                        <p>持有合法有效的未到期银行承兑汇票且具有短期融资需求的企业法人及其他经济组织。</p>
                        <h6>贴现额度</h6>
                        <p>实付贴现金额按票面金额扣除贴现日至汇票到期前一日的利息计算。</p>
                        <h6>体现期限</h6>
                        <p>办理贴现的纸质银行承兑汇票，其期限不得超过六个月；电子银行承兑汇票，其期限不得超过一年。到期日遇法定公休、节假日，计息天数应加上实际顺延付款天数。</p>
                        <h6>体现利率</h6>
                        <p>银行承兑汇票贴现业务根据不同客户情况，实行差别利率。</p>
                        <h6>客户申请资料</h6>
                        <p>1.申请贴现的未到期银行承兑汇票；</p>
                        <p>2.通过年检的统一社会信用代码证，法定代表人身份证、经办人身份证；</p>
                        <p>3.持票人与其前手之间的商品交易合同原件及复印件，以及能够证明票据项下的交易确已履行的凭证，包括与其直接前手的增值税发票原件及复印件，或者其他能够证明银行承兑汇票合法持有的证明原件及复印件，复印件须加盖单位公章并注明与原件核对相符；</p>
                        <p>4.达州银行贴现申请书、达州银行贴现业务委托书；</p>
                        <p>5.我行要求提供的其他资料。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default PJTX
