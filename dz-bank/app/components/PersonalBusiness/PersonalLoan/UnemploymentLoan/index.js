import React from 'react'
import './style.scss'

const UnemploymentLoan = ({data}) => {
    return (
        <div className="unemployment-loan">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/personal_banner_child.jpg')} title={data.title || '下岗失业小额担保贷款'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '下岗失业小额担保贷款'}</h2>
                <div className="unemployment-loan-main">
                    data.content ?
                    (
                    <div className="unemployment-loan-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="unemployment-loan-static">
                        <p>我行向有创业愿望和具有固定经营场所，但无合适抵押物的自然人发放的贷款；</p>
                        <h6>适用对象</h6>
                        <p>下岗工人，大学生创业，失地进城务工农民，退伍军人。</p>
                        <h6>产品特点</h6>
                        <p>贷款金额控制，财政全额贴息。</p>
                        <h6>操作流程</h6>
                        <p>①个人申请：借款人在就业局申请</p>
                        <p>②等待审批：财政审批</p>
                        <p>③完成贷款：银行审查后签订合同发放贷款</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default UnemploymentLoan
