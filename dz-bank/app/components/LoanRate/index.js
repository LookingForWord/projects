import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

const LoanRate = ({data}) => {

    return (
        <div className="loan-rate-container">
            <h2><Link to="/">首页</Link><em>/</em><span>贷款利率</span></h2>
            <div className="loan-rate-main">
                <h4>{data.title || '达州银行人民币贷款利率调整表'}</h4>
                <div className="loan-rate-content">
                    <p className="loan-rate-unit">单位：年利率%</p>
                    {
                        data.content ?
                            <div className="loan-rate-dynamic" dangerouslySetInnerHTML={{__html:data.content}}/>
                            :(
                                <div className="loan-rate-static">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th style={{width:'30%'}} rowSpan={2}>项目</th>
                                                <th style={{width:'70%'}} colSpan={2}>利率</th>
                                            </tr>
                                            <tr>
                                                <th style={{width:'35%'}}>现行基准利率</th>
                                                <th style={{width:'35%'}}>调整后执行利率</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="thead">
                                            <td className="text-align" colSpan={2}>各项贷款</td>
                                            <td style={{width:'35%'}} rowSpan={9}>根据贷款品种按照原规定上、下浮动比例执行。</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">六个月</td>
                                            <td className="text-align">4.35</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">一年</td>
                                            <td className="text-align">4.35</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">一至三年</td>
                                            <td className="text-align">4.75</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">三至五年</td>
                                            <td className="text-align">4.75</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">五年以上</td>
                                            <td className="text-align">4.90</td>
                                        </tr>
                                        <tr className="thead">
                                            <td colSpan={2} className="text-align">个人住房公积金贷款</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">五年以下（含五年）</td>
                                            <td className="text-align">2.75</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">五年以上</td>
                                            <td className="text-align">3.25</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
}

export default LoanRate
