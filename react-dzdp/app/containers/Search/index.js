/**
 * Search 页
 */
import React from 'react'
import BaseComponent from '../../components/BaseComponent'
import SearchHeader from '../../components/SearchHeader'
import List from './subpage/List'

class Search extends BaseComponent{

    render(){
        const {match:{params}} = this.props;
        return (
            <div className="search">
                <SearchHeader keyword={params.keyword}/>
                <List params={params}/>
            </div>
        );
    }
}

export default Search
