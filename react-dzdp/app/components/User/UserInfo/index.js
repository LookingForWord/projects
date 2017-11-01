import React from 'react'
import './style.scss'

const UserInfo = (props) => {

    return (
        <div className="user-info-container">
            <p>
                <i className="icon-user"/>
                &nbsp;
                <span>{props.username}</span>
            </p>
            <p>
                <i className="icon-map-marker"/>
                &nbsp;
                <span>{props.cityName}</span>
            </p>
        </div>
    );
}

export default UserInfo
