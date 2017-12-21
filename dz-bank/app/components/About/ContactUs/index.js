import React from 'react'
import SubPageTemplate from '../../commons/SubPageTemplate'
import './style.scss'

const ContactUs = props => {

    return (
        <div className="contact-us-container">
            <SubPageTemplate navItems={props.navItems}>
                {
                    props.children
                }
            </SubPageTemplate>
        </div>
    );
}

export default ContactUs
