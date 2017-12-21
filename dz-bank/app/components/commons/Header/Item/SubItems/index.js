import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

class SubItems extends React.Component{

    render(){
        const {active,subItems,imgUrl,linkUrl} = this.props;

        return (
            <div className={`sub-items-container ${active ? 'active' : ''}`} >
                <div className="sub-items-body clear-fix">
                {
                    subItems.map( (item,index) => (
                        <div className="float-left" key={index} style={ {width: (1180 - (subItems.length <=3 ? 295 :0))/subItems.length} }>
                            <div className="sub-items-title"><Link to={item.url +`/${item.items[0].type}`}>{item.title}</Link></div>
                            <div className="sub-items-content clear-fix">
                                {
                                    item.items.map( (itm,idx)=> (
                                            <div className={'float-left'} key={idx}>
                                                <Link to={`${item.url}/${itm.type}`} className="text-ellipsis" title={itm.title}
                                                >{itm.title}</Link>
                                            </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
                {
                    subItems.length <= 3 && (<div className="float-right">
                        <Link to={linkUrl} style={{display:'block'}}><img src={imgUrl !=='' ? require(`../../../../../static/images/${imgUrl}`) : require('../../images/gryw.png')}/></Link>
                    </div>)
                }
                </div>
            </div>
        )
    }

}

export default SubItems
