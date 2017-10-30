import './styles/sysCommon';
import 'element-ui/lib/theme-default/index';
import "babel-polyfill";
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import request from './api/request';
import constant from './api/constant';
import messageBox from './api/messageBox';
import session from './api/session';
import interceptor from './api/interceptor';
import handleData from './api/handleData';

Vue.prototype.$http = request;//添加全局请求函数
Vue.prototype.$constant = constant;//添加全局常量
Vue.prototype.$messageBox = messageBox;//添加全局弹出框
Vue.prototype.$session=session;//添加全局session
Vue.prototype.$handleData=handleData;//添加全局处理数据函数
//注册全局hook 用于拦截
interceptor(Vue,router);
Vue.config.productionTip = false;
Vue.use(ElementUI);
/* eslint-disable no-new */
const vm=new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  watch:{
    $route(to,from){
      if(from.path !== '/'){
        if(to.name === 'login'){
          this.$router.go(0);
          console.log('hhh');
        }
      }
    },
    // $route (to,from){
    //   if(to.name !== from.name){
    //     let oldTarget = document.querySelector('.is-active');
    //     if(oldTarget){
    //       let index = oldTarget.className.indexOf(to.name);
    //       if( index == -1 ){
    //         let target = document.querySelector('.'+to.name);
    //         if(target){
    //           target.className = document.querySelector('.'+to.name).className + ' is-active';
    //         }
    //         let oldClass = oldTarget.className.split(' ');
    //         let newClass = oldClass.filter(function(val){
    //           return val !== 'is-active';
    //         })
    //         oldTarget.className = newClass.join(' ');
    //       }
    //     }else{
    //       let target = document.querySelector('.'+to.name);
    //       if(target){
    //         target.className = document.querySelector('.'+to.name).className + ' is-active';
    //       }
    //     }
    //   }
    // }
  },
  computed:{
  }
});
