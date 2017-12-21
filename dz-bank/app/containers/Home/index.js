/**
 * Home 容器
 */
import React from 'react'
import HomeComponent from '../../components/Home'
import {NEWS,PUBLIC_NOTICE} from '../../constants'
import {$http} from '../../fetch'

class Home extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state = {
            banners:[
                {imgUrl:require('../../static/images/banner1.jpg'),linkUrl:''},
                {imgUrl:require('../../static/images/banner2.jpg'),linkUrl:''},
                {imgUrl:require('../../static/images/banner3.jpg'),linkUrl:''},
                {imgUrl:require('../../static/images/banner4.jpg'),linkUrl:''}
            ],
            toolItems:[
                {iconUrl:require('../../components/Home/HomeTools/images/service_charge_icon.png'),title:'服务资费',linkUrl:'/home/serviceCharge'},
                {iconUrl:require('../../components/Home/HomeTools/images/loan_rate_icon.png'),title:'贷款利率',linkUrl:'/home/loanRate'},
                {iconUrl:require('../../components/Home/HomeTools/images/loan_count_icon.png'),title:'贷款计算',linkUrl:'/home/loanCalculate'},
                {iconUrl:require('../../components/Home/HomeTools/images/deposit_rate_icon.png'),title:'存款利率',linkUrl:'/home/depositRate'},
                {iconUrl:require('../../components/Home/HomeTools/images/deposit_count_icon.png'),title:'存款计算',linkUrl:'/home/depositCalculate'},
                {iconUrl:require('../../components/Home/HomeTools/images/site_search_icon.png'),title:'网点查询',linkUrl:'/about/zxfw/lxdh/fwwd'},
            ],
            serverType:[
                {
                    imgUrl:require('../../static/images/home_personal_business.jpg'),
                    title:'个人金融业务',
                    content:'银行卡业务 · 个人存款业务 · 个人贷款业务',
                    linkUrl:'/personalBusiness/yhk/dfpk'
                },
                {
                    imgUrl:require('../../static/images/home_company_business.jpg'),
                    title:'公司金融业务',
                    content:'公司存款业务 · 公司贷款业务 · 票据业务',
                    linkUrl:'/companyBusiness/gsck/tzck'
                },{
                    imgUrl:require('../../static/images/home_e_bank.jpg'),
                    title:'电子银行业务',
                    content:'个人网上银行 · 企业网上银行 · 手机银行',
                    linkUrl:'/eBank/grwy'
                },{
                    imgUrl:require('../../static/images/home_financial_market.jpg'),
                    title:'金融市场业务',
                    content:'资产管理 · 综合授信 · 债券业务',
                    linkUrl:'/financialMarket/zcgl'
                }
            ],
            activityItems:[
                {imgUrl:require('../../static/images/home_product1.jpg'),linkUrl:'/personalBusiness/grck/dlb'},
                {imgUrl:require('../../static/images/home_product2.jpg'),linkUrl:'/personalBusiness/grck/tsck'},
                {imgUrl:require('../../static/images/home_product3.jpg'),linkUrl:'/companyBusiness/gsdk/scgyd'},
                {imgUrl:require('../../static/images/home_product4.jpg'),linkUrl:'/companyBusiness/gsdk/zkzyd'}
            ],
            noticeItems:[],
            newItems:[]
        }
    }

    render(){
        return <HomeComponent
                banners={ this.state.banners }
                toolItems={this.state.toolItems}
                serverType={this.state.serverType}
                activityItems={this.state.activityItems}
                noticeItems={this.state.noticeItems}
                newItems={this.state.newItems}
        />
    }

    componentDidMount(){
        //获取banners
        this.getBanners();

        //便捷服务
        this.getFastServices();

        //业务类别
        this.getServerType();

        //最新活动
        this.getLatestActivity();

        //达行公告
        this.getNotice();

        //新闻
        this.getNews();
    }

    getBanners(){
    }

    getFastServices(){

    }

    getServerType(){

    }

    getLatestActivity(){

    }

    getNotice(){
        this.getData(PUBLIC_NOTICE,'noticeItems');
    }

    getNews(){
        this.getData(NEWS,'newItems');
    }

    getData(url,clumns){
        $http({url,data:{page:0,pageSize:4},headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
            .then( response => {
                if(response.code === 200){
                    if(response.data && response.data.content){
                        const data = response.data.content;

                        const result = data.map( item => ({
                            id:item.id,
                            title:item.title,
                            date:item.createTime ? item.createTime.split(' ')[0] : ''
                        }));

                        this.setState({[clumns]:result});
                    }else this.setState({[clumns]:[]});
                }else this.setState({[clumns]:[]});
            });
    }
}

export default Home;
