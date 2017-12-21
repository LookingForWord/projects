/**
 * 电子银行
 */
import React from 'react'
import EBankComponent from '../../../components/EBank/index'

class EBank extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state = {
            banners:[
                {imgUrl:require('../../../static/images/e_bank_banner.jpg'),linkUrl:''}
            ],
            eBanks:[
                {
                    imgUrl:require('../../../static/images/grwy.png'),
                    title:'个人网银',
                    linkUrl:'/eBank/grwy'
                },
                {
                    imgUrl:require('../../../static/images/qywy.png'),
                    title:'企业网银',
                    linkUrl:'/eBank/qywy'
                },{
                    imgUrl:require('../../../static/images/sjyh.png'),
                    title:'手机银行',
                    linkUrl:'/eBank/sjyh'
                },{
                    imgUrl:require('../../../static/images/wxyh.png'),
                    title:'微信银行',
                    linkUrl:'/eBank/wxyh'
                },{
                    imgUrl:require('../../../static/images/zxyh.png'),
                    title:'直销银行',
                    linkUrl:'/eBank/zxyh'
                }
            ]
        }
    }

    render(){
        return <EBankComponent banners={this.state.banners} eBanks={this.state.eBanks}/>
    }

    componentDidMount(){
        this.getBanners();
        this.getEBanks()
    }

    getBanners(){

    }

    getEBanks(){

    }
}

export default EBank
