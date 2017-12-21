/**
 * 达行公告
 */
import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

const Notice = ({noticeItems}) => {

    return (
        <div className="notice-container">
            <h2>达行公告<Link to='/about/xwgg/zygg' className="inline-block">更多<i className="more-icon inline-block"/></Link></h2>
            <div className="notice-items clear-fix">
                {
                    noticeItems.map( (item,index) => (
                        <div className="notice-item float-left" key={index}>
                            <div className="notice-title">
                                <em>{item.type}</em>
                                <Link to={`/about/detail/gsgg/${item.id}`} className="text-ellipsis">{item.title}</Link>
                            </div>
                            <div className="notice-desc text-ellipsis">{item.content}</div>
                            <p className="notice-time">{item.date}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Notice
