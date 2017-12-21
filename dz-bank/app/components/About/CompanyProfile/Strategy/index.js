import React from 'react'
import './style.scss'

const Strategy = ({data}) => {
    return (
        <div className="company-strategy">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/about_banner_gk.jpg')} title={data.title || '发展战略'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '发展战略'}</h2>
                <div className="template-body-main">
                    {
                        data.content ?
                            ( <div className="company-strategy-dynamic"  dangerouslySetInnerHTML={{__html:data.content}}/>) :
                            (
                                <div className="company-strategy-static">
                                    <p>2017-2021年（以下简称“规划期”）是我国经济和社会发展和推进供给侧改革的重要时期，是全面建成小康社会的关键期，是全面落实国家治理体系与治理能力现代化的推进期，是经济增长模式转换的攻坚期，是落实全面科学发展的战略机遇期。</p>
                                    <div className="img-container clear-fix"><img style={{width:'700px',marginLeft:'88px'}} src={require('../../../../static/images/fzzl_img1.jpg')} alt="发展战略"/></div>
                                    <p>结合国家“十三五”发展规划，基于对规划期国内经济金融改革开放趋势和政策取向，以及对经济金融市场发展趋势的研判，以国内较好城市商业银行量化指标体系为参照，分析了达州银行规划期面临的挑战和机遇，明确了使命和责任，并根据达州银行董事会战略意图编制了《2017-2021年五年战略规划》（以下简称“五年战略规划”）。五年战略规划所提出的指导思想、业务目标、重点策略、实施措施和重要指标将是引导达州银行未来五年的发展方向和操作指南，也是达州银行全体员工共同奋斗的行动纲领。</p>
                                    <div className="img-container clear-fix"><img src={require('../../../../static/images/fzzl_img2.jpg')} alt="发展战略"/></div>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
}

export default Strategy
