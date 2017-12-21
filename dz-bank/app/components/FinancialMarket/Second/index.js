import React from 'react'
import SubPageTemplate from '../../commons/SubPageTemplate'
import './style.scss'

const FinancialMarketSecond = props => {

    return (
        <div className="financial-market-second-container">
            <SubPageTemplate navItems={props.navItems} type={props.type}>
                {
                    props.children
                }
            </SubPageTemplate>
        </div>
    );
}

export default FinancialMarketSecond
