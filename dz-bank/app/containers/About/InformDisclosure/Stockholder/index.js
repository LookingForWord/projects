import React from 'react'
import StockholderComponent from '../../../../components/About/InformDisclosure/Stockholder'

class Stockholder extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state={
            data:{
                bannerUrl:require('../../../../static/images/about_banner_xxpl.jpg'),
                title:'股东信息',
                attachmentUrl:''
            }
        }
    }

    render(){

        return <StockholderComponent  data={this.state.data}/>
    }

    componentDidMount(){
        this.getData();
    }

    getData(){

    }

}

export  default Stockholder
