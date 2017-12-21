import React from 'react'
import SubPageTemplate from '../../commons/SubPageTemplate'
import './style.scss'

const NewNotice = props => {

    return (
        <div className="new-notice-container">
            <SubPageTemplate navItems={props.navItems}>
                {
                    props.children
                }
            </SubPageTemplate>
        </div>
    );
}

export default NewNotice
