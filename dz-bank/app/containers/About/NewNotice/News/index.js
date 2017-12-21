import React from 'react'
import NewsComponent from '../../../../components/About/InformDisclosure/Notice'
import {NEWS} from '../../../../constants'
import getData from '../../../../util/getData'

class News extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{
                bannerUrl:require('../../../../static/images/about_banner_gk.jpg'),
                title:'达行要闻',
            },
            items:{},
            total:0,
            pageSize:8
        }
    }

    render(){

        return <NewsComponent  total={this.state.total} pageSize={this.state.pageSize} type='xwdt' data={this.state.data} items={this.state.items} clickHandle={this.clickHandle.bind(this)}/>
    }

    componentDidMount(){
        this.getInitItems();
    }

    getInitItems(){
        getData.bind(this)(NEWS,0,this.state.pageSize,'items');
    }

    clickHandle(pageSize,currentPage){
        getData.bind(this)(NEWS,currentPage - 1,pageSize,'items');
    }
}

export  default News

