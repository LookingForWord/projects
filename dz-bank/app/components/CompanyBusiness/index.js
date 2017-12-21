/**
 * 公司业务
 */
import React from 'react'
import Banner from './Banner'
import Loan from './Loan'
import './style.scss'

const CompanyBusiness = props => {
    return (
        <div className="company-business-container">
            <Banner banners={props.banners}/>
            <Loan loans={props.loans}/>
        </div>
    );
}

export default CompanyBusiness
