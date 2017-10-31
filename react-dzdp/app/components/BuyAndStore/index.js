/**
 * 购买与收藏
 */
import React from 'react'
import './style.scss'

const BuyAndStore = (props) => {
    const {isStore,buyHandle,storeHandle} = props;

    return (
        <div className="buy-store-container clear-fix">
            <div className="item-container float-left">
                <button
                    onClick={storeHandle}
                    className={isStore ? 'selected' : ''}
                >{isStore ? '已收藏' : '收藏'}</button>
            </div>
            <div className="item-container float-right">
                <button onClick={buyHandle}>购买</button>
            </div>
        </div>
    );
}

export default BuyAndStore
