webpackJsonp([6],{529:function(t,e,a){function o(t){a(689)}var i=a(204)(a(593),a(745),o,null,null);t.exports=i.exports},552:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(559),i=a.n(o);e.default={props:["btnStatus","tableData","total","pageUrl","pageSize","currentPage","cgxpageHandle","cgxpagesizeHandle"],data:function(){return{flag:!0}},methods:{},components:{pagination:i.a}}},553:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["total","pageSize","currentPage","pageUrl","btnStatus"],data:function(){return{paginationStatus:!0}},methods:{handleSizeChange:function(t){if(void 0!==this.$parent.$parent.$parent.$data.loading?this.$parent.$parent.$parent.$data.loading=!0:this.$parent.$parent.$data.loading=!0,this.pageUrl&&1===this.currentPage){var e=this;this.$http({url:this.pageUrl,vm:this,method:"GET",params:{page:this.currentPage,rows:t}},function(a){var o=null;a&&(a.pageSize=t,o=a),e.$emit("cgxpagesize",o)})}else this.$emit("cgxpagesize",{pageSize:t})},currentChangeHandle:function(t){if(this.pageUrl){var e=this;void 0!==this.$parent.$parent.$parent.$data.loading?this.$parent.$parent.$parent.$data.loading=!0:this.$parent.$parent.$data.loading=!0,this.$http({url:this.pageUrl,vm:this,method:"GET",params:{page:t,rows:this.pageSize}},function(a){var o=null;a&&(a.currentPage=t,o=a),e.$emit("cgxpage",o)})}},prestadBtn:function(){for(var t=document.querySelectorAll("td .cell span.is-checked"),e={ids:[],names:[]},a=0;a<t.length;a++){var o=t[a],i=o.parentElement.parentElement.parentElement.parentElement.querySelector("td:nth-child(3) span");e.names.push(i.textContent),e.ids.push(i.dataset.id)}if(this.$parent.$parent.$parent.$data.prestadObj=e,e.ids.length>0){var r=this;this.$messageBox({vm:this,message:"确定通过以下（“"+e.ids.length+"”位）用户的放款审核！",cancelButton:!0,title:"放款：",type:"info",confirmFun:function(){r.$constant.PRESTADSURE&&r.$http({url:r.$constant.PRESTADSURE,vm:r,method:"POST",data:{bills:e.ids.join(",")}},function(t){t?200===t.code?(r.$messageBox({vm:r,message:"放款成功！",title:"成功：",type:"success"}),r.currentChangeHandle(1)):r.$messageBox({vm:r,message:"放款失败！",title:"错误：",type:"error"}):r.$messageBox({vm:r,message:"服务器响应失败！",title:"提示：",type:"warning"})})}})}}},computed:{getTotal:function(){return void 0!==this.total?(0===this.total?this.paginationStatus=!1:this.paginationStatus=!0,this.total):0}},watch:{total:function(){this.getTotal}}}},554:function(t,e,a){e=t.exports=a(514)(!1),e.push([t.i,".block[data-v-1d09620f]{margin-top:16px;position:relative;width:100%}.block .el-pagination[data-v-1d09620f]{padding:0;text-align:right}.block .prestad-btn[data-v-1d09620f]{text-align:center;position:absolute;top:0;left:0;height:100%;padding-top:0;width:10%;padding-bottom:0;min-width:115px}",""])},555:function(t,e,a){e=t.exports=a(514)(!1),e.push([t.i,".content{height:100%;position:relative}.content td{height:34px;-moz-box-sizing:border-box;box-sizing:border-box}.content .el-table__body-wrapper{min-width:1150px;overflow:hidden}.content .el-table__body-wrapper td{text-align:center}.content .el-table{max-height:90%;overflow:auto;border-top:none}.content .el-table:before{top:34px;height:0!important}.content .el-table:after{width:0}.content .el-table__header-wrapper{height:34px;overflow:hidden;min-width:1150px;border:1px solid #dfe6ec;border-right:none;border-left:none}.content .el-table__header-wrapper th{height:100%;padding-top:2px;padding-bottom:2px;text-align:center}.content .el-table__empty-block{width:100%!important;height:33px;min-height:33px;-moz-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #dfe6ec;border-right:1px solid #dfe6ec}",""])},556:function(t,e,a){var o=a(554);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(515)("792a3262",o,!0)},557:function(t,e,a){var o=a(555);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(515)("28add056",o,!0)},558:function(t,e,a){function o(t){a(557)}var i=a(204)(a(552),a(561),o,null,null);t.exports=i.exports},559:function(t,e,a){function o(t){a(556)}var i=a(204)(a(553),a(560),o,"data-v-1d09620f",null);t.exports=i.exports},560:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.paginationStatus?a("div",{staticClass:"block"},[t.btnStatus?a("el-button",{staticClass:"prestad-btn",attrs:{type:"primary"},on:{click:t.prestadBtn}},[t._v("放款")]):t._e(),t._v(" "),a("el-pagination",{attrs:{total:t.getTotal,"page-size":t.pageSize,"current-page":t.currentPage,"page-sizes":[20,60,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"current-change":t.currentChangeHandle,"size-change":t.handleSizeChange}})],1):t._e()},staticRenderFns:[]}},561:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",fit:t.flag}},[t._t("default")],2),t._v(" "),a("pagination",{attrs:{total:t.total,pageUrl:t.pageUrl,currentPage:t.currentPage,pageSize:t.pageSize,btnStatus:t.btnStatus},on:{cgxpage:t.cgxpageHandle,cgxpagesize:t.cgxpagesizeHandle}})],1)},staticRenderFns:[]}},562:function(t,e,a){"use strict";function o(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=new Date(t),o=a.getFullYear(),i=a.getMonth()+1,r=a.getDate(),n=a.getHours(),d=a.getMinutes(),l=a.getSeconds();return i=i<10?"0"+i:i,r=r<10?"0"+r:r,n=n<10?"0"+n:n,d=d<10?"0"+d:d,l=l<10?"0"+l:l,e?o+"年"+i+"月"+r+"日 ":o+"年"+i+"月"+r+"日 "+n+":"+d+":"+l}e.a=o},563:function(t,e,a){"use strict";function o(t){var e=t.vm,a=t.url,o=t.deleteId,i=t.callback,n=t.state,d=void 0===n?0:n;if(void 0!==a&&void 0!==o){if(o instanceof Array&&o.length<=0)return;e.$messageBox({vm:e,message:"您是否确定删除该条数据！",title:"提示：",type:"warning",cancelButton:!0,confirmFun:function(){e.$http({url:a,vm:e,method:"DELETE",params:r()({},0==d?"ids":"typeId",o)},function(t){!0===t?(e.$messageBox({vm:e,message:"删除成功！",title:"提示：",type:"warning",loadingState:!1}),i()):e.$messageBox({vm:e,message:"删除失败！",title:"提示：",type:"warning"})})}})}}e.a=o;var i=a(565),r=a.n(i)},564:function(t,e,a){t.exports={default:a(566),__esModule:!0}},565:function(t,e,a){"use strict";e.__esModule=!0;var o=a(564),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=function(t,e,a){return e in t?(0,i.default)(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},566:function(t,e,a){a(567);var o=a(38).Object;t.exports=function(t,e,a){return o.defineProperty(t,e,a)}},567:function(t,e,a){var o=a(63);o(o.S+o.F*!a(58),"Object",{defineProperty:a(64).f})},573:function(t,e,a){"use strict";function o(t,e){switch(t.code){case-100:"unauthorized"===t.message&&e.$messageBox({type:"warning",vm:e,message:"本次登录已过期，请再次登录！",title:"提示：",confirmFun:function(){e.$session({key:"loginMsg",remove:!0}),e.$router.replace({name:"login"})},cancelFun:function(){e.$session({key:"loginMsg",remove:!0}),e.$router.replace({name:"login"})}})}}e.a=o},593:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(558),i=a.n(o),r=a(573),n=a(563),d=a(562);e.default={data:function(){return{oaAddCard:!1,oaDetailCard:!1,oaEditCard:!1,oaManageAction:"",editRules:{name:[{validator:function(t,e,a){""===e?a(new Error("请输入姓名！")):a()},trigger:"blur"}],phone:[{validator:function(t,e,a){""===e?a(new Error("请输入电话号！")):!0===/^1[3|4|5|7|8][0-9]{9}$/.test(e)?a():a(new Error("手机号输入错误！"))},trigger:"blur"}],identityCard:[{validator:function(t,e,a){""===e?a(new Error("请输入身份证号！")):!0===/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e)?a():a(new Error("身份证输入错误！"))},trigger:"blur"}],poststyle:[{validator:function(t,e,a){""===e?a(new Error("请输入职务类型！")):a()},trigger:"blur"}],department:[{validator:function(t,e,a){""===e?a(new Error("请输入对应部门！")):a()},trigger:"blur"}],position:[{validator:function(t,e,a){""===e?a(new Error("请输入对应岗位！")):a()},trigger:"blur"}],entryDate:[{validator:function(t,e,a){""===e?a(new Error("请选择入职时间！")):a()},trigger:"blur"}]},tableData:[],oaAddForm:{id:"",name:"",phone:"",identityCard:"",department:"",position:"",entryDate:"",poststyle:""},headers:{},oaDetailForm:{id:"",name:"",phone:"",identityCard:"",position:"",department:"",entryDate:"",poststyle:""},oaEditForm:{id:"",name:"",phone:"",identityCard:"",department:"",position:"",entryDate:"",poststyle:""},oaEditCopyForm:{id:"",name:"",phone:"",department:"",identityCard:"",position:"",entryDate:"",poststyle:""},keywords:"",pageUrl:"",total:0,loading:!1,currentPage:1,pageSize:20,progressState:{title:"提示：",message:"文件上传中，请稍等！",type:"warning"}}},mounted:function(){this.$parent.menuLists=[{title:"首页",url:"home"},{title:"OA管理",url:"oaDataManage"}],this.$constant.OAUPLOAD&&(this.oaManageAction=this.$constant.OAUPLOAD);var t=this.$session({key:"loginMsg"});if(t&&void 0!==t.token?this.headers={Authorization:t.token}:this.headers={},this.$constant.OAMANAGE){var e=this;this.loading=!0,this.total=0,this.pageUrl=this.$constant.OAMANAGE,this.$http({url:this.$constant.OAMANAGE,vm:e,method:"GET",params:{page:this.currentPage,rows:this.pageSize}},function(t){if(t){if(200===t.code&&"成功"===t.message)if(t.data&&t.data.length>0){void 0!==t.data[0].total&&(e.total=t.data[0].total);for(var o=[],i=0;i<t.data.length;i++){var r=t.data[i];o.push({id:e.$handleData(r.id),name:e.$handleData(r.name),phone:e.$handleData(r.mobile),identityCard:e.$handleData(r.idCard),department:e.$handleData(r.department),position:e.$handleData(r.post),entryDate:""===e.$handleData(r.entryTime)?"":a.i(d.a)(e.$handleData(r.entryTime),!0),poststyle:e.$handleData(r.poststyle)})}e.tableData=o}else e.tableData=[];else e.tableData=[];e.loading=!1}else e.tableData=[],e.total=0,e.$messageBox({vm:e,message:"服务器响应失败！",title:"错误",type:"error"})})}},methods:{uploadProgress:function(t){},uploadSuccess:function(t){var e=this;t?200===t.code?(e.$messageBox({vm:e,message:"文件上传成功！",title:"成功：",type:"success",loadingState:!1}),e.getDataList()):-100===t.code?a.i(r.a)(t,e):e.$messageBox({vm:e,message:"文件上传失败！",title:"错误：",type:"error"}):e.$messageBox({vm:e,message:"文件上传失败！",title:"错误：",type:"error"})},uploadError:function(t){t&&this.$messageBox({vm:this,message:"文件上传失败！",title:"错误：",type:"error"})},beforeUpload:function(t){if(!t||""==t.name)return this.$messageBox({vm:this,title:"错误：",message:"文件上传失败，请再次上传！",type:"error"}),!1;return new RegExp("(.xls|.xlsx)$").test(t.name.toLowerCase())?void 0:(this.$messageBox({vm:this,title:"错误：",message:"文件不合法，请上传以xls、xlsx为后缀的文件！",type:"error"}),!1)},submitSure:function(t){var e=this,o=this;this.$refs[t].validate(function(i){if(!i)return!1;var r=null;if("oaAddForm"===t)r=e.oaAddForm;else{if("oaEditForm"!==t)return;for(var n in e.oaEditForm)if("entryDate"===n){var l=new Date(e.oaEditForm[n]).getTime()!==new Date(e.oaEditCopyForm[n]).getTime();if(l){r=e.oaEditForm;break}}else if(e.oaEditForm[n]!==e.oaEditCopyForm[n]){r=e.oaEditForm;break}}e.$constant.OAMANAGESAVE&&r&&""!==r.id?e.$http({url:e.$constant.OAMANAGESAVE,vm:o,method:"POST",data:{id:r.id,name:r.name,mobile:r.phone,idCard:r.identityCard,department:r.department,post:r.position,entryTime:""===e.$handleData(r.entryDate)?"":a.i(d.a)(r.entryDate,!0),poststyle:r.poststyle}},function(e){if(!0===e){if(o.$messageBox({vm:o,message:"oaAddForm"===t?"新建成功！":"oaEditForm"===t?"编辑成功！":"成功！",title:"提示：",type:"warning",loadingState:!1}),"oaAddForm"===t)o.closeBtn("oaAddCard");else{if("oaEditForm"!==t)return;o.closeBtn("oaEditCard")}o.getDataList()}else o.$messageBox({vm:o,message:"oaAddForm"===t?"新建失败！":"oaEditForm"===t?"编辑失败！":"失败！",title:"提示：",type:"warning"}),o.submitReset(t)}):"oaEditForm"===t&&o.closeBtn("oaEditCard")})},submitReset:function(t){"oaAddForm"===t?this.$data[t].id&&(this.$data[t]={id:this.$data[t].id,name:"",phone:"",identityCard:"",position:"",department:"",entryDate:"",poststyle:""}):"oaEditForm"===t&&this.$data.oaEditCopyForm&&this.$data.oaEditCopyForm.id&&(this.$data[t]={id:this.$data.oaEditCopyForm.id,name:this.$data.oaEditCopyForm.name,phone:this.$data.oaEditCopyForm.phone,department:this.$data.oaEditCopyForm.department,identityCard:this.$data.oaEditCopyForm.identityCard,position:this.$data.oaEditCopyForm.position,entryDate:this.$data.oaEditCopyForm.entryDate,poststyle:this.$data.oaEditCopyForm.poststyle}),this.$refs[t].resetFields()},keywordsSearchClick:function(){this.$messageBox({vm:this,message:"暂不支持关键词搜索！",title:"提示：",type:"warning"})},deleteSingleBtn:function(t){a.i(n.a)({vm:this,url:this.$constant.OAMANAGEDELETE,deleteId:t,callback:this.getDataList})},closeBtn:function(t){if(void 0!==t&&this.$data[t]){var e={id:"",name:"",phone:"",identityCard:"",department:"",position:"",entryDate:"",poststyle:""};if("oaAddCard"===t)this.oaAddForm=e;else if("oaEditCard"===t)this.oaEditForm=e,this.oaEditCopyForm={id:"",name:"",phone:"",department:"",identityCard:"",position:"",entryDate:"",poststyle:""};else{if("oaDetailCard"!==t)return;this.oaDetailForm=e}this.$data[t]=!1}},openBtn:function(t,e){var a=this;this.$data[t]||this.$constant.OAMANAGEINNIT&&this.$http({url:this.$constant.OAMANAGEINNIT,vm:a,method:"GET",params:{id:void 0!==e?e:""}},function(e){if(e&&200===e.code&&"成功"===e.message){if(e.data&&e.data.employee){var o=e.data.employee,i={id:a.$handleData(o.id),name:a.$handleData(o.name),phone:a.$handleData(o.mobile),department:a.$handleData(o.department),identityCard:a.$handleData(o.idCard),position:a.$handleData(o.post),entryDate:""===a.$handleData(o.entryTime)?"":new Date(o.entryTime),poststyle:a.$handleData(o.poststyle)};if(void 0!==i.id){if("oaAddCard"===t)a.oaAddForm=i;else if("oaEditCard"===t)a.oaEditForm=i,a.oaEditCopyForm={id:a.$handleData(o.id),name:a.$handleData(o.name),phone:a.$handleData(o.mobile),department:a.$handleData(o.department),identityCard:a.$handleData(o.idCard),position:a.$handleData(o.post),entryDate:new Date(o.entryTime),poststyle:a.$handleData(o.poststyle)};else{if("oaDetailCard"!==t)return;a.oaDetailForm=i}a.$data[t]=!0}}}else a.$messageBox({vm:a,message:"服务器响应失败！",title:"错误",type:"error"})})},cgxpageHandle:function(t){var e=this;if(t){if(200===t.code&&"成功"===t.message)if(t.data&&t.data.length>0){void 0!==t.data[0].total&&(e.total=t.data[0].total);for(var o=[],i=0;i<t.data.length;i++){var r=t.data[i];o.push({id:e.$handleData(r.id),name:e.$handleData(r.name),phone:e.$handleData(r.mobile),department:e.$handleData(r.department),identityCard:e.$handleData(r.idCard),position:e.$handleData(r.post),entryDate:""===e.$handleData(r.entryTime)?"":a.i(d.a)(e.$handleData(r.entryTime),!0),poststyle:e.$handleData(r.poststyle)})}e.tableData=o}else e.tableData=[];else e.tableData=[];e.loading=!1,e.currentPage=t.currentPage}else e.tableData=[],e.total=0,e.$messageBox({vm:e,message:"服务器响应失败！",title:"错误",type:"error"})},cgxpagesizeHandle:function(t){var e=this;if(t){if(200===t.code&&"成功"===t.message)if(t.data&&t.data.length>0){void 0!==t.data[0].total&&(e.total=t.data[0].total);for(var o=[],i=0;i<t.data.length;i++){var r=t.data[i];o.push({id:e.$handleData(r.id),name:e.$handleData(r.name),phone:e.$handleData(r.mobile),department:e.$handleData(r.department),identityCard:e.$handleData(r.idCard),position:e.$handleData(r.post),entryDate:""===e.$handleData(r.entryTime)?"":a.i(d.a)(e.$handleData(r.entryTime),!0),poststyle:e.$handleData(r.poststyle)})}e.tableData=o}else e.tableData=[];else e.tableData=[];e.loading=!1,e.currentPage=1,e.pageSize=t.pageSize}else e.tableData=[],e.total=0,e.$messageBox({vm:e,message:"服务器响应失败！",title:"错误",type:"error"})},getDataList:function(){if(this.$constant.OAMANAGE){var t=this;this.loading=!0,this.total=0,this.pageUrl=this.$constant.OAMANAGE,this.$http({url:this.$constant.OAMANAGE,vm:t,method:"GET",params:{page:1,rows:this.pageSize}},function(e){if(e){if(200===e.code&&"成功"===e.message)if(e.data&&e.data.length>0){void 0!==e.data[0].total&&(t.total=e.data[0].total);for(var o=[],i=0;i<e.data.length;i++){var r=e.data[i];o.push({id:t.$handleData(r.id),name:t.$handleData(r.name),phone:t.$handleData(r.mobile),department:t.$handleData(r.department),identityCard:t.$handleData(r.idCard),position:t.$handleData(r.post),entryDate:""===t.$handleData(r.entryTime)?"":a.i(d.a)(t.$handleData(r.entryTime),!0),poststyle:t.$handleData(r.poststyle)})}t.tableData=o,t.currentPage=1}else t.tableData=[];else t.tableData=[];t.loading=!1}else t.tableData=[],t.total=0,t.$messageBox({vm:t,message:"服务器响应失败！",title:"错误",type:"error"})})}}},components:{defineContent:i.a},computed:{getFormat:function(){return""===this.$handleData(this.oaDetailForm.entryDate)?"":a.i(d.a)(this.$handleData(this.oaDetailForm.entryDate),!0)}}}},645:function(t,e,a){e=t.exports=a(514)(!1),e.push([t.i,".oa-card{position:relative;padding:20px!important;padding-top:66px!important}.oa-card,.oa-card>.el-card__body{-moz-box-sizing:border-box;box-sizing:border-box;height:100%}.oa-card>.el-card__body{padding:0!important}.oa-card .oa-add-btn{margin-left:20px}.oa-card>.el-card__header{padding:0!important;height:36px;position:absolute;border:none;top:20px;left:20px}.oa-card .oa-card-header{height:36px;overflow:hidden;text-align:left}.oa-card .oa-card-header>div{float:left}.oa-card .oa-card-header .el-upload .el-button{height:36px}.oa-card .oa-card-body{height:100%}.oa-card .el-button i{margin-right:6px}.oa-card .el-input{width:260px;margin-left:20px}.oa-card div.cell,.oa-card table{width:100%!important}.oa-card div.cell{padding:0 5px;-moz-box-sizing:border-box;box-sizing:border-box}.oa-card div.cell span{cursor:pointer;margin-left:10px;display:inline-block;height:24px;width:60px;line-height:24px;text-align:center}.oa-card div.cell span:first-child{margin-left:0}.oa-card div.cell span i{margin-right:5px}.oa-card .oa-add,.oa-card .oa-detail,.oa-card .oa-edit{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.4)}.oa-add-card{width:500px;height:436px;position:absolute;top:50%;left:50%;margin-top:-218px;margin-left:-250px}.oa-add-card .el-card__header{padding:10px;font-size:18px}.oa-add-card .el-button+.el-button{margin-left:50px}.oa-add-card .oa-add-card-header{height:30px;line-height:30px;position:relative}.oa-add-card .oa-add-card-header i{font-size:28px;position:absolute;top:1px;right:1px;cursor:pointer}.oa-add-card .el-card__body{padding:10px!important;height:387px;overflow:auto;-moz-box-sizing:border-box;box-sizing:border-box}.oa-add-card .el-card__body .el-input{width:100%;margin-left:0}.oa-add-card .el-card__body .el-radio-group{padding:0 20px;width:260px;-moz-box-sizing:border-box;box-sizing:border-box}.oa-add-card .el-card__body .float-first{margin-right:78px}.oa-add-card .el-card__body .float-second{margin-right:88px}.oa-add-card .el-card__body .radio-el-form-item{text-align:left}",""])},689:function(t,e,a){var o=a(645);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(515)("7a1f323f",o,!0)},745:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"box-card oa-card"},[a("div",{staticClass:"clearfix oa-card-header",slot:"header"},[a("el-upload",{ref:"uploadExcel",attrs:{action:t.oaManageAction,"show-file-list":!1,headers:t.headers,"before-upload":t.beforeUpload,"on-success":t.uploadSuccess,"on-error":t.uploadError,"on-progress":t.uploadProgress}},[a("el-button",{attrs:{size:"small"},slot:"trigger"},[a("i",{staticClass:"el-icon-upload2"}),t._v("上传Excel")])],1)],1),t._v(" "),a("div",{staticClass:"oa-card-body"},[a("define-content",{attrs:{cgxpageHandle:t.cgxpageHandle,tableData:t.tableData,total:t.total,pageUrl:t.pageUrl,currentPage:t.currentPage,pageSize:t.pageSize,cgxpagesizeHandle:t.cgxpagesizeHandle}},[a("el-table-column",{attrs:{type:"index",label:"编号",width:"7%","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"7%","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"手机",width:"11%","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"identityCard",label:"身份证号码",width:"15%","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"poststyle",label:"职务类别",width:"10%","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"department",label:"部门",width:"10%","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"position",label:"岗位",width:"10%","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"entryDate",label:"入职时间",width:"10%","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{staticClass:"operation",attrs:{label:"操作",width:"20%","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{on:{click:function(a){t.openBtn("oaDetailCard",e.row.id)}}},[a("i",{staticClass:"el-icon-view"}),t._v("查看")])]}}])})],1)],1),t._v(" "),t.oaAddCard?a("div",{staticClass:"oa-add"},[a("el-card",{staticClass:"box-card oa-add-card"},[a("div",{staticClass:"clearfix oa-add-card-header",slot:"header"},[a("span",[t._v("新   建")]),t._v(" "),a("i",{staticClass:"el-icon-circle-close",on:{click:function(e){t.closeBtn("oaAddCard")}}})]),t._v(" "),a("div",{staticClass:"oa-add-card-body"},[a("el-form",{ref:"oaAddForm",attrs:{rules:t.editRules,model:t.oaAddForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"姓名：",prop:"name"}},[a("el-input",{model:{value:t.oaAddForm.name,callback:function(e){t.oaAddForm.name="string"==typeof e?e.trim():e},expression:"oaAddForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"手机：",prop:"phone"}},[a("el-input",{model:{value:t.oaAddForm.phone,callback:function(e){t.oaAddForm.phone="string"==typeof e?e.trim():e},expression:"oaAddForm.phone"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"身份证号：",prop:"identityCard"}},[a("el-input",{model:{value:t.oaAddForm.identityCard,callback:function(e){t.oaAddForm.identityCard="string"==typeof e?e.trim():e},expression:"oaAddForm.identityCard"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"职务类别：",prop:"poststyle"}},[a("el-input",{model:{value:t.oaAddForm.poststyle,callback:function(e){t.oaAddForm.poststyle="string"==typeof e?e.trim():e},expression:"oaAddForm.poststyle"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"部门：",prop:"department"}},[a("el-input",{model:{value:t.oaAddForm.department,callback:function(e){t.oaAddForm.department="string"==typeof e?e.trim():e},expression:"oaAddForm.department"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"岗位：",prop:"position"}},[a("el-input",{model:{value:t.oaAddForm.position,callback:function(e){t.oaAddForm.position="string"==typeof e?e.trim():e},expression:"oaAddForm.position"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"入职时间：",prop:"entryDate"}},[a("el-date-picker",{attrs:{type:"date",editable:!1,format:"yyyy年MM月dd日"},model:{value:t.oaAddForm.entryDate,callback:function(e){t.oaAddForm.entryDate=e},expression:"oaAddForm.entryDate"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){e.preventDefault(),t.submitSure("oaAddForm")}}},[t._v("确   定")]),t._v(" "),a("el-button",{on:{click:function(e){e.preventDefault(),t.submitReset("oaAddForm")}}},[t._v("重   置")])],1)],1)],1)])],1):t._e(),t._v(" "),t.oaEditCard?a("div",{staticClass:"oa-edit"},[a("el-card",{staticClass:"box-card oa-add-card"},[a("div",{staticClass:"clearfix oa-add-card-header",slot:"header"},[a("span",[t._v("编   辑")]),t._v(" "),a("i",{staticClass:"el-icon-circle-close",on:{click:function(e){t.closeBtn("oaEditCard")}}})]),t._v(" "),a("div",{staticClass:"oa-add-card-body"},[a("el-form",{ref:"oaEditForm",attrs:{rules:t.editRules,model:t.oaEditForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"姓名：",prop:"name"}},[a("el-input",{model:{value:t.oaEditForm.name,callback:function(e){t.oaEditForm.name="string"==typeof e?e.trim():e},expression:"oaEditForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"手机：",prop:"phone"}},[a("el-input",{model:{value:t.oaEditForm.phone,callback:function(e){t.oaEditForm.phone="string"==typeof e?e.trim():e},expression:"oaEditForm.phone"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"身份证号：",prop:"identityCard"}},[a("el-input",{model:{value:t.oaEditForm.identityCard,callback:function(e){t.oaEditForm.identityCard="string"==typeof e?e.trim():e},expression:"oaEditForm.identityCard"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"职务类别：",prop:"poststyle"}},[a("el-input",{model:{value:t.oaEditForm.poststyle,callback:function(e){t.oaEditForm.poststyle="string"==typeof e?e.trim():e},expression:"oaEditForm.poststyle"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"部门：",prop:"department"}},[a("el-input",{model:{value:t.oaEditForm.department,callback:function(e){t.oaEditForm.department="string"==typeof e?e.trim():e},expression:"oaEditForm.department"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"岗位：",prop:"position"}},[a("el-input",{model:{value:t.oaEditForm.position,callback:function(e){t.oaEditForm.position="string"==typeof e?e.trim():e},expression:"oaEditForm.position"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"入职时间：",prop:"entryDate"}},[a("el-date-picker",{attrs:{type:"date",editable:!1,format:"yyyy年MM月dd日"},model:{value:t.oaEditForm.entryDate,callback:function(e){t.oaEditForm.entryDate=e},expression:"oaEditForm.entryDate"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){e.preventDefault(),t.submitSure("oaEditForm")}}},[t._v("确   定")]),t._v(" "),a("el-button",{on:{click:function(e){e.preventDefault(),t.submitReset("oaEditForm")}}},[t._v("重   置")])],1)],1)],1)])],1):t._e(),t._v(" "),t.oaDetailCard?a("div",{staticClass:"oa-detail"},[a("el-card",{staticClass:"box-card oa-add-card oa-detail-card"},[a("div",{staticClass:"clearfix oa-add-card-header",slot:"header"},[a("span",[t._v("详   情")]),t._v(" "),a("i",{staticClass:"el-icon-circle-close",on:{click:function(e){t.closeBtn("oaDetailCard")}}})]),t._v(" "),a("div",{staticClass:"oa-add-card-body"},[a("el-form",{ref:"oaDetailForm",attrs:{model:t.oaDetailForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"姓名："}},[a("el-input",{attrs:{readonly:""},model:{value:t.oaDetailForm.name,callback:function(e){t.oaDetailForm.name="string"==typeof e?e.trim():e},expression:"oaDetailForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"手机："}},[a("el-input",{attrs:{readonly:""},model:{value:t.oaDetailForm.phone,callback:function(e){t.oaDetailForm.phone="string"==typeof e?e.trim():e},expression:"oaDetailForm.phone"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"身份证号："}},[a("el-input",{attrs:{readonly:""},model:{value:t.oaDetailForm.identityCard,callback:function(e){t.oaDetailForm.identityCard="string"==typeof e?e.trim():e},expression:"oaDetailForm.identityCard"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"职务类别："}},[a("el-input",{attrs:{readonly:""},model:{value:t.oaDetailForm.poststyle,callback:function(e){t.oaDetailForm.poststyle="string"==typeof e?e.trim():e},expression:"oaDetailForm.poststyle"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"部门："}},[a("el-input",{attrs:{readonly:""},model:{value:t.oaDetailForm.department,callback:function(e){t.oaDetailForm.department="string"==typeof e?e.trim():e},expression:"oaDetailForm.department"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"岗位："}},[a("el-input",{attrs:{readonly:""},model:{value:t.oaDetailForm.position,callback:function(e){t.oaDetailForm.position="string"==typeof e?e.trim():e},expression:"oaDetailForm.position"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"入职时间："}},[a("el-input",{attrs:{readonly:""},model:{value:t.getFormat,callback:function(e){t.getFormat="string"==typeof e?e.trim():e},expression:"getFormat"}})],1)],1)],1)])],1):t._e()])},staticRenderFns:[]}}});