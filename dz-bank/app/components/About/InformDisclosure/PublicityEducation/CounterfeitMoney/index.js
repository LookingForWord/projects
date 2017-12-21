import React from 'react'
import './style.scss'

const CounterfeitMoney = ({data}) => {
    return (
        <div className="inform-counterfeit-money">
            <div className="template-body-banner">
                <img src={data.bannerUrl} title={data.title}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title}</h2>
                <div className="inform-counterfeit-money-main">
                    {
                        data.content ?
                            (
                                <div className="inform-counterfeit-money-dynamic"
                                     dangerouslySetInnerHTML={ {__html: data.content}}/>
                            ) :
                            (
                                <div className="inform-counterfeit-money-static overflow-top">
                                    <h6>第一章 总则</h6>
                                    <p>第一条
                                        为规范对假币的收缴、鉴定行为，保护货币持有人的合法权益，根据《全国人民代表大会常务委员会关于惩治破坏金融秩序犯罪的决定》和《中华人民共和国人民币管理条例》制定本办法。</p>
                                    <p>第二条 办理货币存取款和外币兑换业务的金融机构收缴假币、中国人民银行及其授权的鉴定机构鉴定货币真伪适用本办法。</p>
                                    <p>第三条
                                        本办法所称货币是指人民币和外币。人民币是指中国人民银行依法发行的货币，包括纸币和硬币；外币是指在我国境内（香港特别行政区、澳门特别行政区及台湾地区除外）可收兑的其他国家或地区的法定货币。</p>
                                    <p>本办法所称假币是指伪造、变造的货币。</p>
                                    <p>伪造的货币是指仿照真币的图案、形状、色彩等，采用各种手段制作的假币。</p>
                                    <p>变造的货币是指在真币的基础上，利用挖补、揭层、涂改、拼凑、移位、重印等多种方法制作，改变真币原形态的假币。</p>
                                    <p>本办法所称办理货币存取款和外币兑换业务的金融机构（以下简称“金融机构”）是指商业银行、城乡信用社、邮政储蓄的业务机构。</p>
                                    <p>本办法所称中国人民银行授权的鉴定机构，是指具有货币真伪鉴定技术与条件，并经中国人民银行授权的商业银行业务机构。</p>
                                    <p>第四条 金融机构收缴的假币，每季末解缴中国人民银行当地分支行，由中国人民银行统一销毁，任何部门不得自行处理。</p>
                                    <p>第五条 中国人民银行及其分支机构依照本办法对假币收缴、鉴定实施监督管理。</p>
                                    <h6>第二章 假币的收缴</h6>
                                    <p>第六条
                                        金融机构在办理业务时发现假币，由该金融机构两名以上业务人员当面予以收缴。对假人民币纸币，应当面加盖“假币”字样的戳记；对假外币纸币及各种假硬币，应当面以统一格式的专用袋加封，封口处加盖“假币”字样戳记，并在专用袋上标明币种、券别、面额、张（枚）数、冠字号码、收缴人、复核人名章等细项。收缴假币的金融机构（以下简称“收缴单位”）向持有人出具中国人民银行统一印制的《假币收缴凭证》，并告知持有人如对被收缴的货币真伪有异议，可向中国人民银行当地分支机构或中国人民银行授权的当地鉴定机构申请鉴定。收缴的假币，不得再交予持有人。</p>
                                    <p>第七条 金融机构在收缴假币过程中有下列情形之一的，应当立即报告当地公安机关，提供有关线索：</p>
                                    <p>（一） 一次性发现假人民币20张（枚）（含20张、枚）以上、假外币10张（含10张、枚）以上的；</p>
                                    <p>（二） 属于利用新的造假手段制造假币的；</p>
                                    <p>（三） 有制造贩卖假币线索的；</p>
                                    <p>（四） 持有人不配合金融机构收缴行为的。</p>
                                    <p>第八条
                                        办理假币收缴业务的人员，应当取得《反假货币上岗资格证书》。《反假货币上岗资格证书》由中国人民银行印制。中国人民银行各分行、营业管理部、省会（首府）城市中心支行负责对所在省（自治区、直辖市）金融机构有关业务人员进行培训、考试和颁发《反假货币上岗资格证书》。</p>
                                    <p>第九条 金融机构对收缴的假币实物进行单独管理，并建立假币收缴代保管登记簿。</p>
                                    <h6>第三章 假币的鉴定</h6>
                                    <p>第十条
                                        持有人对被收缴货币的真伪有异议，可以自收缴之日起３个工作日内，持《假币收缴凭证》直接或通过收缴单位向中国人民银行当地分支机构或中国人民银行授权的当地鉴定机构提出书面鉴定申请。</p>
                                    <p>
                                        中国人民银行分支机构和中国人民银行授权的鉴定机构应当无偿提供鉴定货币真伪的服务，鉴定后应出具中国人民银行统一印制的《货币真伪鉴定书》，并加盖货币鉴定专用章和鉴定人名章。</p>
                                    <p>中国人民银行授权的鉴定机构，应当在营业场所公示授权证书。</p>
                                    <p>第十一条 中国人民银行分支机构和中国人民银行授权的鉴定机构应当自收到鉴定申请之日起２个工作日内，通知收缴单位报送需要鉴定的货币。</p>
                                    <p>收缴单位应当自收到鉴定单位通知之日起２个工作日内，将需要鉴定的货币送达鉴定单位。</p>
                                    <p>第十二条
                                        中国人民银行分支机构和中国人民银行授权的鉴定机构应当自受理鉴定之日起15个工作日内，出具《货币真伪鉴定书》。因情况复杂不能在规定期限内完成的，可延长至30个工作日，但必须以书面形式向申请人或申请单位说明原因。</p>
                                    <p>第十三条
                                        对盖有“假币”字样戳记的人民币纸币，经鉴定为真币的，由鉴定单位交收缴单位按照面额兑换完整券退还持有人，收回持有人的《假币收缴凭证》，盖有“假币”戳记的人民币按损伤人民币处理；经鉴定为假币的，由鉴定单位予以没收，并向收缴单位和持有人开具《货币真伪鉴定书》和《假币没收收据》。</p>
                                    <p>
                                        对收缴的外币纸币和各种硬币，经鉴定为真币的，由鉴定单位交收缴单位退还持有人，并收回《假币收缴凭证》；经鉴定为假币的，由鉴定单位将假币退回收缴单位依法收缴，并向收缴单位和持有人出具《货币真伪鉴定书》。</p>
                                    <p>第十四条 中国人民银行分支机构和中国人民银行授权的鉴定机构鉴定货币真伪时，应当至少有两名鉴定人员同时参与，并做出鉴定结论。</p>
                                    <p>第十五条
                                        中国人民银行各分支机构在复点清分金融机构解缴的回笼款时发现假人民币，应经鉴定后予以没收，向解缴单位开具《假币没收收据》，并要求其补足等额人民币回笼款。</p>
                                    <p>第十六条
                                        持有人对金融机构作出的有关收缴或鉴定假币的具体行政行为有异议，可在收到《假币收缴凭证》或《货币真伪鉴定书》之日起60个工作日内向直接监管该金融机构的中国人民银行分支机构申请行政复议，或依法提起行政诉讼。</p>
                                    <p>
                                        持有人对中国人民银行分支机构作出的有关鉴定假币的具体行政行为有异议，可在收到《货币真伪鉴定书》之日起6０个工作日内向其上一级机构申请行政复议，或依法提起行政诉讼。</p>
                                    <h6>第四章 罚则</h6>
                                    <p>第十七条 金融机构有下列行为之一，但尚未构成犯罪的，由中国人民银行给予警告、罚款，同时，责成金融机构对相关主管人员和其他直接责任人给予相应纪律处分：</p>
                                    <p>（一）发现假币而不收缴的；</p>
                                    <p>（二）未按照本办法规定程序收缴假币的；</p>
                                    <p>（三）应向人民银行和公安机关报告而不报告的；</p>
                                    <p>（四）截留或私自处理收缴的假币，或使已收缴的假币重新流入市场的。</p>
                                    <p>上述行为涉及假人民币的，对金融机构处以1000元以上5万元以下罚款；涉及假外币的，对金融机构处以1000元以下的罚款。</p>
                                    <p>第十八条
                                        中国人民银行授权的鉴定机构有下列行为之一，但尚未构成犯罪的，由中国人民银行给予警告、罚款，同时责成金融机构对相关主管人员和其他直接责任人给予相应纪律处分：</p>
                                    <p>（一）拒绝受理持有人、金融机构提出的货币真伪鉴定申请的；</p>
                                    <p>（二）未按照本办法规定程序鉴定假币的；</p>
                                    <p>（三）截留或私自处理鉴定、收缴的假币，或使已收缴、没收的假币重新流入市场的。</p>
                                    <p>上述行为涉及假人民币的，对授权的鉴定机构处以1000元以上5万元以下罚款；涉及假外币的，对授权的鉴定机构处以1000元以下的罚款。</p>
                                    <p>第十九条 中国人民银行工作人员有下列行为之一，但尚未构成犯罪的，对直接负责的主管人员和其他直接责任人员，依法给予行政处分：</p>
                                    <p>（一）未按照本办法规定程序鉴定假币的；</p>
                                    <p>（二）拒绝受理持有人、金融机构、授权的鉴定机构提出的货币真伪鉴定或再鉴定申请的；</p>
                                    <p>（三）截留或私自处理鉴定、收缴、没收的假币，或使已收缴、没收的假币重新流入市场的。</p>
                                    <h6>第五章 附则</h6>
                                    <p>第二十条 本办法自2003年7月1日起施行。</p>
                                    <p>第二十一条 本办法由中国人民银行负责解释。</p>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
}

export default CounterfeitMoney