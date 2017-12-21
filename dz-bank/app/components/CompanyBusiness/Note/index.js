import React from 'react'
import SubPageTemplate from '../../commons/SubPageTemplate'
import './style.scss'

const Note = props => {

    return (
        <div className="note-container">
            <SubPageTemplate navItems={props.navItems} type={props.type}>
                {
                    props.children
                }
            </SubPageTemplate>
        </div>
    );
}

export default Note
