import React from 'react'
import BaseComponent from '../../../../components/BaseComponent'
import Star from '../../../../components/Star'
import './style.scss'

class Item extends BaseComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {
            commentState: 2,//0 未评价 1 评价中 2 已评价
            stars: {}
        }
    }

    render() {
        const data = this.props.data;

        return (
            <div className="order-item-container">
                <div className="order-item-img float-left">
                    <img src={require('../../images/' + data.img)}/>
                </div>
                <div className="order-item-comment float-right">
                    {
                        this.state.commentState === 0 ?
                            <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
                            : this.state.commentState === 1 ?
                            null :
                            <button className="btn unselected-btn">已评价</button>
                    }
                </div>
                <div className="order-item-content">
                    <span>商户：{data.title}</span>
                    <span>数量：{data.count}</span>
                    <span>价格：￥{data.price}</span>
                </div>
                {/*评价中*/}
                {
                    this.state.commentState === 1 ?
                        (
                            <div className="comment-text-container">
                                <textarea
                                    style={ {width: '100%', height: '80px'} }
                                    className="comment-text"
                                    ref={ elem => this.textarea = elem}
                                />
                                <div style={ {paddingTop: '10px', paddingBottom: '10px'} }>
                                    <Star clickCallback={this.starClickCallback.bind(this)}/>
                                </div>
                                <button className="btn" onClick={this.submitComment.bind(this)}>提交</button>
                                &nbsp;
                                <button className="btn unselected-btn" onClick={this.hideComment.bind(this)}>取消</button>
                            </div>
                        ) : null
                }
            </div>
        );
    }

    componentDidMount() {
        this.setState({commentState: this.props.data.commentState});
    }

    showComment() {
        this.setState({commentState: 1});
    }

    hideComment() {
        this.setState({commentState: 0});
    }

    starClickCallback(star) {
        let stars = this.state.stars;
        const id = this.props.data.id;
        stars[id] = star;
        this.setState({stars});
    }

    submitComment() {
        const submitComment = this.props.submitComment;
        const id = this.props.data.id;
        const star = this.state.stars[id] || 0;
        const commentText = this.textarea.value.trim();
        if (!commentText) return;

        //数据提交
        submitComment({id,commentText,star},this.commentOk.bind(this))
    }

    commentOk(){
        this.setState({commentState:2});
    }
}

export default Item
