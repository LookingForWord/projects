/**
 * Home 猜你喜欢列表
 */
import React from 'react'
import List from '../List'
import './style'

export default (props) => {

    return (
        <div className="home-list">
            <h2 className="home-list-title">猜你喜欢</h2>
            {
                    props.data == null || props.data.length == 0 ?
                        <div>暂无数据！</div>:
                        <List data={props.data}/>
            }
        </div>
    );
}
