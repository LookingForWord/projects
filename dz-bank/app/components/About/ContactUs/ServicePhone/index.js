import React from 'react'
import './style.scss'

const ServicePhone = ({data}) => {
    return (
        <div className="service-phone">
            <div className="template-body-banner">
                <img src={data.bannerUrl || require('../../../../static/images/about_banner_lxdh.jpg')} title={data.title || '联系电话'}/>
            </div>
            <div className="template-body-content overflow-top">
                <h2>{data.title || '联系电话'}</h2>
                <div className="service-phone-main">
                    <h6>客服热线</h6>
                    <p>{data.phone || '028-962559（四川省外用户拨打028-962559）'}</p>
                    <h6>服务时间</h6>
                    <p>{data.serviceDate || '7*24小时'}</p>
                    <h6>服务内容</h6>
                    <p>{data.content || '达商银行业务咨询、电子银行业务咨询、理财业务咨询、投诉受理等'}</p>
                    <h6>联系地址</h6>
                    <p>{data.address || '达州市通川区朝阳东路58号'}</p>
                    {/*<h6>官方微信</h6>*/}
                    {/*<p className="img"><img src={data.gfwx || require('./images/dhwx.png')} alt="官方微信"/></p>*/}
                    {/*<h6>官方微博</h6>*/}
                    {/*<p>{data.gfwb || '暂无数据！'}</p>*/}
                </div>
            </div>
        </div>
    );
}

export default ServicePhone
