import React from 'react'
import './style.scss'

const Structure = ({data}) => {
    return (
        <div className="company-structure">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/about_banner_xxpl.jpg')} title={data.title}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '组织架构'}</h2>
                <div className="structure-body-main">
                    {/*{*/}
                        {/*data.items ?*/}
                            {/*data.items.map((item,index) => (*/}
                                {/*<div className="structure-item" key={index}>*/}
                                    {/*<h6>{item.title}</h6>*/}
                                    {/*<p>{item.content}</p>*/}
                                {/*</div>*/}
                            {/*)):null*/}
                    {/*}*/}
                    {/*<div className="structure-img-container">*/}
                        {/*<img src={require('./images/structure.png')} title="组织架构图"/>*/}
                    {/*</div>*/}
                    <p>本行实行现代企业框架下的公司治理体制，最高权力机构为股东大会。在股东大会领导下，组织架构由董事会、监事会、高级经营管理层组成。</p>
                    <p>董事会下设董事会办公室、审计部、战略发展研究室3个部门，并设有薪酬与提名委员会、风险管理委员会、关联交易控制委员会、审计委员会、战略发展委员会和信息科技管理委员会6个专门委员会；监事会下设监事会办公室1个部门，并设有提名委员会和审计与监督委员会2个专门委员会；高级经营管理层下设前、中、后台14个职能部门：其中前台业务拓展部门包括：零售业务部、小微金融部、公司业务部、金融市场部；中台服务支撑部门包括：风险管理部、授信审批部、运行管理部、内控合规部、计划财务部、资产保全部；后台监督保障部门包括科技信息部、人力资源部、行政办公室、安全保卫部。并设有资产负债管理委员会、风险管理委员会、信贷审批委员会、财务审批委员会、目标考核委员会、采购招标委员会和科技信息管理委员会7个委员会及工会、共表团、妇女联合会。</p>
                    <p>本行目前对外营业机构包括：总行营业部1个、一级支行12个，对外营业网点30余个（分布在通川区、达川区、大竹县、渠县、宣汉县、开江县、万源市、南坝镇、三汇镇）。</p>
                </div>
            </div>
        </div>
    );
}

export default Structure
