/**
 * 业务类别
 */
import React from 'react'
import {Link} from 'react-router-dom'
import './styles.scss'

const ServerType = ({serverType}) => {

    return (
        <div className="server-type-container">
            <h2>业务类别</h2>
            <div className="server-type-items clear-fix">
                {
                    serverType.map( item => (
                        <div className="server-type-item float-left" key={item.title}>
                            <Link to={item.linkUrl} className='inline-block'>
                                <img src={item.imgUrl} title={item.title}/>
                                <h4 className="text-ellipsis">{item.title}</h4>
                                <p className="text-ellipsis">{item.content}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ServerType
