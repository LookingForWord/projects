<template>
  <el-card class="box-card unprestad-card" v-loading.body="loading">
    <define-content :cgxpageHandle='cgxpageHandle' :tableData='tableData' :total="total" :pageUrl="pageUrl"
                    :currentPage='currentPage' :pageSize='pageSize' :cgxpagesizeHandle="cgxpagesizeHandle"
                    :btnStatus="btnStatus">
      <el-table-column
        type="selection"
        width="10%"
      >
      </el-table-column>
      <el-table-column
        type="index"
        label="编号"
        width='5%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width='10%'
        show-overflow-tooltip
      >
        <template scope="scope">
          <span :data-id="scope.row.id">{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        show-overflow-tooltip
        width='10%'>
      </el-table-column>
      <el-table-column
        prop="identityCard"
        label="身份证号码"
        show-overflow-tooltip
        width='15%'
      >
      </el-table-column>
      <el-table-column
        prop="applyCount"
        label="申请金额"
        show-overflow-tooltip
        width='10%'
      >
      </el-table-column>
      <el-table-column
        prop="totalCount"
        label="总额度"
        show-overflow-tooltip
        width='10%'
      >
      </el-table-column>
      <el-table-column
        prop="auditStatus"
        label="审核状态"
        show-overflow-tooltip
        width='15%'
      >
      </el-table-column>
      <el-table-column
        prop="prestadStatus"
        label="放款状态"
        show-overflow-tooltip
        width='15%'
      >
        <template scope="scope">
          <div class="single-btn-div">{{scope.row.prestadStatus}}<el-button class="single-btn" @click="singleBtn(scope.row.id,scope.row.name)">放款</el-button></div>
        </template>
      </el-table-column>
    </define-content>
  </el-card>
</template>

<script>
  import defineContent from './content';
  export default {
    data(){
      return {
        tableData: [],
        pageUrl: '',
        total: 10,
        loading: true,
        currentPage: 1,
        pageSize: 20,
        btnStatus:true,
        prestadObj:{
            ids:null,
            names:null
        }
      }
    },
    mounted(){
      this.$parent.menuLists = [{title: '首页', url: 'home'}, {title: '未放款', url: 'unprestad'}];
      if (this.$constant.UNPRESTAD) {
        let me = this;
        this.loading = true;
        this.total = 0;
        this.pageUrl = this.$constant.UNPRESTAD+"?state=2";
        this.$http({
          url: this.$constant.UNPRESTAD,
          vm: me,
          method: "GET",
          params: {state:2,page: this.currentPage, rows: this.pageSize}
        }, function (data) {
          if (data) {
            if (data.code === 200 && data.message === '成功') {
              if (data.data) {
                if (data.data.total !== undefined) {
                  me.total = data.data.total;
                }
                let arr = [];
                for (let i = 0; i < data.data.pageData.length; i++) {
                  let dt = data.data.pageData[i];
                  arr.push({
                    id:me.$handleData(dt.id),
                    name: me.$handleData(dt.realname),
                    phone: me.$handleData(dt.mobile),
                    identityCard: me.$handleData(dt.idCard),
                    applyCount: '￥'+ (me.$handleData(dt.loanAmount) === '' ? 0 : me.$handleData(dt.loanAmount)),
                    totalCount: '￥'+ (me.$handleData(dt.creditTotal) === '' ? 0 : me.$handleData(dt.creditTotal)),
                    auditStatus:"系统自动通过",
                    prestadStatus:me.$handleData(dt.state) === 2  ? "未放款" :me.$handleData(dt.state) > 2 ? "已放款" :""
                  });
                }
                me.tableData = arr;
              } else {
                me.tableData = [];
              }
            } else {
              me.tableData = [];
            }
            me.loading = false;
          } else {
            me.tableData = [];
            me.total = 0;
            me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
          }
        });
      }
    },
    methods: {
      cgxpageHandle(data){
        let me = this;
        if (data) {
          if (data.code === 200 && data.message === '成功') {
            if (data.data) {
              if (data.data.total !== undefined) {
                me.total = data.data.total;
              }
              let arr = [];
              for (let i = 0; i < data.data.pageData.length; i++) {
                let dt = data.data.pageData[i];
                arr.push({
                  id:me.$handleData(dt.id),
                  name: me.$handleData(dt.realname),
                  phone: me.$handleData(dt.mobile),
                  identityCard: me.$handleData(dt.idCard),
                  applyCount: '￥'+ (me.$handleData(dt.loanAmount) === '' ? 0 : me.$handleData(dt.loanAmount)),
                  totalCount: '￥'+ (me.$handleData(dt.creditTotal) === '' ? 0 : me.$handleData(dt.creditTotal)),
                  auditStatus:"系统自动通过",
                  prestadStatus:me.$handleData(dt.state) === 2  ? "未放款" :me.$handleData(dt.state) > 2 ? "已放款" :""
                });
              }
              me.tableData = arr;
            } else {
              me.tableData = [];
            }
          } else {
            me.tableData = [];
          }
          me.loading = false;
          me.currentPage = data.currentPage;
        } else {
          me.tableData = [];
          me.total = 0;
          me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
        }
      },
      cgxpagesizeHandle(data){
        let me = this;
        if (data) {
          if (data.code === 200 && data.message === '成功') {
            if (data.data) {
              if (data.data.total !== undefined) {
                me.total = data.data.total;
              }
              let arr = [];
              for (let i = 0; i < data.data.pageData.length; i++) {
                let dt = data.data.pageData[i];
                arr.push({
                  id:me.$handleData(dt.id),
                  name: me.$handleData(dt.realname),
                  phone: me.$handleData(dt.mobile),
                  identityCard: me.$handleData(dt.idCard),
                  applyCount: '￥'+ (me.$handleData(dt.loanAmount) === '' ? 0 : me.$handleData(dt.loanAmount)),
                  totalCount: '￥'+ (me.$handleData(dt.creditTotal) === '' ? 0 : me.$handleData(dt.creditTotal)),
                  auditStatus:"系统自动通过",
                  prestadStatus:me.$handleData(dt.state) === 2  ? "未放款" :me.$handleData(dt.state) > 2 ? "已放款" :""
                });
              }
              me.tableData = arr;
            } else {
              me.tableData = [];
            }
          } else {
            me.tableData = [];
          }
          me.loading = false;
          me.currentPage = 1;
          me.pageSize = data.pageSize;
        } else {
          me.tableData = [];
          me.total = 0;
          me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
        }
      },
      singleBtn(id,name){
          if(id !== undefined){
              let me = this;
            this.$messageBox({vm: this, message: "确定通过以下（“1”位）用户的放款审核“"+name+"”！", cancelButton:true,title: "放款：", type: 'info',confirmFun:function(){
                if(me.$constant.PRESTADSURE){
                  me.$http({
                    url: me.$constant.PRESTADSURE,
                    vm: me,
                    method: "POST",
                    data: {bills:id}
                  },function(data){
                      if(data){
                          if(data.code === 200){
                              me.$messageBox({vm:me,message:"放款成功！",title:"成功：",type:"success"});
                              //刷新数据
                            if (me.$constant.UNPRESTAD) {
                              me.loading = true;
                              me.total = 0;
                              me.currentPage = 1;
                              me.$http({
                                url: me.$constant.UNPRESTAD,
                                vm: me,
                                method: "GET",
                                params: {state:2,page: me.currentPage, rows: me.pageSize}
                              }, function (data) {
                                if (data) {
                                  if (data.code === 200 && data.message === '成功') {
                                    if (data.data) {
                                      if (data.data.total !== undefined) {
                                        me.total = data.data.total;
                                      }
                                      let arr = [];
                                      for (let i = 0; i < data.data.pageData.length; i++) {
                                        let dt = data.data.pageData[i];
                                        arr.push({
                                          id:me.$handleData(dt.id),
                                          name: me.$handleData(dt.realname),
                                          phone: me.$handleData(dt.mobile),
                                          identityCard: me.$handleData(dt.idCard),
                                          applyCount: '￥'+ (me.$handleData(dt.loanAmount) === '' ? 0 : me.$handleData(dt.loanAmount)),
                                          totalCount: '￥'+ (me.$handleData(dt.creditTotal) === '' ? 0 : me.$handleData(dt.creditTotal)),
                                          auditStatus:"系统自动通过",
                                          prestadStatus:me.$handleData(dt.state) === 2  ? "未放款" :me.$handleData(dt.state) > 2 ? "已放款" :""
                                        });
                                      }
                                      me.tableData = arr;
                                    } else {
                                      me.tableData = [];
                                    }
                                  } else {
                                    me.tableData = [];
                                  }
                                  me.loading = false;
                                } else {
                                  me.tableData = [];
                                  me.total = 0;
                                  me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
                                }
                              });
                            }
                          }else{
                              me.$messageBox({vm:me,message:"放款失败！",title:"错误：",type:"error"});
                          }
                      }else{
                        me.$messageBox({vm:me,message:"服务器响应失败！",title:"提示：",type:"warning"});
                      }
                  });
                }
            }});
          }
      }
    },
    components: {
      defineContent
    }
  }
</script>

<style lang='scss'>
  .unprestad-card {
    box-sizing: border-box;
    position: relative;
    padding: 20px !important;
    height: 100%;
    //min-height:466px;
    //max-height:100%;
    .el-card__body {
      height: 100%;
      box-sizing: border-box;
      padding: 0 !important;
    }
  }

  .unprestad-card {
    table {
      width: 100% !important;
    }
    div.cell {
      padding: 0 5px;
      width: 100% !important;
      box-sizing: border-box;
      a {
        color: #FF004F;
        display: block;
        width: 100px;
        margin: 0 auto;
        height: 24px;
        line-height: 24px;
        font-size: 16px;
        font-weight: bold;
        position: relative;
      }
      .el-icon-arrow-right {
        margin-left: 5px;
        font-size: 12px;
        height: 12px;
        width: 12px;
        overflow: hidden;
        position: absolute;
        top: 50%;
        margin-top: -6px;
        right: 10px;
      }
    }
    .single-btn{
      height:24px;
      line-height:22px;
      padding-top:0;
      padding-bottom:0;
      box-sizing: border-box;
      margin-left:10px;
    }
    .single-btn-div{
      height:24px;
      line-height:24px;
    }
  }
</style>
