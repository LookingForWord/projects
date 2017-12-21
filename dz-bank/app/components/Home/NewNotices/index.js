/**
 * 达行新闻
 */
import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

class NewNotice extends React.Component {
    constructor(props, contexts) {
        super(props, contexts);

        this.state = {
            newStatus: true
        }
    }

    render() {
        const {newItems, noticeItems} = this.props;
        const items = this.state.newStatus ? newItems : noticeItems;

        return (
            <div className="new-notice-container">
                <h2><span className={`inline-block ${this.state.newStatus ? 'active' : ''}`}
                          onClick={this.changeTitle.bind(this)}>达行新闻</span><span
                    className={`inline-block ${this.state.newStatus ? '' : 'active'}`}
                    onClick={this.changeTitle.bind(this)}>达行公告</span></h2>
                <div className="new-notice-content clear-fix">
                    <div className="float-left">
                        <div className="new-notice-body">
                            {
                                items && items.length > 0 ? (
                                    items.map((item, index) => (
                                        <div className="new-notice-item clear-fix" key={index}>
                                            <Link className="float-left clear-fix text-ellipsis"
                                                  to={`/about/detail/${this.state.newStatus ? 'xwdt' : 'gsgg'}/${item.id}`}>{item.title}</Link><span
                                            className="float-right">{item.date}</span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="new-notice-empty">暂无数据！</div>
                                )
                            }
                        </div>
                    </div>
                    <div className="float-right">
                        <h6>关注达行官方微信</h6>
                        <img src={require('./images/dhwx.png')} alt="达行官方微信"/>
                    </div>
                </div>
            </div>
        );
    }

    changeTitle(e) {
        const target = e.currentTarget;
        if (!target) return;

        this.setState({newStatus: target.innerHTML === '达行新闻'});
    }
}

export default NewNotice
