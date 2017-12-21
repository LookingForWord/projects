/**
 * 电子银行组件
 */
import React from 'react'
import Banner from './Banner'
import EBanks from './EBanks'
import './style.scss'

const EBank = props => {

    return (
        <div className="e-bank-container">
            <Banner banners={props.banners}/>
            <EBanks eBanks={props.eBanks}/>
        </div>
    );
}

export default EBank

