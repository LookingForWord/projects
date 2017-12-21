import React from 'react'
import ReportComponent from '../../../../components/About/InformDisclosure/Notice'
import {REPORT} from '../../../../constants'
import getData from '../../../../util/getData'

class Report extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{
                bannerUrl:require('../../../../static/images/about_banner_xxpl.jpg'),
                title:'定期报告',
            },
            items:{},
            total:0,
            pageSize:8
        }
    }

    render(){

        return <ReportComponent  total={this.state.total} pageSize={this.state.pageSize} type='dqbg' data={this.state.data} items={this.state.items} clickHandle={this.clickHandle.bind(this)}/>
    }

    componentDidMount(){
        this.getInitItems();
    }

    getInitItems(){
        getData.bind(this)(REPORT,0,this.state.pageSize,'items');
    }

    clickHandle(pageSize,currentPage){
        getData.bind(this)(REPORT,currentPage - 1,pageSize,'items');
    }
}

export  default Report
