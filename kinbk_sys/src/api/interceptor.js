/**
 *  注册全局拦截器hook
 *    用于拦截需要登陆才能访问的模块
 *  @param Vue constructor
 *  @param router 路由对象
 */
import axios from 'axios';
export default function interceptor(Vue, router) {
  /**
   *路由拦截
   */
  router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {//判断目标路由是否需要登录
      let session = Vue.prototype.$session({key: 'loginMsg'});
      if (session != null && session.token != undefined && session.token != 'login') {//登录是否过期
        next();
      } else {//过期重新登录
        next({name: 'login'});
      }
    } else {//不需要登录
      if (to.name === 'login') {
        Vue.prototype.$session({key: 'loginMsg', value: {token: 'login'}});
      }
      next();//执行路由到目标路由
    }
  });
  /**
   * http请求拦截
   */
  axios.interceptors.request.use(
    config => {
      let session = Vue.prototype.$session({key: 'loginMsg'});
      if (session != null && session.token !== undefined) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = session.token;
      }
      return config;
    },
    err => {
      return Promise.reject(err);
    });
  // http response 拦截器
  axios.interceptors.response.use(
    response => {
      switch (response.request.response.code) {
        case -100:
          if(response.request.response.message === 'unauthorized'){
            Vue.prototype.$messageBox({type:"warning",vm:Vue.prototype,message:"本次登录已过期，请再次登录！",title:"提示：",
              confirmFun:function(){
                // 清除token信息并跳转到登录页面
                Vue.prototype.$session({key: 'loginMsg', remove: true});
                router.replace({
                  name: 'login'
                })
              },
              cancelFun:function(){
                // 清除token信息并跳转到登录页面
                Vue.prototype.$session({key: 'loginMsg', remove: true});
                router.replace({
                  name: 'login'
                })
              }
            })
          }
      }
      return response;
    },
    error => {
      if (error.response) {
        // switch (error.response) {
        //   case -100:
        //     if(error.response.request.response.message === 'unauthorized'){
        //       // 清除token信息并跳转到登录页面
        //       Vue.prototype.$session({key: 'loginMsg', remove: true});
        //       router.replace({
        //         name: 'login',
        //         query: {redirect: router.currentRoute.fullPath}
        //       })
        //     }
        // }
      }
      return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });
}
