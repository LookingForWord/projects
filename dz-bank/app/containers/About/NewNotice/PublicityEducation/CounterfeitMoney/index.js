import React from 'react'
import CounterfeitMoneyComponent from '../../../../../components/About/InformDisclosure/PublicityEducation/CounterfeitMoney'

class CounterfeitMoney extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{
                bannerUrl:require('../../../../../static/images/about_banner_gk.jpg'),
                title:'中国人民银行假币收缴、鉴定管理办法',
                content:''
            }
        }
    }

    render(){

        return <CounterfeitMoneyComponent data={this.state.data}/>
    }

    componentDidMount(){
        this.getData();
    }

    getData(){

    }
}

export  default CounterfeitMoney
