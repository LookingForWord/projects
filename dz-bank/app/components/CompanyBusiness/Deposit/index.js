import React from 'react'
import SubPageTemplate from '../../commons/SubPageTemplate'
import './style.scss'

const CompanyDeposit = props => {

    return (
        <div className="company-deposit-container">
            <SubPageTemplate navItems={props.navItems} type={props.type}>
                {
                    props.children
                }
            </SubPageTemplate>
        </div>
    );
}

export default CompanyDeposit
