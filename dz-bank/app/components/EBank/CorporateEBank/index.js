import React from 'react'
import './style.scss'

const CorporateEBank = ({data}) => {
    return (
        <div className="corporate-e-bank">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../static/images/e_banner_child.jpg')} title={data.title || '企业网银'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '企业网银'}</h2>
                <div className="corporate-e-bank-main">
                    data.content ?
                    (
                    <div className="corporate-e-bank-dynamic"
                         dangerouslySetInnerHTML={ {__html: data.content}}/>
                    ) :
                    (
                    <div className="corporate-e-bank-static">
                        <h6>简介</h6>
                        <p>企业网上银行（https://www.dzccb.com.cn ）是通过互联网向企业客户提供了一个交易平台和服务渠道。客户通过网上银行可办理账户查询、转帐付款、跨行实时汇划、代发工资、批量转帐、交易授权、留言簿等功能，足不出户享受全天候24小时的金融服务。</p>
                        <h6>特色优势</h6>
                        <p>达州市商业银行一直以来以科技和业务创新为动力，致力于为客户创造更多的价值，凭借强大的技术和管理优势，为企业客户提供全方位、一体化的资金管理平台。</p>
                        <h6>适用对象</h6>
                        <p>在达州市商业银行开立账户、信誉良好的企业客户，包括企业、行政事业单位、社会团体等均可开通企业网上银行。</p>
                        <h6>开办条件</h6>
                        <p>企业客户要成为网上银行注册客户，首先要在达州市商业银行开立存款结算账户，然后到账户开户网点申请网银注册，并提供以下资料：</p>
                        <p>1、填写《达州市商业银行企业电子银行业务服务申请表》、《达州市商业银行电子银行服务协议（企业）》，并由企业单位法定代表人（或授权代理人）签章、加盖账户预留印鉴和单位公章。</p>
                        <p>2、提供企业营业执照、事业单位法人证书或组织机构代码等有效证照原件及复印件。</p>
                        <p>3、法定代表人、经办人及企业网上银行管理员、操作员的有效身份证件原件及复印件。</p>
                        <p>4、非法定代表或单位负责人本人办理，须出据法人授权委托书。</p>
                        <h6>注意事项</h6>
                        <p>1、客户基于知悉、理解并同意遵守《达州市商业银行网上银行章程》，自愿申请达州市商业银行网上银行企业服务。</p>
                        <p>2、客户应按照达州市商业银行的规定正确填写相关服务申请表格，客户填写的申请表格文件将作为企业服务协议不可分割的一部分，具有同等法律效力。如客户所填的申请表格文件资料内容需要更改，则新的表格文件内容同样有效，并将作为协议的一部分。客户应保证所填写的网上银行申请表和所提供的资料真实、准确、完整。达州市商业银行将严格按照客户提供的账户、操作人员、操作权限及机构关系进行网上银行系统的相关设置。</p>
                        <p>3、达州市商业银行有权规定、更改网上银行日常服务时间，以及所提供服务或交易的每日截止时间，在每日截止时间之后收到的网上银行交易指令，达州市商业银行将视为下一营业日收到并进行处理。</p>
                        <p>企业客户操作员应在首次使用网上银行企业服务时注意：</p>
                        <p>1、企业操作员在PC机上插入客户证书（U-key），应先修改证书初始密码。</p>
                        <p>2、登录企业网上银行时，应先插入客户证书（U-key）,按操作提示输入U-key密码后，进入登录界面，再使用密码信封打印的登录名和初始密码登录。</p>
                        <p>3、根据密码信封打印的初始登录密码登录后,必须将登录密码修改为符合达州市商业银行网上银行用户安全须知要求的登录密码（6-16位含有数字、字母的密码）。</p>
                    </div>
                    )
                </div>
            </div>
        </div>
    );
}

export default CorporateEBank
