webpackJsonp([0],{544:function(e,a,t){function o(e){t(692)}var r=t(204)(t(609),t(748),o,"data-v-6df58fba",null);e.exports=r.exports},552:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=t(559),r=t.n(o);a.default={props:["btnStatus","tableData","total","pageUrl","pageSize","currentPage","cgxpageHandle","cgxpagesizeHandle"],data:function(){return{flag:!0}},methods:{},components:{pagination:r.a}}},553:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:["total","pageSize","currentPage","pageUrl","btnStatus"],data:function(){return{paginationStatus:!0}},methods:{handleSizeChange:function(e){if(void 0!==this.$parent.$parent.$parent.$data.loading?this.$parent.$parent.$parent.$data.loading=!0:this.$parent.$parent.$data.loading=!0,this.pageUrl&&1===this.currentPage){var a=this;this.$http({url:this.pageUrl,vm:this,method:"GET",params:{page:this.currentPage,rows:e}},function(t){var o=null;t&&(t.pageSize=e,o=t),a.$emit("cgxpagesize",o)})}else this.$emit("cgxpagesize",{pageSize:e})},currentChangeHandle:function(e){if(this.pageUrl){var a=this;void 0!==this.$parent.$parent.$parent.$data.loading?this.$parent.$parent.$parent.$data.loading=!0:this.$parent.$parent.$data.loading=!0,this.$http({url:this.pageUrl,vm:this,method:"GET",params:{page:e,rows:this.pageSize}},function(t){var o=null;t&&(t.currentPage=e,o=t),a.$emit("cgxpage",o)})}},prestadBtn:function(){for(var e=document.querySelectorAll("td .cell span.is-checked"),a={ids:[],names:[]},t=0;t<e.length;t++){var o=e[t],r=o.parentElement.parentElement.parentElement.parentElement.querySelector("td:nth-child(3) span");a.names.push(r.textContent),a.ids.push(r.dataset.id)}if(this.$parent.$parent.$parent.$data.prestadObj=a,a.ids.length>0){var s=this;this.$messageBox({vm:this,message:"确定通过以下（“"+a.ids.length+"”位）用户的放款审核！",cancelButton:!0,title:"放款：",type:"info",confirmFun:function(){s.$constant.PRESTADSURE&&s.$http({url:s.$constant.PRESTADSURE,vm:s,method:"POST",data:{bills:a.ids.join(",")}},function(e){e?200===e.code?(s.$messageBox({vm:s,message:"放款成功！",title:"成功：",type:"success"}),s.currentChangeHandle(1)):s.$messageBox({vm:s,message:"放款失败！",title:"错误：",type:"error"}):s.$messageBox({vm:s,message:"服务器响应失败！",title:"提示：",type:"warning"})})}})}}},computed:{getTotal:function(){return void 0!==this.total?(0===this.total?this.paginationStatus=!1:this.paginationStatus=!0,this.total):0}},watch:{total:function(){this.getTotal}}}},554:function(e,a,t){a=e.exports=t(514)(!1),a.push([e.i,".block[data-v-1d09620f]{margin-top:16px;position:relative;width:100%}.block .el-pagination[data-v-1d09620f]{padding:0;text-align:right}.block .prestad-btn[data-v-1d09620f]{text-align:center;position:absolute;top:0;left:0;height:100%;padding-top:0;width:10%;padding-bottom:0;min-width:115px}",""])},555:function(e,a,t){a=e.exports=t(514)(!1),a.push([e.i,".content{height:100%;position:relative}.content td{height:34px;-moz-box-sizing:border-box;box-sizing:border-box}.content .el-table__body-wrapper{min-width:1150px;overflow:hidden}.content .el-table__body-wrapper td{text-align:center}.content .el-table{max-height:90%;overflow:auto;border-top:none}.content .el-table:before{top:34px;height:0!important}.content .el-table:after{width:0}.content .el-table__header-wrapper{height:34px;overflow:hidden;min-width:1150px;border:1px solid #dfe6ec;border-right:none;border-left:none}.content .el-table__header-wrapper th{height:100%;padding-top:2px;padding-bottom:2px;text-align:center}.content .el-table__empty-block{width:100%!important;height:33px;min-height:33px;-moz-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #dfe6ec;border-right:1px solid #dfe6ec}",""])},556:function(e,a,t){var o=t(554);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(515)("792a3262",o,!0)},557:function(e,a,t){var o=t(555);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(515)("28add056",o,!0)},558:function(e,a,t){function o(e){t(557)}var r=t(204)(t(552),t(561),o,null,null);e.exports=r.exports},559:function(e,a,t){function o(e){t(556)}var r=t(204)(t(553),t(560),o,"data-v-1d09620f",null);e.exports=r.exports},560:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.paginationStatus?t("div",{staticClass:"block"},[e.btnStatus?t("el-button",{staticClass:"prestad-btn",attrs:{type:"primary"},on:{click:e.prestadBtn}},[e._v("放款")]):e._e(),e._v(" "),t("el-pagination",{attrs:{total:e.getTotal,"page-size":e.pageSize,"current-page":e.currentPage,"page-sizes":[20,60,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"current-change":e.currentChangeHandle,"size-change":e.handleSizeChange}})],1):e._e()},staticRenderFns:[]}},561:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",fit:e.flag}},[e._t("default")],2),e._v(" "),t("pagination",{attrs:{total:e.total,pageUrl:e.pageUrl,currentPage:e.currentPage,pageSize:e.pageSize,btnStatus:e.btnStatus},on:{cgxpage:e.cgxpageHandle,cgxpagesize:e.cgxpagesizeHandle}})],1)},staticRenderFns:[]}},562:function(e,a,t){"use strict";function o(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=new Date(e),o=t.getFullYear(),r=t.getMonth()+1,s=t.getDate(),l=t.getHours(),d=t.getMinutes(),i=t.getSeconds();return r=r<10?"0"+r:r,s=s<10?"0"+s:s,l=l<10?"0"+l:l,d=d<10?"0"+d:d,i=i<10?"0"+i:i,a?o+"年"+r+"月"+s+"日 ":o+"年"+r+"月"+s+"日 "+l+":"+d+":"+i}a.a=o},568:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"userMsgBox",props:["title","userMsgBoxClass"],methods:{closeMsgBox:function(){var e=this.$router.currentRoute.params.mcId,a=this.$router.currentRoute.params.id,t=this.$router.currentRoute.params.name;if(void 0!==e&&void 0!==a&&void 0!==t)if("refundDetail"===t){var o=e.split("bs_b");this.$router.push({name:t,params:{billStatus:o[0],billId:o[1]}})}else"userDetail"===t?this.$router.push({name:t,params:{id:a}}):this.$router.push({name:t,params:{mcId:e,id:a}})}}}},569:function(e,a,t){a=e.exports=t(514)(!1),a.push([e.i,".user-msg-box{width:100%;height:100%;background-color:#fff;position:relative;-moz-box-sizing:border-box;box-sizing:border-box}.user-msg-box .close-msg-box{position:absolute;right:30px;top:5px;cursor:pointer;font-weight:400}.user-msg-box .el-card__header{padding:10px 0!important;width:100%;position:absolute;top:0;left:0}.user-msg-box .user-msg-box-header{font-weight:700;font-size:20px;position:relative}.user-msg-box .user-msg-box-header .el-icon-close{font-size:30px;position:absolute;top:5px;right:10px;background-color:#ccc;-moz-border-radius:15px;border-radius:15px;overflow:hidden;cursor:pointer}.user-msg-box .el-card__body{height:100%;padding:10px;-moz-box-sizing:border-box;box-sizing:border-box}.user-msg-box .user-msg-box-body{height:100%}",""])},570:function(e,a,t){var o=t(569);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(515)("dd45299e",o,!0)},571:function(e,a,t){function o(e){t(570)}var r=t(204)(t(568),t(572),o,null,null);e.exports=r.exports},572:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"user-msg-box",class:e.userMsgBoxClass},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix user-msg-box-header",slot:"header"},[t("span",{staticStyle:{"line-height":"30px"}},[e._v(e._s(e.title))]),e._v(" "),t("i",{staticClass:"close-msg-box",on:{click:e.closeMsgBox}},[e._v("返回")])]),e._v(" "),e._t("default")],2)],1)},staticRenderFns:[]}},609:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=t(571),r=t.n(o),s=t(719),l=t.n(s);a.default={name:"taobao",data:function(){return{title:"淘宝",userMsgBoxClass:"user-msg-box-taobao"}},components:{userMsgBox:r.a,taobaoDetail:l.a}}},610:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=t(558),r=t.n(o),s=t(562);a.default={name:"taobaoDetail",data:function(){return{totalOrders:0,totalAddress:0,pageUrlOrders:"",currentPageOrders:1,pageSizeOrders:20,pageUrlAddress:"",currentPageAddress:1,pageSizeAddress:20,taobaoBaseData:[],taobaoOrdersData:[],taobaoAddressData:[]}},mounted:function(){var e=this.$router.currentRoute.params.id;if(this.$constant.TAOBAOBASEDATA&&void 0!==e){var a=this;this.$http({url:this.$constant.TAOBAOBASEDATA,vm:a,method:"GET",params:{memberId:e}},function(e){if(e)if(200===e.code&&"成功"===e.message){if(e.data){var t=e.data;a.taobaoBaseData=[{name:a.$handleData(t.tbName),nike:a.$handleData(t.tbNike),phone:a.$handleData(t.tbPhoneNumber),email:a.$handleData(t.tbEmail),vipLevel:a.$handleData(t.vipLevel),vipCount:a.$handleData(t.vipCount)}]}}else a.taobaoBaseData=[];else a.taobaoBaseData=[],a.$messageBox({vm:a,message:"服务器响应失败！",title:"错误",type:"error"})})}if(this.$constant.TAOBAOORDERSDATA&&void 0!==e){var o=this;this.totalOrders=0,this.pageUrlOrders=this.$constant.TAOBAOORDERSDATA+"?id="+e,this.$http({url:this.$constant.TAOBAOORDERSDATA,vm:o,method:"GET",params:{id:e,page:this.currentPageOrders,rows:this.pageSizeOrders}},function(e){if(e)if(200===e.code&&"成功"===e.message)if(e.data){void 0!==e.data[0].total&&(o.totalOrders=e.data[0].total);for(var a=[],r=0;r<e.data.length;r++){var l=e.data[r];a.push({shopName:o.$handleData(l.sellerShopName),name:o.$handleData(l.itemName),url:o.$handleData(l.itemUrl),original:""===o.$handleData(l.original)?"":"￥ "+o.$handleData(l.original),realTotal:""===o.$handleData(l.realTotal)?"":"￥ "+o.$handleData(l.realTotal),quantity:o.$handleData(l.quantity),actualFee:""===o.$handleData(l.actualFee)?"":"￥ "+o.$handleData(l.actualFee),invoiceName:o.$handleData(l.invoiceName),createTime:""===o.$handleData(l.tradeCreateTime)?"":t.i(s.a)(o.$handleData(l.tradeCreateTime),!0),tradeText:o.$handleData(l.tradeText),deliverName:o.$handleData(l.deliverName),mobilePhone:o.$handleData(l.deliverMobilePhone),fixedPhone:o.$handleData(l.deliverFixedPhone),address:o.$handleData(l.deliverFullAddress)})}o.taobaoOrdersData=a}else o.taobaoOrdersData=[];else o.taobaoOrdersData=[];else o.taobaoOrdersData=[],o.totalOrders=0,o.$messageBox({vm:o,message:"服务器响应失败！",title:"错误",type:"error"})})}if(this.$constant.TAOBAOADDRESSDATA&&void 0!==e){var r=this;this.totalAddress=0,this.pageUrlAddress=this.$constant.TAOBAOADDRESSDATA+"?id="+e,this.$http({url:this.$constant.TAOBAOADDRESSDATA,vm:r,method:"GET",params:{id:e,page:this.currentPageAddress,rows:this.pageSizeAddress}},function(e){if(e)if(200===e.code&&"成功"===e.message)if(e.data){void 0!==e.data[0].total&&(r.totalAddress=e.data[0].total);for(var a=[],t=0;t<e.data.length;t++){var o=e.data[t];a.push({name:r.$handleData(o.name),address:r.$handleData(o.fullAddress),zipCode:r.$handleData(o.zipCode),phone:r.$handleData(o.phoneNumber),isDefault:1==r.$handleData(o.isDefault)?"是":"否"})}r.taobaoAddressData=a}else r.taobaoAddressData=[];else r.taobaoAddressData=[];else r.taobaoAddressData=[],r.totalAddress=0,r.$messageBox({vm:r,message:"服务器响应失败！",title:"错误",type:"error"})})}},methods:{cgxpageHandleOrders:function(e){var a=this;if(e){if(200===e.code&&"成功"===e.message)if(e.data){void 0!==e.data[0].total&&(a.totalOrders=e.data[0].total);for(var o=[],r=0;r<e.data.length;r++){var l=e.data[r];o.push({shopName:a.$handleData(l.sellerShopName),name:a.$handleData(l.itemName),url:a.$handleData(l.itemUrl),original:""===a.$handleData(l.original)?"":"￥ "+a.$handleData(l.original),realTotal:""===a.$handleData(l.realTotal)?"":"￥ "+a.$handleData(l.realTotal),quantity:a.$handleData(l.quantity),actualFee:""===a.$handleData(l.actualFee)?"":"￥ "+a.$handleData(l.actualFee),invoiceName:a.$handleData(l.invoiceName),createTime:""===a.$handleData(l.tradeCreateTime)?"":t.i(s.a)(a.$handleData(l.tradeCreateTime),!0),tradeText:a.$handleData(l.tradeText),deliverName:a.$handleData(l.deliverName),mobilePhone:a.$handleData(l.deliverMobilePhone),fixedPhone:a.$handleData(l.deliverFixedPhone),address:a.$handleData(l.deliverFullAddress)})}a.taobaoOrdersData=o}else a.taobaoOrdersData=[];else a.taobaoOrdersData=[];a.currentPageOrders=e.currentPage}else a.taobaoOrdersData=[],a.totalOrders=0,a.$messageBox({vm:a,message:"服务器响应失败！",title:"错误",type:"error"})},cgxpagesizeHandleOrders:function(e){var a=this;if(e){if(200===e.code&&"成功"===e.message)if(e.data){void 0!==e.data[0].total&&(a.totalOrders=e.data[0].total);for(var o=[],r=0;r<e.data.length;r++){var l=e.data[r];o.push({shopName:a.$handleData(l.sellerShopName),name:a.$handleData(l.itemName),url:a.$handleData(l.itemUrl),original:""===a.$handleData(l.original)?"":"￥ "+a.$handleData(l.original),realTotal:""===a.$handleData(l.realTotal)?"":"￥ "+a.$handleData(l.realTotal),quantity:a.$handleData(l.quantity),actualFee:""===a.$handleData(l.actualFee)?"":"￥ "+a.$handleData(l.actualFee),invoiceName:a.$handleData(l.invoiceName),createTime:""===a.$handleData(l.tradeCreateTime)?"":t.i(s.a)(a.$handleData(l.tradeCreateTime),!0),tradeText:a.$handleData(l.tradeText),deliverName:a.$handleData(l.deliverName),mobilePhone:a.$handleData(l.deliverMobilePhone),fixedPhone:a.$handleData(l.deliverFixedPhone),address:a.$handleData(l.deliverFullAddress)})}a.taobaoOrdersData=o}else a.taobaoOrdersData=[];else a.taobaoOrdersData=[];a.currentPageOrders=1,a.pageSizeOrders=e.pageSize}else a.taobaoOrdersData=[],a.totalOrders=0,a.$messageBox({vm:a,message:"服务器响应失败！",title:"错误",type:"error"})},cgxpageHandleAddress:function(e){var a=this;if(e){if(200===e.code&&"成功"===e.message)if(e.data){void 0!==e.data[0].total&&(a.totalAddress=e.data[0].total);for(var t=[],o=0;o<e.data.length;o++){var r=e.data[o];t.push({name:a.$handleData(r.name),address:a.$handleData(r.fullAddress),zipCode:a.$handleData(r.zipCode),phone:a.$handleData(r.phoneNumber),isDefault:1==a.$handleData(r.isDefault)?"是":"否"})}a.taobaoAddressData=t}else a.taobaoAddressData=[];else a.taobaoAddressData=[];a.currentPageAddress=e.currentPage}else a.taobaoAddressData=[],a.totalAddress=0,a.$messageBox({vm:a,message:"服务器响应失败！",title:"错误",type:"error"})},cgxpagesizeHandleAddress:function(e){var a=this;if(e){if(200===e.code&&"成功"===e.message)if(e.data){void 0!==e.data[0].total&&(a.totalAddress=e.data[0].total);for(var t=[],o=0;o<e.data.length;o++){var r=e.data[o];t.push({name:a.$handleData(r.name),address:a.$handleData(r.fullAddress),zipCode:a.$handleData(r.zipCode),phone:a.$handleData(r.phoneNumber),isDefault:1==a.$handleData(r.isDefault)?"是":"否"})}a.taobaoAddressData=t}else a.taobaoAddressData=[];else a.taobaoAddressData=[];a.currentPageAddress=1,a.pageSizeAddress=e.pageSize}else a.taobaoAddressData=[],a.totalAddress=0,a.$messageBox({vm:a,message:"服务器响应失败！",title:"错误",type:"error"})}},components:{defineContent:r.a}}},647:function(e,a,t){a=e.exports=t(514)(!1),a.push([e.i,".user-taobao-box-body .taobao-address,.user-taobao-box-body .taobao-base-message,.user-taobao-box-body .taobao-orders-detail{width:100%}.user-taobao-box-body .taobao-address dt,.user-taobao-box-body .taobao-base-message dt,.user-taobao-box-body .taobao-orders-detail dt{text-align:left;font-size:16px;height:30px;line-height:30px}.user-taobao-box-body .taobao-address dd,.user-taobao-box-body .taobao-base-message dd,.user-taobao-box-body .taobao-orders-detail dd{width:100%}.user-taobao-box-body .taobao-address table,.user-taobao-box-body .taobao-base-message table,.user-taobao-box-body .taobao-orders-detail table{width:100%!important}.user-taobao-box-body .taobao-address table .cell,.user-taobao-box-body .taobao-base-message table .cell,.user-taobao-box-body .taobao-orders-detail table .cell{text-align:center;height:20px;line-height:20px;width:100%!important;-moz-box-sizing:border-box;box-sizing:border-box;padding:0 5px}.user-taobao-box-body .taobao-address table td,.user-taobao-box-body .taobao-address table th,.user-taobao-box-body .taobao-address table tr,.user-taobao-box-body .taobao-base-message table td,.user-taobao-box-body .taobao-base-message table th,.user-taobao-box-body .taobao-base-message table tr,.user-taobao-box-body .taobao-orders-detail table td,.user-taobao-box-body .taobao-orders-detail table th,.user-taobao-box-body .taobao-orders-detail table tr{height:30px}.user-taobao-box-body .taobao-address .el-table__header-wrapper,.user-taobao-box-body .taobao-base-message .el-table__header-wrapper,.user-taobao-box-body .taobao-orders-detail .el-table__header-wrapper{height:31px}.user-taobao-box-body .taobao-address .el-table__empty-block,.user-taobao-box-body .taobao-base-message .el-table__empty-block,.user-taobao-box-body .taobao-orders-detail .el-table__empty-block{width:100%!important;height:30px;min-height:30px}.user-taobao-box-body .taobao-address .block,.user-taobao-box-body .taobao-base-message .block,.user-taobao-box-body .taobao-orders-detail .block{margin-top:10px!important}.user-taobao-box-body .taobao-base-message dd{height:84px;width:100%;overflow-x:auto}.user-taobao-box-body .taobao-base-message dd .el-table{min-width:1300px;height:64px}.user-taobao-box-body .taobao-address dd,.user-taobao-box-body .taobao-orders-detail dd{width:100%}.user-taobao-box-body .taobao-address dd .el-table,.user-taobao-box-body .taobao-orders-detail dd .el-table{overflow:auto;max-height:340px}.user-taobao-box-body .taobao-address dd .el-table__body-wrapper,.user-taobao-box-body .taobao-address dd .el-table__header-wrapper,.user-taobao-box-body .taobao-orders-detail dd .el-table__body-wrapper,.user-taobao-box-body .taobao-orders-detail dd .el-table__header-wrapper{min-width:1300px}.user-taobao-box-body .taobao-orders-detail dd .el-table{max-height:640px}.user-msg-box-taobao .box-card{width:100%;margin:0 auto;padding-top:51px;position:relative;-moz-box-sizing:border-box;box-sizing:border-box}",""])},648:function(e,a,t){a=e.exports=t(514)(!1),a.push([e.i,"",""])},691:function(e,a,t){var o=t(647);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(515)("0de52885",o,!0)},692:function(e,a,t){var o=t(648);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(515)("2e50af2a",o,!0)},719:function(e,a,t){function o(e){t(691)}var r=t(204)(t(610),t(747),o,null,null);e.exports=r.exports},747:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"user-msg-box-body user-taobao-box-body"},[t("dl",{staticClass:"taobao-base-message"},[t("dt",[e._v("基本信息：")]),e._v(" "),t("dd",[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.taobaoBaseData,border:"",fit:!1}},[t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"15%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"phone",label:"电话",width:"20%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"email",label:"邮箱",width:"20%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"nike",label:"昵称",width:"15%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"vipLevel",label:"vip等级",width:"15%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"vipCount",label:"vip值",width:"15%","show-overflow-tooltip":""}})],1)],1)]),e._v(" "),t("dl",{staticClass:"taobao-orders-detail"},[t("dt",[e._v("订单列表：")]),e._v(" "),t("dd",[t("define-content",{attrs:{cgxpageHandle:e.cgxpageHandleOrders,tableData:e.taobaoOrdersData,total:e.totalOrders,cgxpagesizeHandle:e.cgxpagesizeHandleOrders,pageUrl:e.pageUrlOrders,currentPage:e.currentPageOrders,pageSize:e.pageSizeOrders}},[t("el-table-column",{attrs:{prop:"shopName",label:"店铺名称",width:"5%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"商品名称",width:"14%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"url",label:"商品地址",width:"10%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"original",label:"商品价格",width:"5%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"realTotal",label:"交易价格",width:"5%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"quantity",label:"商品数量",width:"5%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"actualFee",label:"订单金额",width:"5%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"invoiceName",label:"发票抬头",width:"5%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"createTime",label:"交易时间",width:"10%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"tradeText",label:"交易状态",width:"5%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"deliverName",label:"收货人",width:"5%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"mobilePhone",label:"收货人移动电话",width:"8%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"fixedPhone",label:"收货人固定电话",width:"8%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"address",label:"收获地址",width:"10%","show-overflow-tooltip":""}})],1)],1)]),e._v(" "),t("dl",{staticClass:"taobao-address"},[t("dt",[e._v("收获地址：")]),e._v(" "),t("dd",[t("define-content",{attrs:{cgxpageHandle:e.cgxpageHandleAddress,tableData:e.taobaoAddressData,total:e.totalAddress,cgxpagesizeHandle:e.cgxpagesizeHandleAddress,pageUrl:e.pageUrlAddress,currentPage:e.currentPageAddress,pageSize:e.pageSizeAddress}},[t("el-table-column",{attrs:{prop:"name",label:"收货人",width:"20%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"phone",label:"电话",width:"15%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"zipCode",label:"邮编",width:"15%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"address",label:"地址",width:"35%","show-overflow-tooltip":""}}),e._v(" "),t("el-table-column",{attrs:{prop:"isDefault",label:"是否默认收货地址",width:"15%","show-overflow-tooltip":""}})],1)],1)])])},staticRenderFns:[]}},748:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("user-msg-box",{attrs:{title:e.title,userMsgBoxClass:e.userMsgBoxClass}},[t("taobao-detail")],1)},staticRenderFns:[]}}});