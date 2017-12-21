import React from 'react'
import './style.scss'

const AutomobileLoan = ({data}) => {
    return (
        <div className="automobile-loan">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/personal_banner_child.jpg')} title={data.title || '金凤凰•个人汽车消费贷款'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '金凤凰•个人汽车消费贷款'}</h2>
                <div className="automobile-loan-main">
                    data.content ?
                    (
                    <div className="automobile-loan-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="automobile-loan-static">
                        <p>汽车按揭贷款是向借款人发放的用于购买家用轿车及经营性车辆，并以所购车辆作抵押、通过担保公司担保，分期归还贷款本息的消费贷款。</p>
                        <h6>适用对象：</h6>
                        <p>经依法登记注册、并在我行开立存款帐户、无不良信用记录，具有偿还能力的法人和年龄在18岁－57岁以内的自然人。</p>
                        <h6>贷款期限</h6>
                        <p>汽车消费贷款的期限最长不超过3年(含3年) 。</p>
                        <h6>贷款范围</h6>
                        <p>自用型轿车、出租车、客运车辆、货运车、特种车。</p>
                        <h6>贷款额度</h6>
                        <p>自用轿车及营运车辆贷款额度控制在所购车辆总价款的70%以内；工程机械车辆贷款额度控制在所购车辆总价款的50%，且单笔按揭贷款总额不超过50万元人民币。</p>
                        <h6>还款方式</h6>
                        <p>采用按月等额本息还款法。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default AutomobileLoan
