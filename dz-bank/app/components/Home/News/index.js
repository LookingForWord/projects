/**
 * 达行新闻
 */
import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

const News = ({newItems}) => {

    return (
        <div className="news-container">
            <h2>达行新闻<Link to='/about/xwgg/dhyw' className="inline-block">更多<i className="more-icon inline-block"/></Link></h2>
            <div className="new-items">
                <div className="new-item-left float-left">
                    <Link to='/about/xwgg/dhyw'><img src={newItems.newsBgUrl} title={newItems.newsBgTitle}/></Link>
                </div>
                <div className="new-item-right float-right">
                    <h4>关注达行官方微信</h4>
                    <div><img src={newItems.ewmUrl || require('./images/dhwx.png')} title="达行微信"/></div>
                </div>
                <div className="new-item-center">
                    {
                        newItems.lists ?
                            newItems.lists.map( (item,index) => (
                                <div className="new-item" key={index}>
                                    <Link to={`/about/detail/xwdt/${item.id}`}>
                                        <span className="float-left text-ellipsis">{item.title}</span>
                                        <span className="float-right">{item.date}</span>
                                    </Link>
                                </div>
                            )) : null
                    }
                </div>
            </div>
        </div>
    );
}

export default News
