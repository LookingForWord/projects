/**
 * Home 便捷服务模块
 */
import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

class HomeTools extends React.Component {
    constructor(props,contexts){
        super(props,contexts);
    }

    render(){
        const items = this.props.toolItems;

        return (
            <div className="fast-service-container">
                {
                    items.map( item => (
                        <span className="fast-service-item inline-block" key={item.title}>
                            <Link to={item.linkUrl} className="inline-block">
                                <em className="item-bg inline-block" style={ {backgroundImage:`url(${item.iconUrl})`} }/>
                                <span className="item-title text-ellipsis">{ item.title }</span>
                            </Link>
                        </span>
                    ))
                }
            </div>
        );
    }
}

export default HomeTools
