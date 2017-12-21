import React from 'react'
import SubPageTemplate from '../../commons/SubPageTemplate'
import './style.scss'

const EBankSecond = props => {

    return (
        <div className="e-bank-second-container">
            <SubPageTemplate navItems={props.navItems} type={props.type}>
                {
                    props.children
                }
            </SubPageTemplate>
        </div>
    );
}

export default EBankSecond
