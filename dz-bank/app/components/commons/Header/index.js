/**
 * header组件
 */
import React from 'react'
import {Link} from 'react-router-dom'
import Item from './Item'
import './style.scss'

class Header extends React.Component {
    constructor(props, contexts) {
        super(props, contexts);
        this.state = {
            activeSubItems: -1,
            timer:null,
            mouseState: false
        }
    }

    render() {
        let {navItems, match,action} = this.props;

        return (
            <header
                className={`header-container ${this.state.activeSubItems !== -1 ?
                    navItems[this.state.activeSubItems].subItems ? 'active' : '': ''}`}
                style={{zIndex: 100,display:action ? 'block' : 'none'}}
                onMouseOut={ event => this.mouseOut(event)}
                onMouseOver={ event => this.mouseOver(event)}
                onTouchMove={ event => this.touchMove(event)}
            >
                <div className="header">
                    <Link to="/" className="float-left logo">
                        <img src={require('./images/logo.png')} title="logo"/>
                    </Link>
                    <div className="banks float-right">
                        <a className="personal-bank" href="https://ebank.dzccb.com.cn:3089/perbank">个人银行</a>
                        <a className="firm-bank" href="https://ebank.dzccb.com.cn:3089/corbank">企业银行</a>
                    </div>
                    <div className="nav-items">
                        <ul className="clear-fix float-left">
                            {
                                navItems.map((item,index) => <Item
                                    item={ item } key={ item.title } match={match}
                                    index={index}
                                    activeSubItems={this.state.activeSubItems}/>)
                            }
                        </ul>
                    </div>
                </div>
            </header>
        );
    }

    mouseOut(e) {
        if (!this.state.mouseState) return;

        let relatedTarget = e.relatedTarget;
        if(relatedTarget){
            while( true ){
                if(relatedTarget && relatedTarget.className.indexOf('nav-item') > 0) return;
                else{
                    if(!relatedTarget) break;

                    if(relatedTarget.id === 'app') break;
                    else relatedTarget = relatedTarget.parentElement;
                }
            }
        }

        this.setState({mouseState: false,activeSubItems:-1});
    }

    mouseOver(e) {
        const currElem = e.target;
        //设置 过滤
        if(this.state.timer !== null){
            clearTimeout(this.state.timer);
            this.setState({timer:null});
        }

        this.setState({
            timer:setTimeout( ()=>{
                    if (currElem.nodeName !== 'A' || currElem.className.indexOf('link-item') < 0) return;

                    this.setState({mouseState: true,activeSubItems:currElem.getAttribute('data-index')});
                  },40)
        });
    }

    touchMove(e){
        if(navigator.userAgent.match(/(iPhone|iPod|ios)/i)) {
            this.mouseOver(e);
        }
    }
}

export default Header
