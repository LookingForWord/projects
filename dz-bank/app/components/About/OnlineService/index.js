import React from 'react'
import SubPageTemplate from '../../commons/SubPageTemplate'
import './style.scss'

const OnlineService = props => {

    return (
        <div className="online-service-container">
            <SubPageTemplate navItems={props.navItems}>
                {
                    props.children
                }
            </SubPageTemplate>
        </div>
    );
}

export default OnlineService
