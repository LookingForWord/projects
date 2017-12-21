import React from 'react'
import SubPageTemplate from '../../commons/SubPageTemplate'
import './style.scss'

const CompanyProfile = props => {

    return (
        <div className="company-profile-container">
            <SubPageTemplate navItems={props.navItems}>
                {
                    props.children
                }
            </SubPageTemplate>
        </div>
    );
}

export default CompanyProfile
