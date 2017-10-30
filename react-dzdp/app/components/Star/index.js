/**
 * Star
 */
import React from 'react'
import BaseComponent from '../BaseComponent'
import './style'

class Star extends BaseComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {
            star: this.props.star
        }
    }

    render() {
        let star = this.state.star || 0;
        if (star > 5) star = star % 5;

        const starNum = [1, 2, 3, 4, 5];

        return (
            <div className="star-container">
                {
                    starNum.map((item, index) => {
                        const lightClass = star >= item ? 'light' : '';
                        return <i key={index} className={ 'icon-star ' + lightClass } onClick={this.clickHandle.bind(this,item)}/>
                    })
                }
            </div>
        );
    }

    clickHandle(star) {
        const clickCallback = this.props.clickCallback;
        if (!clickCallback) return;

        this.setState({star});

        clickCallback(star)
    }
}

export default Star
