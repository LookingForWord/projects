/**
 * 贷款组件
 */
import React from 'react'
import Item from './Item'
import './style.scss'

const Loan = props => {

    return (
        <div className="company-business-load-container">
            <h2>公司贷款</h2>
            <div className="company-business-load-items">
                {
                    props.loans.map( (item,index) => <Item key={index} item={item} index={index}/>)
                }
            </div>
        </div>
    );
}

export default Loan