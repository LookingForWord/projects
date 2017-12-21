/**
 * 公司业务
 */
import React from 'react'
import CompanyBusinessComponent from '../../../components/CompanyBusiness/index'

class CompanyBusiness extends React.Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state={
            banners:[
                {imgUrl:require('../../../static/images/company_business_banner.jpg'),linkUrl:''}
            ],
            loans:[
                {
                    imgUrl:require('../../../static/images/scgyd.png'),
                    title:'金凤凰·商超供应贷',
                    content:'满足日常经营资金不足需求',
                    linkUrl:'/companyBusiness/gsdk/scgyd'
                },
                {
                    imgUrl:require('../../../static/images/zkzyd.png'),
                    title:'金凤凰·账款质押贷',
                    content:'以应收账款的收益作为贷款偿还担保',
                    linkUrl:'/companyBusiness/gsdk/zkzyd'
                },
                {
                    imgUrl:require('../../../static/images/xhd.png'),
                    title:'金凤凰·循环贷',
                    content:'可多次循环适用，随借随还',
                    linkUrl:'/companyBusiness/gsdk/xhd'
                },{
                    imgUrl:require('../../../static/images/jyd.png'),
                    title:'金凤凰·经营贷',
                    content:'用于生产经营流动性资金需求',
                    linkUrl:'/companyBusiness/gsdk/jyd'
                },{
                    imgUrl:require('../../../static/images/qyd.png'),
                    title:'金凤凰·企业贷',
                    content:'企业长期平均占用的流动资金需求',
                    linkUrl:'/companyBusiness/gsdk/qyd'
                },{
                    imgUrl:require('../../../static/images/lbd.png'),
                    title:'金凤凰·联保贷',
                    content:'联保体成员之间协商确定贷款',
                    linkUrl:'/companyBusiness/gsdk/lbd'
                },{
                    imgUrl:require('../../../static/images/xyd.png'),
                    title:'金凤凰·信用贷',
                    content:'以信用担保方式发放的人民币授信',
                    linkUrl:'/companyBusiness/gsdk/xyd'
                },{
                    imgUrl:require('../../../static/images/zzgyd.png'),
                    title:'金凤凰·制造供应贷',
                    content:'与大.中型企业等签订订单的贷款',
                    linkUrl:'/companyBusiness/gsdk/zzgyd'
                },{
                    imgUrl:require('../../../static/images/xexyd.png'),
                    title:'金凤凰·1+N小额信用贷',
                    content:'某一龙头或核心企业（或组织）为依托',
                    linkUrl:'/companyBusiness/gsdk/xexyd'
                },{
                    imgUrl:require('../../../static/images/cct.png'),
                    title:'金凤凰·仓储通',
                    content:'存货或交易应收的商品等进行监管',
                    linkUrl:'/companyBusiness/gsdk/cct'
                }
            ]
        }
    }

    render(){

        return <CompanyBusinessComponent banners={this.state.banners} loans={this.state.loans}/>
    }

    componentDidMount(){
        //获取banner
        this.getBanners();
        //获取贷款列表
        this.getLoans();
    }

    getBanners(){

    }

    getLoans(){

    }
}

export default CompanyBusiness
