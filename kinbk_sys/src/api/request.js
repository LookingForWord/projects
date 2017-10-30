/**
 * 请求数据模块
 * @param config Object
 */
import axios from 'axios';
import Qs from 'qs';
export default function request({
                                  url = '',
                                  method = 'GET',
                                  baseURL = '',
                                  headers = {'X-Requested-With': 'XMLHttpRequest'},
                                  params = {},
                                  data = {},
                                  timeout = 5000,
                                  responseType = 'json',
                                  vm = null,
                                  transformRequestFun = function (data) {
                                    // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，
                                    //这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
                                    return Qs.stringify(data);
                                  },
                                  transformResponseFun = function (data) {
                                    // 这里提前处理返回的数据
                                    if (typeof data === 'string') {
                                      data = JSON.parse(data);
                                    }
                                    successFun(data);
                                  },
                                }, successFun) {
  axios.request({
    url,//请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
    method, //请求方法 默认 get
    baseURL,// 基础url前缀　
    headers,// 请求头信息
    params,//parameter参数
    data,//post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
    timeout,//设置超时时间
    responseType, // //返回数据类型 默认 json
    transformRequest: [transformRequestFun],
    transformResponse: [transformResponseFun],
  }).catch(function (err) {//捕获错误
    if (vm) {
      //vm.$messageBox({vm,title:"错误",message:"服务器响应失败！",type:"error"});
      console.log(err);
    }
  });
}
