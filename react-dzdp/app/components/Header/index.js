/**
 * Header
 */
import React from 'react'
import BaseComponent from '../BaseComponent'
import {withRouter} from 'react-router-dom'

import './style.scss'

class Header extends BaseComponent{
    render(){

        return (
            <div className="common-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"/>
                </span>
                {
                    this.props.title ?
                        (<h1>{this.props.title}</h1>):
                        this.props.subComponent ?
                            <this.props.subComponent {...this.props.subProps} enterHandle={ this.enterHandle.bind(this)}/> :
                            null
                }
            </div>
        );
    }

    clickHandle(){
        const backRouter = this.props.backRouter;

        if(backRouter) this.props.history.push(backRouter);
        else window.history.back();
    }

    enterHandle (value){
        this.props.history.push('/Search/all/' + encodeURIComponent(value));
    }
}

export default withRouter(Header)