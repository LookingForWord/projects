import React from 'react'
import SubPageTemplate from '../../commons/SubPageTemplate'
import './style.scss'

const CompanyLoan = props => {

    return (
        <div className="company-loan-container">
            <SubPageTemplate navItems={props.navItems} type={props.type}>
                {
                    props.children
                }
            </SubPageTemplate>
        </div>
    );
}

export default CompanyLoan
