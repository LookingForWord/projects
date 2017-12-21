import React from 'react'
import './style.scss'

const Culture = ({data}) => {
    return (
        <div className="company-culture">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/about_banner_gk.jpg')} title={data.title || '企业文化'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '企业文化'}</h2>
                <div className="company-culture-main">
                    {
                        data.content ? (
                            <div className="company-culture-dynamic" dangerouslySetInnerHTML={{__html:data.content}}/>
                        ):(
                            <div className="company-culture-static">
                                <h6 style={{marginTop:0}}>发展普惠金融、助力区域发展</h6>
                                <p>达州银行自成立以来，坚持深化改革发展，不断增强服务实体经济能力，大力推进绿色金融，着力发展普惠金融，持续为区域经济发展贡献源头活水。</p>
                                <p>始终坚持“服务地方、服务中小、服务市民”的市场定位，并在长期的发展过程中把中小企业确立为发展的重要业务支柱，根据中小企业客户“短、频、快”的融资需求特点，为客户量身定制中小企业金融服务模式，全方位开展业务创新，健康快速发展中小企业业务：帮助客户解决短、中、长期的融资；帮助客户提高资产负债表的规模和质量；帮助客户有效管理应收/应付帐款，加快交易速度、减轻财务负担；帮助客户获得最新的设备和市场信息；帮助客户提高技能和效率，做好决策咨询和财务规划。</p>
                                <h6>防控风险、有序推进、规范量化、促进发展</h6>
                                <p><span>防范风险：</span>达州银行始终把防控风险作为首要任务，总体原则为：一是稳步推进；二是公平公正；三是凝聚共识；四是设置专门机构防控风险。</p>
                                <p><span>有序推进：</span>实现未来五年战略目标，分四步推进，一是分步实施；二是任务分解；三是先易后难；四是适当分隔。</p>
                                <p><span>规范量化：</span>从三个方面实施规范量化管理，一是规范流程；二是量化管理；三是细化分析区别对待。</p>
                                <p><span>促进发展：</span>促进达州银行的持续健康发展，一是有序推进安排；二是提升员工形象尤其是一线员工的形象；三是提升内部管理能力，提高工作效率。</p>
                                <h6>共享、共赢、共成长</h6>
                                <p>达州银行坚持以客户为本，为客户提供超越期望的优质金融服务；以股东为本，为股东持续创造价值；以员工为本，为员工提供广阔的事业发展空间。同时探索多种形式的同业合作，拓展业务范围和经营空间，为当地经济和社会事业发展提供深层次、贴近式的金融服务，努力创造和谐、共赢的局面。</p>
                                <h6>致远行、创价值</h6>
                                <p>致远行，体现了一种矢志不渝的进取精神，达州银行始终以打造国内一流的城市商业银行为企业愿景，致力自身发展，提升综合实力。</p>
                                <p>创价值：凡为企业，其最终目标即为创造价值，银行也不例外。达州银行的发展目标不仅为自身创造价值，更同股东、企业及客户共享共赢，创造共同价值。</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Culture
