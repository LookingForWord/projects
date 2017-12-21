/**
 * 金融市场组件
 */
import React from 'react'
import Banner from './Banner'
import Business from './Business'
import './style.scss'

const FinancialMarket = props => {

    return (
        <div className="financial-market-container">
            <Banner banners={props.banners}/>
            <Business businesses={props.businesses}/>
        </div>
    );
}

export default FinancialMarket
