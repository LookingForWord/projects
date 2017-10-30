/**
 * Home Header
 */
import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import SearchInput from '../SearchInput'
import './style'

const HomeHeader = (props) => {
    let enterHandle = (value) => {
        props.history.push('/Search/all/' + encodeURIComponent(value));
    }

    return (
        <div className="home-header clear-fix">
            <div className="home-header-left float-left">
                <Link to="/city">
                    <span>{props.cityName}</span>
                    &nbsp;
                    {/*使用css3的字体图标*/}
                    <i className="icon-angle-down"/>
                </Link>
            </div>
            <div className="home-header-right float-right">
                <Link to="/Login">
                    <i className="icon-user"/>
                </Link>
            </div>
            <div className="home-header-middle">
                <div className="search-container">
                    <i className="icon-search"/>
                    &nbsp;
                    <SearchInput value="" enterHandle = {enterHandle}/>
                </div>
            </div>
        </div>
    );
}

export default withRouter(HomeHeader)
