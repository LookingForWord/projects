import React from 'react'
import NoticeComponent from '../../../../components/About/InformDisclosure/Notice'
import {PUBLIC_NOTICE} from '../../../../constants'
import getData from '../../../../util/getData'

class Notice extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{
                bannerUrl:require('../../../../static/images/about_banner_gk.jpg'),
                title:'重要公告',
            },
            items:{},
            total:0,
            pageSize:8
        }
    }

    render(){

        return <NoticeComponent total={this.state.total} pageSize={this.state.pageSize} type='gsgg' data={this.state.data} items={this.state.items} clickHandle={this.clickHandle.bind(this)}/>
    }

    componentDidMount(){
        this.getInitItems();
    }

    getInitItems(){
       getData.bind(this)(PUBLIC_NOTICE,0,this.state.pageSize,'items');
    }

    clickHandle(pageSize,currentPage){
        getData.bind(this)(PUBLIC_NOTICE,currentPage - 1,pageSize,'items');
    }
}

export  default Notice
