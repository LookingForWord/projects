<template>
  <el-card class="box-card totalDataList-card" v-loading.body="loading">
    <define-content :cgxpageHandle='cgxpageHandle' :tableData='tableData' :total="total" :pageUrl="pageUrl" :cgxpagesizeHandle="cgxpagesizeHandle">
      <el-table-column
        prop="registerUser"
        label="总注册用户"
        show-overflow-tooltip
        width="10%"
      >
      </el-table-column>
      <el-table-column
        prop="borrowUser"
        label="总借款用户"
        show-overflow-tooltip
        width="10%"
      >
      </el-table-column>
      <el-table-column
        prop="loanAmount"
        label="总放款金额"
        show-overflow-tooltip
        width="25%"
      >
      </el-table-column>
      <el-table-column
        prop="dueAmount"
        label="总待收金额"
        show-overflow-tooltip
        width="25%"
      >
      </el-table-column>
      <el-table-column
        prop="overdue"
        label="逾期笔数"
        show-overflow-tooltip
        width="10%"
      >
      </el-table-column>
      <el-table-column
        prop="overdueAmount"
        label="逾期总金额"
        show-overflow-tooltip
        width="20%"
      >
      </el-table-column>
    </define-content>
    <define-content :cgxpageHandle='cgxpageRegisterHandle' :tableData='registerData' :total="registerTotal" :pageUrl="registerPageUrl" :cgxpagesizeHandle="cgxpagesizeRegisterHandle"
                    :currentPage='currentPage' :pageSize='pageSize' class="register_msg"
    >
      <el-table-column
        type="index"
        width="10%"
        label="编号"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        show-overflow-tooltip
        width="20%"
      >
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        show-overflow-tooltip
        width="20%"
      >
      </el-table-column>
      <el-table-column
        prop="registerTime"
        label="注册时间"
        show-overflow-tooltip
        width="20%"
      >
      </el-table-column>
      <el-table-column
        prop="company"
        label="公司"
        show-overflow-tooltip
        width="20%"
      >
      </el-table-column>
      <el-table-column
        label="详情"
        show-overflow-tooltip
        width="10%"
      >
        <template scope='scope'>
          <router-link class='all-detail':to="{name:'userDetail',params:{id:scope.row.id}}">查看</router-link>
        </template>
      </el-table-column>
    </define-content>
  </el-card>
