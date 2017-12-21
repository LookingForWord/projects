/**
 * 导航项
 */
import React from 'react'
import SubItems from './SubItems'
import {Link,withRouter} from 'react-router-dom'
import './style.scss'

class Item extends React.Component {
    constructor(props, contexts) {
        super(props, contexts);
    }

    render() {
        const {item,location} = this.props;
        this.checkCurrentItem(item.url);

        return (
            <li className={`float-left nav-item
            ${this.checkCurrentItem(item.url) ? 'active' : ''}
            `} key={item.title}
            >
                <i className="rect-icon float-left"/>
                <Link to={ item.url || '/'}
                      ref={ elem => this.linkElem = elem}
                      className={`link-item ${this.props.activeSubItems == this.props.index ? 'active':''}`}
                      data-index={this.props.index}
                >
                    {item.title}
                </Link>
                {
                    item.subItems ? (
                        <SubItems
                            active={this.props.activeSubItems == this.props.index}
                            subItems={item.subItems} imgUrl={ item.imgUrl || ''} linkUrl={item.linkUrl || '/'}/>
                    ) : null
                }
            </li>
        );
    }

    componentDidMount(){
        const aElem = document.getElementsByClassName('nav-items')[0];
        aElem.addEventListener('click',event => {
            const currentElem = event.target;
            if(currentElem && currentElem.nodeName === 'A'){
                const items = document.getElementsByClassName('sub-items-container');
                [].map.call(items,item => {
                    item.className = 'sub-items-container';
                })
            }
        })
    }

    checkCurrentItem(url){
        const {location} = this.props;
        const reg=new RegExp("^"+url);

        return reg.test(location.pathname);
    }
}

export default withRouter(Item)

