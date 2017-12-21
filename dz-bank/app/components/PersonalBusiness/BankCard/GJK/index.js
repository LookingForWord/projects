import React from 'react'
import './style.scss'

const GJK = ({data}) => {
    return (
        <div className="bank-card-gjk">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/personal_banner_bank.jpg')} title={data.title || '公交卡'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '公交卡'}</h2>
                <div className="bank-card-gjk-main">
                    data.content ?
                    (
                    <div className="bank-card-gjk-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="bank-card-gjk-static">
                        <p>达州银行丹凤公交卡、公交学生卡和公交老年卡是我行加载公交行业应用而专门定制的金融IC卡。公交卡有两个账户，一个是金融账户（即普通银行借记卡存款账户，有密码保护，不能闪付），一个是电子现金账户，无需密码可实现快捷闪付。乘坐公交和出租等小额快速闪付使用的是电子现金，电子现金账户等同于个人钱包，不记名、不挂失、不计息。使用前需先向电子现金账户充值（即圈存操作），使电子现金账户中具备可消费金额，即可实现快速、不输密码、不签名的快捷支付。</p>
                        <h6>卡面展示</h6>
                        <img src={require('./images/gjk1.png')} alt="公交卡"/><br/>
                        <img src={require('./images/gjk2.png')} alt="公交卡"/><br/>
                        <img src={require('./images/gjk3.png')} alt="公交卡"/>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default GJK