</template>
<script>
  import formatDate from '../api/formatDate';
  import defineContent from './content';
  export default {
    data(){
      return {
        tableData: [],
        pageUrl: '',
        total: 0,
        loading: true,
        registerData:[],
        registerTotal:0,
        registerPageUrl:"",
        currentPage:1,
        pageSize: 20
      }
    },
    mounted(){
      this.$parent.menuLists = [{title: '首页', url: 'home'}, {title: '统计信息', url: 'totalDataList'}];
      if (this.$constant.TOTALDATALISTURL) {
        let me = this;
        this.loading = true
        this.$http({url: this.$constant.TOTALDATALISTURL, vm: me, method: "POST"}, function (data) {
          if (data) {
            if (data.code === 200 && data.message === '成功') {
              if ( data.data ) {
                me.tableData = [{
                  registerUser: me.$handleData(data.data.allRegistrars) === '' ? 0 : me.$handleData(data.data.allRegistrars),//注册用户
                  borrowUser: me.$handleData(data.data.memberBillCount) === '' ? 0 : me.$handleData(data.data.memberBillCount),//借款用户
                  loanAmount: '￥ ' + (me.$handleData(data.data.totalLoanAmount) === '' ? 0 : me.$handleData(data.data.totalLoanAmount)),//总放款金额
                  dueAmount: '￥ '+ (me.$handleData(data.data.totalCollectAmount) === '' ? 0 : me.$handleData(data.data.totalCollectAmount)),//总代收金额
                  overdue: me.$handleData(data.data.totalOverdueCount) === '' ? 0 :me.$handleData(data.data.totalOverdueCount),//逾期笔数
                  overdueAmount: '￥ '+ (me.$handleData(data.data.totalOverdueAmount) === '' ? 0 : me.$handleData(data.data.totalOverdueAmount))//逾期总金额
                }];
              } else {
                me.tableData = [];
              }
            } else {
              me.tableData = [];
            }
            me.loading = false;
          } else {
            me.tableData = [];
            me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
          }
        });
      }
      //获取注册用户
      if (this.$constant.REGISTERUSER) {
        let me = this;
        this.loading = true;
        this.registerTotal = 0;
        this.registerPageUrl = this.$constant.REGISTERUSER;
        this.$http({url: this.$constant.REGISTERUSER, vm: me, method: "GET",params: {page: this.currentPage, rows: this.pageSize}}, function (data) {
          if (data) {
            if (data.code === 200 && data.message === '成功') {
              if ( data.data ) {
                if (data.data.total !== undefined) {
                  me.registerTotal = data.data.total;
                }
                let arr = [];
                if(data.data.pageData){
                  for(let i =0 ;i<data.data.pageData.length;i++){
                    let dt = data.data.pageData[i];
                    arr.push({
                      id:me.$handleData(dt.id),
                      name:me.$handleData(dt.name),
                      phone:me.$handleData(dt.mobile),
                      registerTime:me.$handleData(dt.createTime) === '' ? '' : formatDate(me.$handleData(dt.createTime)),
                      company:me.$handleData(dt.company)
                    });
                  }
                }
                me.registerData = arr;
              } else {
                me.registerData = [];
              }
            } else {
              me.registerData = [];
            }
            me.loading = false;
          } else {
            me.registerData = [];
            me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
          }
        });
      }
    },
    methods: {
      cgxpageHandle(){
      },
      cgxpagesizeHandle(){},
      cgxpagesizeRegisterHandle(data){
        let me = this;
        if (data) {
          if (data.code === 200 && data.message === '成功') {
            if (data.data) {
              if (data.data.total !== undefined) {
                me.registerTotal = data.data.total;
              }
              let arr = [];
              if(data.data.pageData){
                for(let i =0 ;i<data.data.pageData.length;i++){
                  let dt = data.data.pageData[i];
                  arr.push({
                    id:me.$handleData(dt.id),
                    name:me.$handleData(dt.name),
                    phone:me.$handleData(dt.mobile),
                    registerTime:me.$handleData(dt.createTime) === '' ? '' : formatDate(me.$handleData(dt.createTime)),
                    company:me.$handleData(dt.company)
                  });
                }
              }
              me.registerData = arr;
            } else {
              me.registerData = [];
            }
          } else {
            me.registerData = [];
          }
          me.loading = false;
          me.currentPage = 1;
          me.pageSize = data.pageSize;
        } else {
          me.registerData = [];
          me.registerTotal = 0;
          me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
        }
      },
      cgxpageRegisterHandle(data){
        let me = this;
        if (data) {
          if (data.code === 200 && data.message === '成功') {
            if (data.data) {
              if (data.data.total !== undefined) {
                me.registerTotal = data.data.total;
              }
              let arr = [];
              if(data.data.pageData){
                for(let i =0 ;i<data.data.pageData.length;i++){
                  let dt = data.data.pageData[i];
                  arr.push({
                    id:me.$handleData(dt.id),
                    name:me.$handleData(dt.name),
                    phone:me.$handleData(dt.mobile),
                    registerTime:me.$handleData(dt.createTime) === '' ? '' : formatDate(me.$handleData(dt.createTime)),
                    company:me.$handleData(dt.company)
                  });
                }
              }
              me.registerData = arr;
            } else {
              me.registerData = [];
            }
          } else {
            me.registerData = [];
          }
          me.loading = false;
          me.currentPage = data.currentPage;
        } else {
          me.registerData = [];
          me.registerTotal = 0;
          me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
        }
      }
    },
    components: {
      defineContent
    }
  }
</script>
<style lang='scss'>
  .totalDataList-card {
    box-sizing: border-box;
    position: relative;
    height:100%;
    padding: 20px !important;
    .el-card__body {
      height: 100%;
      box-sizing: border-box;
      padding: 0 !important;
    }
    table {
      width: 100% !important;
      div.cell {
        padding: 0 5px !important;
        width: 100% !important;
        box-sizing: border-box;
      }
    }
    .all-detail{
      color:#0000FF
    }
    .content{
      height:auto !important;
    }
    .register_msg{
      margin-top:20px;
      height:76% !important;
    }
  }
</style>
