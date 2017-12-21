import React from 'react'
import './style.scss'

const EntrepreneurLoan = ({data}) => {
    return (
        <div className="entrepreneur-loan">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/personal_banner_child.jpg')} title={data.title || '金凤凰•创业贷'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '金凤凰•创业贷'}</h2>
                <div className="entrepreneur-loan-main">
                    data.content ?
                    (
                    <div className="entrepreneur-loan-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="entrepreneur-loan-static">
                        <p>“金凤凰·创业贷”是指我行对中小微企业及大学毕业回达州创业的大学生发放的流动资金周转贷款。</p>
                        <h6>适用对象</h6>
                        <p>达州市辖区内的中小微企业、大学毕业后回达州创业的大学生。</p>
                        <h6>产品特点</h6>
                        <p>利率低、无抵押、放款快。</p>
                        <h6>贷款范围</h6>
                        <p>借款人需提供符合条件的担保人；企业不得有欠缴税费、逃废债务等违法违规行为和不良记录；创业大学生毕业3年以内；有稳定可靠的经营收入和按期偿还贷款本息的能力；具有本市常住户口或有效居住身份证明；在我行开立结算账户；我行规定的其他条件。</p>
                        <h6>贷款额度</h6>
                        <p>最高可达100万元。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default EntrepreneurLoan
