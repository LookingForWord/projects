import React from 'react'
import './style.scss'

const WomenEntrepreneurs = ({data}) => {
    return (
        <div className="women-entrepreneurs-loan">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/personal_banner_child.jpg')} title={data.title || '妇女创业贷款'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '妇女创业贷款'}</h2>
                <div className="women-entrepreneurs-loan-main">
                    data.content ?
                    (
                    <div className="women-entrepreneurs-loan-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="women-entrepreneurs-loan-static">
                        <p>我行向有创业愿望的适龄妇女发放的贷款。</p>
                        <h6>适用对象</h6>
                        <p>适龄妇女</p>
                        <h6>产品特点</h6>
                        <p>贷款金额控制，财政全额贴息。</p>
                        <h6>操作流程</h6>
                        <p>①个人申请：借款人在社区申请</p>
                        <p>②等待审批：乡镇县妇联审批</p>
                        <p>③完成贷款：银行审查后签订合同发放贷款</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default WomenEntrepreneurs
