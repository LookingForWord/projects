/**
 * 列表组件
 */
import React from 'react';
import Item from './Item'
import './style'

export default (props) => {
    return (
        <div className="list-container">
            {
                props.data.map((item,index) => <Item key={index} data={item}/>)
            }
        </div>
    );
}