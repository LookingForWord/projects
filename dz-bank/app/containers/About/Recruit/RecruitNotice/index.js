import React from 'react'
import RecruitNoticeComponent from '../../../../components/About/Recruit/RecruitNotice'
import {RECRUITMENT} from '../../../../constants'
import getData from '../../../../util/getData'

class RecruitNotice extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{},
            items:{},
            total:0,
            pageSize:8
        }
    }

    render(){

        return <RecruitNoticeComponent type='zpgg'
                                data={this.state.data}
                                items={this.state.items}
                                clickHandle={this.clickHandle.bind(this)}
                                       total = {this.state.total}
                                       pageSize = {this.state.pageSize}
        />
    }

    componentDidMount(){
        this.getInitItems();
    }

    getInitItems(){
        getData.bind(this)(RECRUITMENT,0,this.state.pageSize,'items');
    }

    clickHandle(pageSize,currentPage){
        getData.bind(this)(RECRUITMENT,currentPage - 1,pageSize,'items');
    }
}

export  default RecruitNotice
