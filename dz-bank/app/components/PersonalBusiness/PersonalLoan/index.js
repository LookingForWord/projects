import React from 'react'
import SubPageTemplate from '../../commons/SubPageTemplate'
import './style.scss'

const PersonalLoan = props => {

    return (

        <div className="personal-loan-container">
            <SubPageTemplate navItems={props.navItems} type={props.type}>
                {
                    props.children
                }
            </SubPageTemplate>
        </div>
    );
}

export default PersonalLoan
