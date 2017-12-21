import React from 'react'
import './style.scss'

const DFPK = ({data}) => {
    return (
        <div className="bank-card-dfpk">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/personal_banner_bank.jpg')} title={data.title || '丹凤普卡'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '丹凤普卡'}</h2>
                <div className="bank-card-dfpk-main">
                    data.content ?
                    (
                    <div className="bank-card-dfpk-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="bank-card-dfpk-static">
                        <p>
                            达州银行丹凤借记卡是由达州银行发行的带有“银联”标识的IC卡，是以人民币结算的金融支付工具。可在我行任意营业网点、手机银行、网上银行、自动柜员机等自助设备、发卡机构认可的其他金融机构的营业网点和贴有中国银联标识的商户使用。</p>
                        <h6>卡面展示</h6>
                        <img src={require('./images/dfpk.png')} alt="丹凤普卡"/>
                        <h6>卡面属性</h6>
                        <p>达州银行丹凤借记卡为磁条芯片复合卡，支持接触式和非接触式读取方式，即为单标识双介质卡。</p>
                        <h6>贷款额度</h6>
                        <p>最高可达100万元。</p>
                        <h6>注意事项</h6>
                        <p>达州银行丹凤借记卡分为主账户和电子现金账户。</p>
                        <p>主账户内存款金额不限，可随时续存，并按照中国人民银行规定的相应存款利率及计息办法计付利息，持卡人可凭卡和密码办理业务；</p>
                        <p>电子现金账户余额上限为1000元（含），不计付利息、不记名、不挂失、不止付、不设置密码。</p>
                        <p>达州银行丹凤借记卡有效期最长为八年，有效期以卡面指定日期为准。</p>
                        <h6>功能介绍（5大功能）</h6>
                        <p>①直接消费功能：丹凤借记卡最基本功能，持卡人可在带有“银联”标识的商户商户持卡消费。</p>
                        <p>②储蓄存款功能：丹凤借记卡集定活期、多储种于一卡，具有完善的储蓄功能，丹凤借记卡上的各种存款视同储蓄存款，按人民银行规定的相应利率计息。</p>
                        <p>③通存通兑功能：持卡人可在工作时间内至我行任意网点办理存取款业务，也可7*24小时在ATM自助设备办理存款业务。 持卡人可在开通“银银平台”业务的联网机构办理存取款业务。</p>
                        <p>④转账结算功能：持卡人可在我行任意网点办理转账汇款业务，也可通过ATM机、电子银行自助设备进行资金划转。 持卡人可在开通“银银平台”业务的联网机构办理转账业务。</p>
                        <p>⑤中间业务功能：可以灵活、方便地办理代发工资、代交水电费等其他代理业务。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default DFPK
