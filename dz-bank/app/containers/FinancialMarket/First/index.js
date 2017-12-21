import React from 'react'
import FinancialMarketComponent from '../../../components/FinancialMarket/index'


class FinancialMarket extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state = {
            banners:[
                {imgUrl:require('../../../static/images/financial_market_banner.jpg'),linkUrl:''}
            ],
            businesses:[
                {
                    imgUrl:require('../../../static/images/zcgl.png'),
                    title:'资产管理',
                    linkUrl:'/financialMarket/zcgl'
                },
                {
                    imgUrl:require('../../../static/images/fshg.png'),
                    title:'买入返售与卖出回购',
                    linkUrl:'/financialMarket/fshg'
                },
                {
                    imgUrl:require('../../../static/images/zhsx.png'),
                    title:'综合授信',
                    linkUrl:'/financialMarket/zhsx'
                },
                {
                    imgUrl:require('../../../static/images/zqyw.png'),
                    title:'债券业务',
                    linkUrl:'/financialMarket/zqyw'
                },{
                    imgUrl:require('../../../static/images/tyyw.png'),
                    title:'同业业务',
                    linkUrl:'/financialMarket/tyyw'
                }
            ]
        }
    }

    render(){

        return <FinancialMarketComponent banners={this.state.banners} businesses={this.state.businesses}/>
    }

    componentDidMount(){
        this.getBanners();
        this.getBusinesses()
    }

    getBanners(){

    }

    getBusinesses(){

    }

}

export default FinancialMarket