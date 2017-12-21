/**
 * Footer 组件
 */
import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

const Footer = (props) => {

    return (
        <footer className="footer-container" style={{display: props.action ? 'block' : 'none'}}>
            <div className="footer">
                <div className="float-left">
                    <p>
                        友情链接：
                        <a href="http://www.pbc.gov.cn/">中国人民银行</a><em>￨</em>
                        <a href="http://www.yypt.com/home/">钱大掌柜</a><em>￨</em>
                        <a href="http://cn.unionpay.com/">中国银联</a><em>￨</em>
                        <a href="http://www.cbrc.gov.cn/index.html">中国银监会</a><em>￨</em>
                        <a href="http://www.cib.com.cn/cn/index.html">兴业银行</a>
                    </p>
                    <p>总行地址：达州市通川区朝阳东路58号<span>24小时客服电话：028-962559</span>蜀ICP备13020536号–1</p>
                </div>
                <div className="float-right">
                    <Link to="/about/zxfw/lxdh/gfwx" className="wx-icon float-left"/>
                    <Link to="/about/zxfw/zxts" className="contact-icon float-right"/>
                </div>
            </div>
        </footer>
    )
};

export default Footer
