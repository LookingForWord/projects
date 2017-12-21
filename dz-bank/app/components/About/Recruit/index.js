import React from 'react'
import SubPageTemplate from '../../commons/SubPageTemplate'
import './style.scss'

const Recruit = props => {

    return (
        <div className="recruit-container">
            <SubPageTemplate navItems={props.navItems}>
                {
                    props.children
                }
            </SubPageTemplate>
        </div>
    );
}

export default Recruit
