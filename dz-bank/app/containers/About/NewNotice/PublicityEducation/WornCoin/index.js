import React from 'react'
import WornCoinComponent from '../../../../../components/About/InformDisclosure/PublicityEducation/WornCoin'

class WornCoin extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{
                bannerUrl:require('../../../../../static/images/about_banner_gk.jpg'),
                title:'中国人民银行残缺污损人民币兑换办法',
                content:''
            }
        }
    }

    render(){

        return <WornCoinComponent data={this.state.data}/>
    }

    componentDidMount(){
        this.getData();
    }

    getData(){

    }
}

export  default WornCoin
