/**
 * 城市列表
 */
import React from 'react'
import BaseComponent from '../BaseComponent'
import './style.scss'

export default class CityList extends BaseComponent{
    constructor(props,context){
        super(props,context);
        this.state = {
            cities:['北京','上海','杭州','广州','苏州','深圳','南京','天津','重庆','成都','厦门','武汉']
        }
    }

    render(){

        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    {
                        this.state.cities.map( city => (
                            <li key={city}>
                                <span onClick={this.changeCity.bind(this,city)}>{city}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }

    changeCity(city){
        this.props.changeCity(city);
    }
}
