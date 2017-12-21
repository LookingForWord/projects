import React from 'react'
import './style.scss'

const DFJK = ({data}) => {
    return (
        <div className="bank-card-dfjk">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/personal_banner_bank.jpg')} title={data.title || '丹凤金卡'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '丹凤金卡'}</h2>
                <div className="bank-card-dfjk-main">
                    data.content ?
                    (
                    <div className="bank-card-dfjk-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="bank-card-dfjk-static">
                        <h6>卡面展示</h6>
                        <img src={require('./images/dfjk.png')} alt="丹凤金卡"/>
                        <h6>申领条件</h6>
                        <p>达州银行贵宾卡根据客户综合金融资产评定设为金卡、白金卡及以上级别，客户可根据其在我行的个人金融资产规模申请。</p>
                        <h6>注意事项</h6>
                        <p>单一客户只能申办一张贵宾卡，以满足条件较高标准的为准。(若客户既满足金卡条件又满足白金卡条件，则只能办理白金卡 )。</p>
                        <p>若客户是金卡客户，经过一段时间后满足白金卡条件，那么客户要办理白金卡必须将原金卡销户，才能办理白金卡。</p>
                        <h6>功能介绍（6大功能）</h6>
                        <p>①直接消费功能：持卡人可在标有“银联”标识的商户刷卡消费，消费时需输入密码并签名确认。</p>
                        <p>②储蓄存款功能：达州银行丹凤金卡集定活期、多储种于一卡，具有完整的储蓄功能，卡上的各种存款视同储蓄存款，按人民银行规定的相应利率计息。</p>
                        <p>③通存通兑功能：持达州银行丹凤金卡可在工作时间内到达州银行任意网点办理存、取款业务，也可以24小时在自动柜员机上自动办理存取款业务。</p>
                        <p>④转账结算功能：持卡人可在我行任意网点办理转账汇款业务，也可通过ATM机、电子银行自助设备进行资金划转。持卡人可在贴有“银银平台”标识的合作银行网点办理转账业务。</p>
                        <p>⑤中间业务功能：可以灵活、方便地办理代发工资、代交水电费等其他代理业务。</p>
                        <p>⑥特约商户优惠服务：持卡可在达州银行签约的特约商户享受各种折扣等优惠服务。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default DFJK

