import React from 'react'
import Item from './Item'
import './style.scss'

const OrderList = (props) => {

    return (
        <div className="order-list-container">
            <h2>您的订单</h2>
            <div className="order-list">
                {
                    props.data.map((item,index) => <Item data={item} key={index}/>)
                }
            </div>
        </div>
    )
}

export default OrderList
