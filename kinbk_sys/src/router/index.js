import Vue from 'vue';
import Router from 'vue-router';
import {PRODBASEURL} from '@/api/constant';
Vue.use(Router);

export default new Router({
  //mode: 'history',
  // history: false,
  // hashbang: true,
  base: PRODBASEURL,
  routes: [
    {
      path: '/',
      name: 'app',
      components: {appView: resolve => require(['../App'], resolve)},
      redirect: {name: 'home'},
      children: [
        {
          path: 'index',
          components: {appView: resolve => require(['@/components/index'], resolve)},
          meta: {
            requireAuth: true//用于判断是否需要登陆才能访问该模块 true表示需要
          },
          children: [
            {
              path: '',
              name: 'home',
              component: resolve => require(['@/components/home'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'updatePassword',
              name: 'updatePassword',
              component: resolve => require(['@/components/updatePassword'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'totalDataList',
              name: 'totalDataList',
              component: resolve => require(['@/components/totalDataList'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'auditAll',
              name: 'auditAll',
              component: resolve => require(['@/components/auditAll'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'unaudited',
              name: 'unaudited',
              component: resolve => require(['@/components/unaudited'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'audited',
              name: 'audited',
              component: resolve => require(['@/components/audited'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'auditDetail/:mcId/:id',
              name: 'auditDetail',
              component: resolve => require(['@/components/auditDetail'], resolve),
              meta: {requireAuth: true},
            }, {
              path: 'auditPass/:mcId/:id',
              name: 'auditPass',
              component: resolve => require(['@/components/auditPass'], resolve),
              meta: {requireAuth: true},
            }, {
              path: 'auditNoPass/:mcId/:id',
              name: 'auditNoPass',
              component: resolve => require(['@/components/auditNoPass'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'refundAl',
              name: 'refundAll',
              component: resolve => require(['@/components/refundAll'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'refunded',
              name: 'refunded',
              component: resolve => require(['@/components/refunded'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'unrefunded',
              name: 'unrefunded',
              component: resolve => require(['@/components/unrefunded'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'refundDetail/:billStatus/:billId',
              name: 'refundDetail',
              component: resolve => require(['@/components/refundDetail'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'versionManage',
              name: 'versionManage',
              component: resolve => require(['@/components/versionManage'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'protocolManage',
              name: 'protocolManage',
              component: resolve => require(['@/components/protocolManage'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'bannerManage',
              name: 'bannerManage',
              component: resolve => require(['@/components/bannerManage'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'oaDataManage',
              name: 'oaDataManage',
              component: resolve => require(['@/components/oaDataManage'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'baseDataManage',
              name: 'baseDataManage',
              component: resolve => require(['@/components/baseDataManage'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'userDetail/:id',
              name: 'userDetail',
              component: resolve => require(['@/components/userDetail'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'prestadAll',
              name: 'prestadAll',
              component: resolve => require(['@/components/prestadAll'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'prestaded',
              name: 'prestaded',
              component: resolve => require(['@/components/prestaded'], resolve),
              meta: {requireAuth: true},
            },
            {
              path: 'unprestad',
              name: 'unprestad',
              component: resolve => require(['@/components/unprestad'], resolve),
              meta: {requireAuth: true},
            }
          ]
        },
        {
          path: 'login',
          name: 'login',
          components: {appView: resolve => require(['@/components/login'], resolve)},
        },
        {
          path: 'taobaoDetail/:name/:mcId/:id',
          name: 'taobaoDetail',
          components: {appView: resolve => require(['@/components/taobao'], resolve)},
          meta: {requireAuth: true},
        },
        {
          path: 'contactsDetail/:name/:mcId/:id',
          name: 'contactsDetail',
          components: {appView: resolve => require(['@/components/contacts'], resolve)},
          meta: {requireAuth: true},
        },
        {
          path: 'JdDetail/:name/:mcId/:id',
          name: 'JdDetail',
          components: {appView: resolve => require(['@/components/jingDong'], resolve)},
          meta: {requireAuth: true},
        },
        {
          path: 'PMDetail/:name/:mcId/:id',
          name: 'PMDetail',
          components: {appView: resolve => require(['@/components/phoneMessage'], resolve)},
          meta: {requireAuth: true},
          redirect: {name: 'phoneBaseMsg'},
          children:[
            {
              path:"phoneBaseMsg",
              name:"phoneBaseMsg",
              meta: {requireAuth: true},
              components:{phoneContent:resolve => require(['@/components/phoneBaseMsg'], resolve)}
            },
            {
              path:"phonePackage",
              name:"phonePackage",
              meta: {requireAuth: true},
              components:{phoneContent:resolve => require(['@/components/phonePackage'], resolve)}
            },
            {
              path:"phoneBill",
              name:"phoneBill",
              meta: {requireAuth: true},
              components:{phoneContent:resolve => require(['@/components/phoneBill'], resolve)}
            },
            {
              path:"phoneCall",
              name:"phoneCall",
              meta: {requireAuth: true},
              components:{phoneContent:resolve => require(['@/components/phoneCall'], resolve)}
            },
            {
              path:"phoneShortMsg",
              name:"phoneShortMsg",
              meta: {requireAuth: true},
              components:{phoneContent:resolve => require(['@/components/phoneShortMsg'], resolve)}
            },
            {
              path:"phoneRecharge",
              name:"phoneRecharge",
              meta: {requireAuth: true},
              components:{phoneContent:resolve => require(['@/components/phoneRecharge'], resolve)}
            },
            {
              path:"phoneFamily",
              name:"phoneFamily",
              meta: {requireAuth: true},
              components:{phoneContent:resolve => require(['@/components/phoneFamily'], resolve)}
            }
          ]
        }
      ]
    },
    {
      path: '*',
      name: 'unfind',
      components: {appView: resolve => require(['@/components/404'], resolve)},
      // meta: {requireAuth: true},
    }
    // {
    //   path: '/forgetPassword',
    //   component: resolve => require(['@/components/forgetPassword'], resolve),
    //   children: [
    //     {
    //       path: '',
    //       name: 'sureUser',
    //       component: resolve => require(['@/components/sureUser'], resolve),
    //     },
    //     {
    //       path: 'safetyVerification',
    //       name: 'safetyVerification',
    //       component: resolve => require(['@/components/safetyVerification'], resolve),
    //     },
    //     {
    //       path: 'resetPassword',
    //       name: 'resetPassword',
    //       component: resolve => require(['@/components/resetPassword'], resolve),
    //     }
    //   ]
    // },
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
