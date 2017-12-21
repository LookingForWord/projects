import React from 'react'
import {SOCIAL_PDF} from '../../../../constants'
import './style.scss'

const Duty = ({data}) => {

    return (
        <div className="company-duty">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/about_banner_gk.jpg')} title={data.title || '社会责任'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '社会责任'}</h2>
                <div className="company-duty-main">
                    <div className="duty-img-container">
                        {/*<img src={require('./images/shzr.png')} title="社会责任"/>*/}
                        <h5>实体经济的“助推器”</h5>
                        <p>近年来，达州银行紧紧围绕实体经济需求，积极推进供给侧结构性改革，有效支持地方经济转型发展。积极探索金融扶贫、产业扶贫的新路子，通过多种方式实施产业扶贫项目，持续履行社会责任。</p>
                        <h6>助力项目建设</h6>
                        <p>2016年以来，累计投放“马踏洞”项目非公开公司债券7亿元；支持农业产业、工业、现代服务业等重点产业项目贷款7.73亿元；“一带一路”中铁建设项目贷款1.38亿元；物流贸易体系建设项目贷款3.64亿元。</p>
                        <h6>助力产业和企业转型</h6>
                        <p>2016年以来，累计发放企业贷款96.85亿元，涵盖批发零售、制造、租赁、电子商务和服务业等多个领域。</p>
                        <h6>助力大众创业</h6>
                        <p>积极响应“大众创业、万众创新”号召，发放下岗就业贷款、妇女创业贷款、农民工返乡创业贷款及凤凰创业贷款1.52亿元。</p>
                        <h5>小微企业的“直通车”</h5>
                        <p>2016年以来，达州银行推出了“专属平台、专属产品、专属服务”的模式，多管齐下解决小微企业融资难、融资贵问题。</p>
                        <p>创新小微专属产品。根据小微企业“短、小、频、急”的资金需求特点，“量体裁衣”进行产品研发，推出了“金凤凰.借贷通”、“金凤凰.经营贷”、“金凤凰.循环贷”等十余款小微信贷产品。</p>
                        <p>开展小微专属服务。优化信贷审批流程，扩大审批权限，缩短决策链条，实行限时办结制、首问责任制，推行“一站式”办公，开辟了服务中小企业的“绿色通道”，最大限度地提高服务效率。</p>
                        <p>2016年以来，累计发放小微贷款95.68亿元，累计发放支小再贷款1.6亿元。</p>
                        <h5>金融扶贫的“急先锋”</h5>
                        <p>积极开展精准扶贫，累计向建档立卡户直接发放扶贫贷款近2000万元，向扶贫带动企业发放贷款4.6亿元。向2017年全省重点脱贫摘帽县通川区累计投放贷款41.69亿元。</p>
                        <p>设置扶贫专项基金。2016年以来，共投入精准扶贫专项资金190万元，带动建档立卡户进行脱贫致富，助推了宣汉县肉鸡种、养及销售一条龙扶贫、三汇镇肉牛生产基地建设。</p>
                        <p>“一对一”开展贫困户帮扶。建立起“1+1”“1+2”的结对帮扶模式。共帮扶13个精准扶贫村，派驻驻村第一书记4人，到县级团委挂职帮扶3人，到国家级贫困县担任副县长1人。</p>
                        <p>打造电商扶贫新亮点。积极探索“银行+电商+扶贫”的模式，助力电商平台发展。助推四川天天想农业发展有限公司发展壮大，共布局农村电商服务站点15个，直接参与建设2个农村电商服务站点，实现线上交易额达700多万元。</p>
                    </div>
                    <a href={data.socialPdfUrl || SOCIAL_PDF} target="_blank">2016社会责任报告.pdf</a>
                </div>
            </div>
        </div>
    );
}

export default Duty