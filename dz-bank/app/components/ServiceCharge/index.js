import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

const ServiceCharge = ({data}) => {

    return (
        <div className="service-charge-container">
            <h2><Link to="/">首页</Link><em>/</em><span>服务资费</span></h2>
            <div className="service-charge-main">
                <h4>{data.title || '达州银行金融服务收费项目及标准'}</h4>
                <div className="service-charge-content">
                    {
                        data.content ?
                            <div className="service-charge-dynamic" dangerouslySetInnerHTML={{__html:data.content}}/>
                            :(
                                <div className="service-charge-static">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th style={{width:'6%'}}>序号</th>
                                                <th style={{width:'24%'}}>收费项目</th>
                                                <th style={{width:'40%'}}>收费标准</th>
                                                <th style={{width:'40%'}}>收费依据</th>
                                            </tr>
                                        </thead>
                                        {/*凭证费*/}
                                        <tbody>
                                            <tr className="thead">
                                                <td className="text-align">一</td>
                                                <td colSpan={3}>凭证费</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">1</td>
                                                <td>现金交款单、进帐单</td>
                                                <td>3元/本</td>
                                                <td rowSpan={5}>发改价格[2014]268号、[2017]1250号</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">2</td>
                                                <td>进帐单（有炭纸）</td>
                                                <td>5元/本</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">3</td>
                                                <td>电汇凭证</td>
                                                <td>10元/本，单份出售每份0.4元</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">4</td>
                                                <td>现金支票、转帐支票</td>
                                                <td>35元/本(手续费25元/本，工本费10元/本）</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">5</td>
                                                <td>本票、银行汇票</td>
                                                <td>37元/本（手续费25元/本，工本费12元/本），单份出售每份1.48元（自2017年8月1日起暂停收取）</td>
                                            </tr>
                                        </tbody>
                                        {/*结算业务费用*/}
                                        <tbody>
                                        <tr className="thead">
                                            <td className="text-align">二</td>
                                            <td colSpan={3}>结算业务费用</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align" rowSpan={2}>6</td>
                                            <td rowSpan={2}>单位客户办理电子汇划业务</td>
                                            <td>汇划手续费：（一）1万元(含)以下每笔收5元；1－10万元（含）每笔收10元；10－50万元（含）每笔收15元；50－100万元（含）每笔收20元；100万元以上每笔按金额万分之零点二收取，最高收费200元；</td>
                                            <td rowSpan={2}>发改价格[2014]268号</td>
                                        </tr>
                                        <tr>
                                            <td>（二）汇划财政金库、救灾、抚恤金、捐款等款项免收电子汇划费；</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align" rowSpan={3}>7</td>
                                            <td rowSpan={3}>个人客户办理电子汇划业务</td>
                                            <td>汇划手续费：（一）0.2万元(含)以下每笔收2元；0.2－0.5万元（含）每笔收5元；0.5－1万元（含）每笔收10元；1－5万元（含）每笔收15元；5万元以上每笔按金额0.03%收取，最高收费50元。</td>
                                            <td rowSpan={3}>发改价格[2014]268号</td>
                                        </tr>
                                        <tr>
                                            <td>（二）现金汇兑，每笔按汇款金额的0.5%收取，最高收费50元</td>
                                        </tr>
                                        <tr>
                                            <td>（三）汇划财政金库、救灾、抚恤金、捐款等款项免收电子汇划费；</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align" rowSpan={2}>8</td>
                                            <td rowSpan={2}>委托收款、托收承付业务</td>
                                            <td>手续费：5 元/笔；</td>
                                            <td>计价费[1996]184号</td>
                                        </tr>
                                        <tr>
                                            <td>代寄特快专递按邮政收费标准收取</td>
                                            <td>邮政收费标准</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">9</td>
                                            <td>商业汇票查询</td>
                                            <td>30元/笔</td>
                                            <td/>
                                        </tr>
                                        </tbody>
                                        {/*对公账户服务费用*/}
                                        <tbody>
                                            <tr className="thead">
                                                <td className="text-align">三</td>
                                                <td>对公账户服务费用</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">10</td>
                                                <td>本票、支票、银行汇票挂失</td>
                                                <td>手续费按票面金额的0.1%，不足5元，收取5元。（本票、银行汇票挂失手续费自2017年8月1日起暂停收取）</td>
                                                <td>发改价格[2014]268号</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">11</td>
                                                <td>单位结算账户信息变更</td>
                                                <td>10元/次（暂免收）</td>
                                                <td rowSpan={7}>按照中国银行业监督管理委员会[2003]第3号令《商业银行服务价格管理暂行办法》的规定，实行市场调节的服务价格，参照同行业总行制定的收费标准执行</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">12</td>
                                                <td>印鉴变更</td>
                                                <td>10元/次（暂免收）</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">13</td>
                                                <td>印鉴挂失</td>
                                                <td>20元/次（暂免收）</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">14</td>
                                                <td>单位结算账户信息查询（跨年）</td>
                                                <td>20元/次</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">15</td>
                                                <td>补制对账单（当年）</td>
                                                <td>10元/次</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">16</td>
                                                <td>补制对账单（跨年）</td>
                                                <td>20元/次</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">17</td>
                                                <td>补制凭证回单</td>
                                                <td>1个月以内，免费；1个月（含）以上至1年，10元/笔；1年（含）以上至5年，20元/笔；5年（含）以上，50元/笔。</td>
                                            </tr>
                                        </tbody>
                                        {/*个人账户服务费用*/}
                                        <tbody>
                                            <tr className="thead">
                                                <td className="text-align">四</td>
                                                <td>个人账户服务费用</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">18</td>
                                                <td>银行卡年费</td>
                                                <td>10元/户/年(暂免收)</td>
                                                <td/>
                                            </tr>
                                            <tr>
                                                <td className="text-align">19</td>
                                                <td>个人账户年费和管理费（含小额账户管理费）、个人异地本行柜台取现</td>
                                                <td>免收</td>
                                                <td>发改价格[2017]1250号</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">20</td>
                                                <td>银行卡同城跨行ATM机取现</td>
                                                <td>3.6元/笔(暂免收)</td>
                                                <td rowSpan={2}>《中国银联入网机构银行卡跨行交易收益分配办法》(银复[2003] 126号)</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">21</td>
                                                <td>银行卡异地跨行ATM机取现</td>
                                                <td>3.6元/笔(暂免收)</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">22</td>
                                                <td>银行卡境外ATM机取现</td>
                                                <td>按(取现金额的1%+12元)人民币收取,最低12元/笔,最高112元/笔</td>
                                                <td rowSpan={2}>中国银联《关于收取品牌服务费、对跨境跨行查询交易收费以及调整跨境取现交易手续费标准的函》</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">23</td>
                                                <td>银行卡境外ATM机查询</td>
                                                <td>2.00元/笔</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">24</td>
                                                <td>银行卡同城ATM机转账</td>
                                                <td>转账金额1万元（含）以下的，按1.5元/笔；转账金额1万元以上至5万元（含）的，按2.5元/笔。</td>
                                                <td rowSpan={2}>中国银联《银联卡现金业务和转账业务规则》中费用收费办法减半收取</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">25</td>
                                                <td>银行卡异地ATM机转账</td>
                                                <td>按取款金额1%，最低2.5元，最高25元</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">26</td>
                                                <td>银行卡开卡/换卡</td>
                                                <td>10元/笔（暂免收）</td>
                                                <td rowSpan={3}>按照中国银行业监督管理委员会[2003]第3号令《商业银行服务价格管理暂行办法》的规定，实行市场调节的服务价格，参照同行业总行制定的收费标准执行</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">27</td>
                                                <td>挂失存折、存单、银行卡</td>
                                                <td>免收</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">28</td>
                                                <td>个人存款证明</td>
                                                <td>30元/笔</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">29</td>
                                                <td>存折开户、销户手续费</td>
                                                <td>免收</td>
                                                <td rowSpan={5}>按照中国银行业监督管理委员会[2011]22号《关于银行业金融机构免除部分服务收费的通知》要求执行</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">30</td>
                                                <td>密码修改、密码重置、密码挂失手续费</td>
                                                <td>免收</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">31</td>
                                                <td>个人账户查询手续费</td>
                                                <td>免收</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">32</td>
                                                <td>存折更换工本费</td>
                                                <td>免收</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">33</td>
                                                <td>对账单手续费</td>
                                                <td>免收</td>
                                            </tr>
                                        </tbody>
                                        {/*网上银行业务*/}
                                        <tbody>
                                            <tr className="thead">
                                                <td className="text-align">五</td>
                                                <td>网上银行业务</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">34</td>
                                                <td>个人客户证书年服务费</td>
                                                <td>8元/年/张（暂免收）</td>
                                                <td rowSpan={10}>按照中国银行业监督管理委员会[2003]第3号令《商业银行服务价格管理暂行办法》的规定，实行市场调节的服务价格，参照同行业总行制定的收费标准执行</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">35</td>
                                                <td>企业客户证书年服务费</td>
                                                <td>160元/年/张（暂免收）</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">36</td>
                                                <td>u-key工本费</td>
                                                <td>2.0代：33元/个（暂免收）</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">37</td>
                                                <td>登录密码重置</td>
                                                <td>免收</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">38</td>
                                                <td>私密问题重置</td>
                                                <td>免收</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">39</td>
                                                <td>网上银行行内转账手续费</td>
                                                <td>免收</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">40</td>
                                                <td>网上银行跨行转账手续费（个人账户）</td>
                                                <td>免收</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">41</td>
                                                <td>网上银行跨行转账手续费（对公账户）</td>
                                                <td>免收</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">42</td>
                                                <td>网上银行证书补发手续费</td>
                                                <td>5元/笔</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">43</td>
                                                <td>网上银行网银U盾挂失补发</td>
                                                <td>2.0代：33元/个</td>
                                            </tr>
                                        </tbody>
                                        {/*其他业务*/}
                                        <tbody>
                                            <tr className="thead">
                                                <td className="text-align">六</td>
                                                <td>其他业务</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align">44</td>
                                                <td>银行询证函、单位存款证明、资金证明</td>
                                                <td>50元/笔（同业机构的银行询证函免收）</td>
                                                <td/>
                                            </tr>
                                            <tr>
                                                <td className="text-align">45</td>
                                                <td>银承汇票承兑业务手续费</td>
                                                <td>按票面价格的0.5‰收取</td>
                                                <td/>
                                            </tr>
                                            <tr>
                                                <td className="text-align">46</td>
                                                <td>短信服务</td>
                                                <td>个人账户免收，单位结算账户按签约号20元/户/月</td>
                                                <td/>
                                            </tr>
                                            <tr>
                                                <td className="text-align" rowSpan={2}>47</td>
                                                <td rowSpan={2}>委托贷款</td>
                                                <td>公积金委托贷款按利息收入5%收取,或按协议收取</td>
                                                <td rowSpan={2}/>
                                            </tr>
                                            <tr>
                                                <td>其他委托贷款按贷款金额的3-5‰收取，或按协议收取</td>
                                            </tr>
                                            <tr>
                                                <td className="text-align" >48</td>
                                                <td>代发工资</td>
                                                <td>1.柜面代发工资1元/户/次向代发单位收取，或按双方协议收费; 2.网上银行代发工资（暂免收）</td>
                                                <td/>
                                            </tr>
                                            <tr>
                                                <td className="text-align" >49</td>
                                                <td>代理地方财政授权贷款</td>
                                                <td>按地方财政规定的收费标准执行</td>
                                                <td/>
                                            </tr>
                                            <tr>
                                                <td className="text-align" >50</td>
                                                <td>代理地方财政预算外资金收入收费</td>
                                                <td>按地方财政规定的收费标准执行</td>
                                                <td/>
                                            </tr>
                                            <tr>
                                                <td className="text-align" rowSpan={7}>51</td>
                                                <td rowSpan={7}>代理收付款</td>
                                                <td>代付学生补助款：1元/笔；或按代收（付）金额的0.5%收取，按月或按季收取</td>
                                                <td/>
                                            </tr>
                                            <tr>
                                                <td>代收公用事业费：1元/笔；或按代收（付）金额的0.5%收取，按月或按季收取</td>
                                                <td/>
                                            </tr>
                                            <tr>
                                                <td>代收电讯费：1元/笔；或按代收（付）金额的0.5%收取，按月或按季收取</td>
                                                <td/>
                                            </tr>
                                            <tr>
                                                <td>代收有线电视费：1元/笔；或按代收（付）金额的0.5%收取，按月或按季收取</td>
                                                <td/>
                                            </tr>
                                            <tr>
                                                <td>代收社会保险费：1元/笔；或按代收（付）金额的0.5%收取，按月或按季收取</td>
                                                <td/>
                                            </tr>
                                            <tr>
                                                <td>代收行政事业罚款：1元/笔；或按代收（付）金额的0.5%收取，按月或按季收取</td>
                                                <td/>
                                            </tr>
                                            <tr>
                                                <td>代收学杂费：1元/笔；或按代收（付）金额的0.5%收取，按月或按季收取</td>
                                                <td/>
                                            </tr>
                                        </tbody>
                                        {/*备注*/}
                                        <tfoot>
                                            <tr>
                                                <td rowSpan={2}>注：</td>
                                                <td colSpan={3}>我行上述金融服务收费项目和标准，严格遵守国家价格主管部门和监管机构关于金融服务收费的各项政策规定，现予以公示，敬请广大金融消费者监督。</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={3}>我行于2015年8月1日调整银行卡挂失为免费，短信服务(个人）为免费。</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
}

export default ServiceCharge
