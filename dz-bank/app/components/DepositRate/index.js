import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

const DepositRate = ({data}) => {

    return (
        <div className="deposit-rate-container">
            <h2><Link to="/">首页</Link><em>/</em><span>存款利率</span></h2>
            <div className="deposit-rate-main">
                <h4>{data.title || '达州银行人民币存款利率调整表'}</h4>
                <div className="deposit-rate-content">
                    <p className="deposit-rate-unit">单位：年利率%</p>
                    {
                        data.content ?
                            <div className="deposit-rate-dynamic" dangerouslySetInnerHTML={{__html:data.content}}/>
                            :(
                                <div className="deposit-rate-static">
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
                                            <tr>
                                                <td className="thead">一、活期存款</td>
                                                <td className="text-align">0.35</td>
                                                <td className="text-align">0.385</td>
                                            </tr>
                                            <tr className="thead">
                                                <td colSpan={3}>二、定期存款</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={3}>（一）整存整取</td>
                                            </tr>
                                            <tr>
                                                <td>三个月</td>
                                                <td className="text-align">1.10</td>
                                                <td className="text-align">1.32</td>
                                            </tr>
                                            <tr>
                                                <td>六个月</td>
                                                <td className="text-align">1.30</td>
                                                <td className="text-align">1.69</td>
                                            </tr>
                                            <tr>
                                                <td>一年</td>
                                                <td className="text-align">1.50</td>
                                                <td className="text-align">1.95</td>
                                            </tr>
                                            <tr>
                                                <td>二年</td>
                                                <td className="text-align">2.10</td>
                                                <td className="text-align">2.73</td>
                                            </tr>
                                            <tr>
                                                <td>三年</td>
                                                <td className="text-align">2.75</td>
                                                <td className="text-align">3.575</td>
                                            </tr>
                                            <tr>
                                                <td>五年</td>
                                                <td className="text-align"/>
                                                <td className="text-align">4.95</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={3}>（二）零存整取、整存零取</td>
                                            </tr>
                                            <tr>
                                                <td>一年</td>
                                                <td className="text-align">1.10</td>
                                                <td className="text-align">1.32</td>
                                            </tr>
                                            <tr>
                                                <td>三年</td>
                                                <td className="text-align">1.30</td>
                                                <td className="text-align">1.69</td>
                                            </tr>
                                            <tr>
                                                <td>五年</td>
                                                <td className="text-align">1.50</td>
                                                <td className="text-align">1.95</td>
                                            </tr>
                                            <tr>
                                                <td>（三）定活两便</td>
                                                <td>按一年以内定期整存整取同档次利率打6折执行</td>
                                                <td>按一年以内定期整存整取同档次利率打6折执行</td>
                                            </tr>
                                            <tr>
                                                <td className="thead">三、协定存款</td>
                                                <td className="text-align">1.15</td>
                                                <td className="text-align">1.265</td>
                                            </tr>
                                            <tr>
                                                <td className="thead" colSpan={3}>四、通知存款</td>
                                            </tr>
                                            <tr>
                                                <td>一天</td>
                                                <td className="text-align">0.80</td>
                                                <td className="text-align">0.88</td>
                                            </tr>
                                            <tr>
                                                <td>七天</td>
                                                <td className="text-align">1.35</td>
                                                <td className="text-align">1.485</td>
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

export default DepositRate
