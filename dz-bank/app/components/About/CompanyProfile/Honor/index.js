import React from 'react'
import './style.scss'

const Honor = ({data}) => {
    return (
        <div className="company-honor">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/about_banner_gk.jpg')} title={data.title || '公司荣誉'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '公司荣誉'}</h2>
                <div className="company-honor-main">
                    {
                        data.content ?
                            (<div className="company-honor-dynamic" dangerouslySetInnerHTML={{__html:data.content}}/>):
                            (<div className="company-honor-static">
                                <p>2017年中国中小银行先锋榜“综合效益榜十佳”荣誉称号</p>
                                <p>第七届四川银行业小微企业客户经理技能竞赛（初赛）川东赛区一等奖</p>
                                <p>2016年度达州银行业服务实体经济暨支持川东北核心经济增长极建设工作先进单位</p>
                                <p>2016年度达州银行业小微企业金融服务工作先进单位</p>
                                <p>2016年度达州银行业金融扶贫工作先进单位</p>
                                <p>2016年度达州银行业监管统计工作先进单位一等奖</p>
                                <p>2016年度达州市金融机构征信考评第一名</p>
                                <p>2016年度反洗钱编译调研工作先进单位</p>
                                <p>达州银行业监管统计劳动竞赛先进集体一等奖</p>
                                <p>2016年度金融统计业务知识竞赛三等奖</p>
                                <p>达州市金融学会优秀通联组二等奖</p>
                                <p>2016年度全市采购经理调查工作先进企业</p>
                                <p>“通川区青年文明号”称号（通川区支行）</p>
                                <p>2016年度辖内银行业金融机构综合评价A等（万源市支行）</p>
                                <p>信贷工作综合排名第一名（万源市支行）</p>
                                <p>支持“双创”综合排名第一名（万源市支行）</p>
                                <p>宣汉县金融机构综合排名第一名</p>
                                <p>2016年度宣汉县统计工作先进集体</p>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Honor

