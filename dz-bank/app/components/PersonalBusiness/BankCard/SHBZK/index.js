import React from 'react'
import './style.scss'

const SHBZK = ({data}) => {
    return (
        <div className="bank-card-shbzk">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/personal_banner_bank.jpg')} title={data.title || '社会保障卡'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '社会保障卡'}</h2>
                <div className="bank-card-shbzk-main">
                    data.content ?
                    (
                    <div className="bank-card-shbzk-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="bank-card-shbzk-static">
                        <p>达州银行发行的社会保障卡是达州银行与市人社局联合发行，印有达州银行标识及市人社局字样，集医保、社保、工伤、生育、失业五险合一和银行卡功能为一体的芯片卡，既可以实现原社会保障卡的所有功能，又可以满足金融交易需求。</p>
                        <h6>功能介绍（5大功能）</h6>
                        <p>①身份凭证功能：参保登记、缴费申报、社会保险关系转移接续、医疗费用报销、待遇领取资格认证等人力资源和社会保障业务的身份凭证。</p>
                        <p>②查询个人信息功能：凭社会保障卡在人力资源社会保障服务机构或合作金融机构的服务网点上查询持卡人个人信息。</p>
                        <p>③医疗费用结算功能：凭社会保障卡在本市医疗保险定点药店购药；持卡人在定点医院机构就医的医疗费用即时结算。</p>
                        <p>④社会保险费缴纳功能：逐步实现通过金融机构代扣方式，利用持卡人社会保障卡的金融账户缴纳社会保险费。</p>
                        <p>⑤发放社会保险待遇功能：逐步实现持卡人依法享受的社会保险待遇直接划入社会保障卡的金融账户。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default SHBZK

