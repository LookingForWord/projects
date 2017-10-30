/**
 * search input
 */
import React from 'react'
import BaseComponent from '../BaseComponent'
import './style'

export default class SearchInput extends BaseComponent{
    constructor(props,context){
        super(props,context);
        this.state = {
            value:''
        }
    }

    render(){
        return (
            <input
                className="search-input"
                type="text"
                placeholder="请输入关键字"
                onChange={this.changeHandle.bind(this)}
                onKeyUp={this.keyUpHandle.bind(this)}
                value={this.state.value}
            />
        );
    }

    componentDidMount(){
        this.setState({
            value:this.props.value || ''
        })
    }

    changeHandle(e){
        this.setState({
            value:e.target.value
        })
    }

    keyUpHandle(e){
        if(e.target.value == '' || e.keyCode !== 13) return ;

        this.props.enterHandle(e.target.value)
    }
}

