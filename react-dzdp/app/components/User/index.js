/**
 * User组件
 */
import React from 'react'
import Header from '../Header'
import UserInfo from './UserInfo'
import OrderList from './OrderList'

const User = (props) => {

    return (
        <div className="user-container">
            <Header title="用户主页" backRouter="/"/>
            <UserInfo username={props.username} cityName={props.cityName}/>
            <OrderList data={props.data} submitComment= { props.submitComment}/>
        </div>
    );
}

export default User
