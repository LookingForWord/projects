import React from 'react'
import './style.scss'

const ServiceSite = ({data}) => {
    return (
        <div className="service-site">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/about_banner_lxdh.jpg')} title={data.title || '服务网点'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '服务网点'}</h2>
                <div className="service-site-main">
                    <h6>{data.siteTitle || '营业网点服务信息 '}</h6>
                    <div className="service-site-content">
                        {
                            data.content ?
                                <div className="service-site-dynamic" dangerouslySetInnerHTML={{__html:data.content}}/>
                                :(
                                <div className="service-site-static">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th style={{width:'25%'}}>网点名称</th>
                                            <th style={{width:'50%'}}>地址</th>
                                            <th style={{width:'15%'}}>服务电话</th>
                                            <th style={{width:'10%'}}>自助服务</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="text-align">达州银行股份有限公司营业部</td>
                                            <td className="text-align">四川省达州市朝阳东路58号</td>
                                            <td className="text-align">0818-2146879</td>
                                            <td className="text-align">✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行通川区支行</td>
                                            <td className="text-align">四川省达州市通川区柴市街255号</td>
                                            <td className="text-align">0818-2120630</td>
                                            <td className="text-align" />
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行珠市街支行</td>
                                            <td className="text-align">四川省达州市通川区南门滨江名苑一层13号门市</td>
                                            <td className="text-align">0818-2102477</td>
                                            <td className="text-align">✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行中心广场支行</td>
                                            <td className="text-align">四川省达州市通川区小红旗桥综合楼1号-4号门市</td>
                                            <td className="text-align">0818-2361167</td>
                                            <td className="text-align">✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行文华街支行</td>
                                            <td className="text-align">四川省达州市通川区柴市街104、106号</td>
                                            <td className="text-align">0818-2129987</td>
                                            <td className="text-align">✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align" rowSpan={2}>达州银行金兰支行</td>
                                            <td className="text-align">四川省达州市通川区罗浮新城市广场临街底楼1A-11号</td>
                                            <td className="text-align">0818-2782233</td>
                                            <td className="text-align" rowSpan={2}>✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州市通川区金兰路136号</td>
                                            <td className="text-align">0818-2523150</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行凤凰支行</td>
                                            <td className="text-align">四川省达州市通川区西外镇团包梁凤凰大道北侧宏宇花园B2幢第一层</td>
                                            <td className="text-align">0818-2186556</td>
                                            <td className="text-align" />
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行荷叶街支行</td>
                                            <td className="text-align">四川省达州市通川区荷叶街187号</td>
                                            <td className="text-align">0818-2107245</td>
                                            <td className="text-align" />
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行达川区支行</td>
                                            <td className="text-align">四川省达州市达川区叶家湾二小区侨兴锦华广场3幢6号—28号</td>
                                            <td className="text-align">0818-2107245</td>
                                            <td className="text-align">✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行文理学院支行</td>
                                            <td className="text-align">四川省达州市达川区南坝路433号</td>
                                            <td className="text-align">0818-2762244</td>
                                            <td className="text-align" />
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行朝阳东路支行</td>
                                            <td className="text-align">四川省达州市通川区朝阳东路251—253号</td>
                                            <td className="text-align">0818-2134764</td>
                                            <td className="text-align" />
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行金丝街支行</td>
                                            <td className="text-align">四川省达州市达川区翠屏街道通达西路137号—145号</td>
                                            <td className="text-align">0818-2656084</td>
                                            <td className="text-align" />
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行通南支行</td>
                                            <td className="text-align">四川省达州市达川区三里坪街道福达街325号—327号</td>
                                            <td className="text-align">0818-2681536</td>
                                            <td className="text-align">✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行宣汉县支行</td>
                                            <td className="text-align">四川省宣汉县东乡镇景观大道聚城峰华商务楼</td>
                                            <td className="text-align">0818-5219423</td>
                                            <td className="text-align">✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行宣汉县后街支行</td>
                                            <td className="text-align">四川省宣汉县东乡镇后街90号</td>
                                            <td className="text-align">0818-5223045</td>
                                            <td className="text-align" />
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行宣汉县多宝寺支行</td>
                                            <td className="text-align">四川省宣汉县东乡镇多宝寺路215号</td>
                                            <td className="text-align">0818-5235098</td>
                                            <td className="text-align" />
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行宣汉县石岭路支行</td>
                                            <td className="text-align">四川省宣汉县东乡镇石岭大道109号</td>
                                            <td className="text-align">0818-5224343</td>
                                            <td className="text-align" />
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行宣汉县南坝镇支行</td>
                                            <td className="text-align">四川省宣汉县南坝镇码头街25号</td>
                                            <td className="text-align">0818-5522085</td>
                                            <td className="text-align">✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行宣汉县多宝寺社区支行</td>
                                            <td className="text-align">四川省宣汉县东乡镇多宝寺路215号</td>
                                            <td className="text-align">0818-5219423</td>
                                            <td className="text-align" />
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行渠县支行</td>
                                            <td className="text-align">四川省渠县天星镇濛山社区东城半岛•望江亭10幢1-5号门市</td>
                                            <td className="text-align">0818-7216180</td>
                                            <td className="text-align">✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行渠县后溪街支行</td>
                                            <td className="text-align">四川省渠县渠江镇后溪街5号门市</td>
                                            <td className="text-align">0818-7327981</td>
                                            <td className="text-align" />
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行渠县万兴广场支行</td>
                                            <td className="text-align">四川省渠县渠江镇万兴广场万福苑2-1-20号门市</td>
                                            <td className="text-align">0818-7319059</td>
                                            <td className="text-align">✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行渠县三汇镇支行</td>
                                            <td className="text-align">四川省渠县三汇镇大井街130号</td>
                                            <td className="text-align">0818-7851377</td>
                                            <td className="text-align" />
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行渠县工农街支行</td>
                                            <td className="text-align">四川省渠县渠江镇工农街29号</td>
                                            <td className="text-align">0818-7322652</td>
                                            <td className="text-align" />
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行开江县支行</td>
                                            <td className="text-align">四川省开江县新宁镇文化街75号</td>
                                            <td className="text-align">0818-8306175</td>
                                            <td className="text-align">✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行开江县橄榄新城支行</td>
                                            <td className="text-align">四川省开江县新宁镇城区峨城大道 “橄榄新城”A4号楼附楼一层11-14号门市</td>
                                            <td className="text-align">0818-8236288</td>
                                            <td className="text-align">✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行开江县新北街支行</td>
                                            <td className="text-align">四川省开江县新宁镇新北街泰盛商贸A1—A2号门市</td>
                                            <td className="text-align">0818-8223249</td>
                                            <td className="text-align">✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行大竹县支行</td>
                                            <td className="text-align">四川省大竹县竹阳镇煌歌大道“煌歌•城市之星”J4-7号</td>
                                            <td className="text-align">0818-6251716</td>
                                            <td className="text-align">✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行大竹县金利多支行</td>
                                            <td className="text-align">四川省大竹县竹阳镇金利多花园东湖苑二期135-137号门市</td>
                                            <td className="text-align">0818-6231837</td>
                                            <td className="text-align">✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行大竹县北大街社区支行</td>
                                            <td className="text-align">四川省大竹县竹阳镇北大街108号</td>
                                            <td className="text-align">0818-6218305</td>
                                            <td className="text-align" />
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行万源市支行</td>
                                            <td className="text-align">四川省万源市河街166号6-11号</td>
                                            <td className="text-align">0818-8731006</td>
                                            <td className="text-align">✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州银行万源市紫金支行</td>
                                            <td className="text-align">四川省万源市太平镇太平路119号</td>
                                            <td className="text-align">0818-8521008</td>
                                            <td className="text-align">✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align" rowSpan={2}>离行式自助服务区</td>
                                            <td className="text-align">达州市通川区西外镇西河路中段火车站站前广场自主取票厅旁</td>
                                            <td className="text-align" rowSpan={2}>0818-2120630</td>
                                            <td className="text-align" rowSpan={2}>✔</td>
                                        </tr>
                                        <tr>
                                            <td className="text-align">达州市通川区凤凰大道333号（酒店大厅）</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceSite
