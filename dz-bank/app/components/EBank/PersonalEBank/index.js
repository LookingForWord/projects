import React from 'react'
import './style.scss'

const PersonalEBank = ({data}) => {
    return (
        <div className="personal-e-bank">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../static/images/e_banner_child.jpg')} title={data.title || '个人网银'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '个人网银'}</h2>
                <div className="personal-e-bank-main">
                    data.content ?
                    (
                    <div className="personal-e-bank-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="personal-e-bank-static">
                        <h6>简介</h6>
                        <p>个人网上银行（https://www.dzccb.com.cn ）是通过互联网向个人客户提供了一个交易平台和服务渠道。客户通过网上银行可进行“自助注册与登录” 、管理“我的账户” 、设置“个人信息”实现“转账汇款”、“基础理财”、“账户挂失”等功能，能够满足不同层次客户的各种金融服务需求，并可为您提供高度安全、高度个性化的服务。</p>
                        <h6>特色优势</h6>
                        <p>1. 安全可靠：采取严密的标准数字证书体系，通过国家安全认证。</p>
                        <p>2. 功能强大：多账户管理，方便您和您的家庭理财；丰富的理财功能，成为您的得力助手。</p>
                        <p>3. 方便快捷：24小时网上服务，跨越时空，省时省力；账务管理一目了然，所有交易明细尽收眼底；同城转账、异地汇款，资金调拨方便快捷；网上支付快捷便利。</p>
                        <p>4. 信息丰富：可提供银行利率、资费标准等信息的查询，配备详细的功能介绍、操作指南，帮助您了解系统各项功能。</p>
                        <h6>适用对象</h6>
                        <p>凡在达州市商业银行开立丹凤卡、活期存折等账户且信誉良好的个人客户，均可申请成为个人网上银行注册客户。</p>
                        <h6>开办条件</h6>
                        <p>您需提供本人有效身份证件和所需注册的丹凤卡或存折。</p>
                        <h6>注意事项</h6>
                        <p>1. 注册时使用的证件类型和号码必须与您申领该卡时所使用的证件一致。 </p>
                        <p>2. 为保障您的资金安全，转账功能须到柜面开通。 </p>
                        <p>3. 自助注册时同一客户只允许注册一次，只能注册一张卡。 </p>
                        <p>4. 修改密码时，您的新密码长度必须大于等于6位字符，小于等于12位字符，须设置为字母与数字的组合，并注意区分大小写。</p>
                        <h6>风险提示</h6>
                        <p>1. 您每次使用网上银行后，请点击页面右上角的“安全退出”结束使用，并拨出U盾妥善保管。</p>
                        <p>2. 请您网上购物进行支付时，不要开启操作系统、MSN和QQ等工具的远程协助功能，一定要在核对支付金额和订单金额无误后再确认支付。</p>
                        <p>3. 请您在登录网上银行和进行网上支付时，要注意防范假冒我行网站的欺诈。</p>
                        <p>4. 如果您使用“U盾+短信认证” 的业务模式，请在交易过程中认真核对短信发送编号、收方账号和交易金额等信息是否与正在进行的交易事项一致。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default PersonalEBank
