/**
 * Route 配置
 */
import React from 'react'
import Home from '@/containers/Home'
import PersonalBusiness from 'bundle-loader?lazy!@/containers/PersonalBusiness'
import CompanyBusiness from 'bundle-loader?lazy!@/containers/CompanyBusiness'
import EBank from 'bundle-loader?lazy!@/containers/EBank'
import FinancialMarket from 'bundle-loader?lazy!@/containers/FinancialMarket'
import CompanyProfile from 'bundle-loader?lazy!@/containers/About/CompanyProfile'
import InformDisclosure from 'bundle-loader?lazy!@/containers/About/InformDisclosure'
import OnlineServer from 'bundle-loader?lazy!@/containers/About/OnlineService'
import Detail from 'bundle-loader?lazy!@/containers/About/Detail'
import LoanCalculate from 'bundle-loader?lazy!@/containers/LoanCalculate'
import DepositCalculate from 'bundle-loader?lazy!@/containers/DepositCalculate'
import ServiceCharge from 'bundle-loader?lazy!@/containers/ServiceCharge'
import LoanRate from 'bundle-loader?lazy!@/containers/LoanRate'
import DepositRate from 'bundle-loader?lazy!@/containers/DepositRate'
import ContactUs from 'bundle-loader?lazy!@/containers/About/ContactUs'
import Recruit from 'bundle-loader?lazy!@/containers/About/Recruit'
import NotFound from 'bundle-loader?lazy!@/components/NotFound'

/**
 * routes 每项可选
 *      config -- route的配置 {}
 *      component -- route的组件 Component
 *      routes -- 当前组件的子组件路由 []
 *      async -- 异步 默认true
 */
const routes = [
    {
        config:{path:"/",exact:true},
        component:Home,
        async:false
    },
    {
        config:{path:"/loanCalculate",exact:true},
        component:LoanCalculate
    },
    {
        config:{path:"/depositCalculate",exact:true},
        component:DepositCalculate
    },
    {
        config:{path:"/serviceCharge",exact:true},
        component:ServiceCharge
    },
    {
        config:{path:"/loanRate",exact:true},
        component:LoanRate
    },
    {
        config:{path:"/depositRate",exact:true},
        component:DepositRate
    },
    {
        config:{path:"/personalBusiness/:type?/:subType?",exact:true},
        component:PersonalBusiness
    },
    {
        config:{path:"/companyBusiness/:type?/:subType?",exact:true},
        component:CompanyBusiness
    },
    {
        config:{path:"/eBank/:type?",exact:true},
        component:EBank
    },
    {
        config:{path:"/financialMarket/:type?",exact:true},
        component:FinancialMarket
    },
    {
        config:{path:"/about/gsgk/:type?",exact:true},
        component:CompanyProfile
    },
    {
        config:{path:"/about/lxwm/:type?",exact:true},
        component:ContactUs
    },
    {
        config:{path:"/about/xxpl/:type?/:subType?",exact:true},
        component:InformDisclosure
    },
    {
        config:{path:"/about/rczp/:type?",exact:true},
        component:Recruit
    },
    {
        config:{path:"/about/detail/:type/:id",exact:true},
        component:Detail
    },
    {
        config:{path:"/about/zxfw/:type?/:subType?",exact:true},
        component:OnlineServer
    },
    // {
    //     config:{path:"*",exact:true},
    //     component:NotFound
    // }
];

export default routes
