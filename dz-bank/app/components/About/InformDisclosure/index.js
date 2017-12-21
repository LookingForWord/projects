import React from 'react'
import SubPageTemplate from '../../commons/SubPageTemplate'
import './style.scss'

const InformDisclosure = props => {

    return (
        <div className="inform-disclosure-container">
            <SubPageTemplate navItems={props.navItems}>
                {
                    props.children
                }
            </SubPageTemplate>
        </div>
    );
}

export default InformDisclosure
