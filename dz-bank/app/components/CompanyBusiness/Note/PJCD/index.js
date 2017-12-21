import React from 'react'
import './style.scss'

const PJCD = ({data}) => {
    return (
        <div className="pjcd">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/company_banner_pj.jpg')} title={data.title || '商业汇票银行承兑业务'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '商业汇票银行承兑业务'}</h2>
                <div className="pjcd-main">
                    data.content ?
                    (
                    <div className="pjcd-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="pjcd-static">
                       <h6>品种定义</h6>
                        <p>商业汇票银行承兑业务是指由出票人签发并向我行提出承兑申请，经我行审查同意后，承诺由本行在汇票到期日对收款人或持票人无条件支付汇票金额的票据行为。</p>
                        <h6>适用对象</h6>
                        <p>银行承兑汇票业务申请人为在经办行开立存款账户并依法从事经营活动的企事业法人及其他经济组织。</p>
                        <h6>承兑用途</h6>
                        <p>主要用于真实贸易背景下供方与需方的支付结算。</p>
                        <h6>承兑额度</h6>
                        <p>银行承兑汇票的承兑金额在贸易合同交易金额内确定，纸质银行承兑汇票单张票面金额不超过三百万元，电子银行承兑汇票单张票面金额不超过贸易合同交易金额。</p>
                        <h6>承兑期限</h6>
                        <p>纸质银行承兑汇票最长期限不得超过6个月，电子银行承兑汇票最长期限不得超过12个月。</p>
                        <h6>承兑费率</h6>
                        <p>按票面金额的万分之五收取承兑手续费；</p>
                        <h6>承兑方式</h6>
                        <p>银行承兑汇票到期日前10个工作日，由我行客户经理通知客户提前备足票款用以备付，客户应于承兑到期前一个工作日将足额票款转至账上以备付款。</p>
                        <h6>承兑担保</h6>
                        <p>客户申请在我行办理银行承兑汇票业务，须按规定缴存保证金，并就承兑金额和保证金差额部分（即敞口部分）提供其他我行认可的担保方式。</p>
                        <h6>客户申请资料</h6>
                        <p>1.《承兑申请书》；</p>
                        <p>2.经有权部门核准登记并经年检的营业执照、组织机构代码证、税务登记证（统一社会信用代码）、法定代表人身份证、</p>
                        <p>3.经办人办理承兑业务的授权委托书；</p>
                        <p>4.交易双方签订的合法、有效的商品购销、劳务交易合同原件；</p>
                        <p>5.符合本行保证金额度要求的资金证明(保证金进帐单、资金余额证明)或担保资料；</p>
                        <p>6.按规定需提供担保的，出票人应提供相关担保资料。</p>
                        <h6>办理流程</h6>
                        <p>客户提出申请；</p>
                        <p>受理申请，客户经理进行调整；</p>
                        <p>行内审查审批；</p>
                        <p>落实担保办理承兑。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default PJCD
