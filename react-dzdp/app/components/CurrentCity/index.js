/**
 * 当前城市
 */
import React from 'react'

import './style.scss'

export default ({cityName}) => {

    return (
        <div className="current-city">
            <h2>{cityName}</h2>
        </div>
    );
}
