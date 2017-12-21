import React from 'react'
import PersonalBusinessComponent from '../../../components/PersonalBusiness'

class PersonalBusiness extends React.Component{
    constructor(props,contexts){
        super(props,contexts)
        this.state = {
            banners:[
                {imgUrl:require('../../../static/images/personal_business_banner.jpg'),linkUrl:''}
            ],
            recommendCards:[
                {
                    imgUrl:require('../../../static/images/dfbjk.png'),
                    title:'丹凤白金卡',
                    content:'贵宾专享，个人金融资产需达标后申请',
                    linkUrl:'/personalBusiness/yhk/dfbjk'
                },
                {
                    imgUrl:require('../../../static/images/dfjk.png'),
                    title:'丹凤金卡',
                    content:'尊属金卡，根据个人金融资产规模发放',
                    linkUrl:'/personalBusiness/yhk/dfjk'
                },
                {
                    imgUrl:require('../../../static/images/dfpk.png'),
                    title:'丹凤普卡',
                    content:'银联IC卡，人民币结算的金融支付工具',
                    linkUrl:'/personalBusiness/yhk/dfpk'
                },
                {
                    imgUrl:require('../../../static/images/gjjdfk.png'),
                    title:'公积金丹凤卡',
                    content:'银行与达州住房公积金管理中心联合发行',
                    linkUrl:'/personalBusiness/yhk/gjjdfk'
                }
            ]
        }
    }

    render(){
        return <PersonalBusinessComponent banners={this.state.banners} recommendCards={this.state.recommendCards}/>
    }

    componentDidMount(){
        //获取banner
        this.getBanners()

        //获取推荐卡
        this.getRecommendCard()
    }

    getBanners(){

    }

    getRecommendCard(){

    }
}

export default PersonalBusiness
