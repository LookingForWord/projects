import React from 'react'
import './style.scss'

const GuaranteeLoan = ({data}) => {
    return (
        <div className="guarantee-loan">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/personal_banner_child.jpg')} title={data.title || '金凤凰•小额担保贷款'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '金凤凰•小额担保贷款'}</h2>
                <div className="guarantee-loan-main">
                    data.content ?
                    (
                    <div className="guarantee-loan-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="guarantee-loan-static">
                        <h6>适用对象</h6>
                        <p>具有达州市户籍，年龄在60岁以内（借款人年龄＋贷款期限女性≤55岁、男性≤60岁），持《再就业优惠证》的下岗失业人员、城镇登记失业人员、办理了自谋职业手续的城镇复员转业退役军人、高校毕业生、有创业愿望和创业能力的城镇劳动者和进城创业的农村劳动者以及其他符合条件的就业困难人员。</p>
                        <h6>产品特点</h6>
                        <p>借款人无需付息，在担保期间的利息由财政全额贴息。</p>
                        <h6>贷款期限</h6>
                        <p>贷款期限最长不超过两年。</p>
                        <h6>贷款范围</h6>
                        <p>无需提供抵押，需持《再就业优惠证》、退伍证、高校毕业证等有效证件，并提供反担保人。</p>
                        <h6>贷款额度</h6>
                        <p>贷款金额5－10万元。</p>
                        <h6>还款方式</h6>
                        <p>分期或一次性归还贷款本金</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default GuaranteeLoan
