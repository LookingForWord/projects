import React from 'react'
import XXPLComponent from '../../../../components/About/InformDisclosure/Notice'
import {INFORMATION} from '../../../../constants'
import getData from '../../../../util/getData'

class XXPL extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{
                bannerUrl:require('../../../../static/images/about_banner_xxpl.jpg'),
                title:'信息披露',
            },
            items:{},
            total:0,
            pageSize:8
        }
    }

    render(){

        return <XXPLComponent  total={this.state.total} pageSize={this.state.pageSize} type='xxplu' data={this.state.data} items={this.state.items} clickHandle={this.clickHandle.bind(this)}/>
    }

    componentDidMount(){

        this.getInitItems();
    }

    getInitItems(){
       getData.bind(this)(INFORMATION,0,this.state.pageSize,'items');
    }

    clickHandle(pageSize,currentPage){
        getData.bind(this)(INFORMATION,currentPage - 1,pageSize,'items');
    }
}

export  default XXPL
