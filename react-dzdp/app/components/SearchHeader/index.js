/**
 * Search header
 */
import React from 'react'
import Header from '../Header'
import SearchInput from '../SearchInput'
import './style.scss'

const Input = ({keyword = '',enterHandle}) => {

    return (
        <div className="input-container">
            <i className="icon-search"/>
            &nbsp;
            <SearchInput value={keyword} enterHandle = { enterHandle }/>
        </div>
    );
}

const SearchHeader = (props) => {

    return <Header subComponent={Input} subProps={props}/>;
}

export default SearchHeader
