import React from 'react'
//import {STOCKHOLDER_PDF} from '../../../../constants'
import './style.scss'

const Stockholder = ({data}) => {
    return (
        <div className="inform-stockholder">
            <div className="template-body-banner">
                <img src={data.bannerUrl} title={data.title}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title}</h2>
                <div className="inform-stockholder-main">
                    {/*<h6>前十大股东介绍</h6>*/}
                    {/*<p>截至2016年12月31日，本行前十名股东持股情况如下</p>*/}
                    {/*<div><a href={data.attachmentUrl || STOCKHOLDER_PDF} download>下载附件</a><span>点击下载附件，查看详情</span></div>         */}
                    <h6>前十大股东</h6>
                    <table>
                        <thead>
                            <tr>
                                <th>序号</th>
                                <th>股东单位</th>
                                <th>股权分类</th>
                                <th>股权数量（股）</th>
                                <th>占比%</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>四川泰合置业集团有限公司</td>
                                <td>法人股</td>
                                <td>219,000,000.00</td>
                                <td>7.30</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>达州市财政局</td>
                                <td>国有股</td>
                                <td>191,400,000.00</td>
                                <td>6.38</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>四川巨景龙辉实业有限公司</td>
                                <td>法人股</td>
                                <td>150,000,000.00</td>
                                <td>5.00</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>四川蓝润实业集团有限公司</td>
                                <td>法人股</td>
                                <td>149,400,000.00</td>
                                <td>4.98</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>四川达能机电设备工程有限公司</td>
                                <td>法人股</td>
                                <td>149,146,500.00</td>
                                <td>4.97</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>成都中节施华电气有限公司</td>
                                <td>法人股</td>
                                <td>147,946,500.00</td>
                                <td>4.93</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>南充市明峰商务有限公司</td>
                                <td>法人股</td>
                                <td>147,600,000.00</td>
                                <td>4.92</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>四川省中瀚远宏物流有限公司</td>
                                <td>法人股</td>
                                <td>147,000,000.00</td>
                                <td>4.90</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>达州华妃商贸有限公司</td>
                                <td>法人股</td>
                                <td>147,000,000.00</td>
                                <td>4.90</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>四川众信联贸易有限公司</td>
                                <td>法人股</td>
                                <td>144,000,000.00</td>
                                <td>4.80</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Stockholder
