import React from 'react'
import SubPageTemplate from '../../commons/SubPageTemplate'
import './style.scss'

const PersonalDeposit = props => {

    return (
        <div className="personal-deposit-container">
            <SubPageTemplate navItems={props.navItems} type={props.type}>
                {
                    props.children
                }
            </SubPageTemplate>
        </div>
    );
}

export default PersonalDeposit
