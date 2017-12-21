import React from 'react'
import SubPageTemplate from '../../commons/SubPageTemplate'
import './style.scss'

const BankCard = props => {

    return (
        <div className="bank-card-container">
            <SubPageTemplate navItems={props.navItems} type={props.type}>
                {
                    props.children
                }
            </SubPageTemplate>
        </div>
    );
}

export default BankCard
