<template>
  <el-card class="box-card unrefunded-card" v-loading.body="loading">
    <define-content :cgxpageHandle='cgxpageHandle' :tableData='tableData' :total="total" :pageUrl="pageUrl"
                    :currentPage='currentPage' :pageSize='pageSize' :cgxpagesizeHandle="cgxpagesizeHandle">
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
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width='14%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="identityCard"
        label="身份证号码"
        width='15%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="number"
        label="订单号"
        width='10%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="submitDate"
        label="提交时间"
        width='16%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="loan"
        label="借款本金"
        width='16%'
        show-overflow-tooltip
      >
      </el-table-column>
      <!--<el-table-column-->
        <!--prop="repayAccount"-->
        <!--label="应还金额"-->
        <!--width='12%'-->
        <!--show-overflow-tooltip-->
      <!--&gt;-->
      <!--</el-table-column>-->
      <el-table-column
        prop="overdues"
        label="逾期天数"
        width='10%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        label="详情"
        width='4%'
        show-overflow-tooltip
      >
        <template scope='scope'>
          <router-link class='refund-all-detail'
                       :to="{name:'refundDetail',params:{billId:scope.row.billId,billStatus:scope.row.billStatus}}">查看
          </router-link>
        </template>
      </el-table-column>
    </define-content>
  </el-card>
</template>

<script>
  import defineContent from './content';
  import formatDate from '../api/formatDate';
  export default {
    data(){
      return {
        tableData: [],
        pageUrl: '',
        total: 0,
        loading: false,
        currentPage: 1,
        pageSize: 20
      }
    },
    mounted(){
      this.$parent.menuLists = [{title: '首页', url: 'home'}, {title: '还款管理', url: 'refundAll'}, {
        title: '未还款',
        url: 'unrefunded'
      }];
      if (this.$constant.UNREFUNDED) {
        let me = this;
        this.loading = true;
        this.total = 0;
        this.pageUrl = this.$constant.UNREFUNDED;
        this.$http({
          url: this.$constant.UNREFUNDED,
          vm: me,
          method: "GET",
          params: {page: this.currentPage, rows: this.pageSize}
        }, function (data) {
          if (data) {
            if (data.code === 200 && data.message === '成功') {
              if (data.data) {
                if (data.data[0].total !== undefined) {
                  me.total = data.data[0].total;
                }
                let arr = [];
                for (let i = 0; i < data.data.length; i++) {
                  let dt = data.data[i];
                  arr.push({
                    billId: me.$handleData(dt.billId),
                    billStatus: me.$handleData(dt.billStatus),
                    mcId: me.$handleData(dt.mcId),
                    name: me.$handleData(dt.name),
                    phone: me.$handleData(dt.mobile),
                    identityCard: me.$handleData(dt.idCard),
                    submitDate: me.$handleData(dt.applyTime) === '' ? '' : formatDate(dt.applyTime),
                    number: me.$handleData(dt.billNo),
                    loan: me.$handleData(dt.loanAmount) === '' ? '' : '￥ ' + me.$handleData(dt.loanAmount),
                    repayAccount: (me.$handleData(dt.thisStage) === '' ? '' : me.$handleData(dt.thisStage)) + '/' + (me.$handleData(dt.allStage) === '' ? '' : me.$handleData(dt.allStage)) + '期 ￥' + (me.$handleData(dt.thisMonthAmount) === '' ? '' : me.$handleData(dt.thisMonthAmount)),
                    overdues: me.$handleData(dt.overdueDay) === '' ? 0 : me.$handleData(dt.overdueDay) + '天'
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
              if (data.data[0].total !== undefined) {
                me.total = data.data[0].total;
              }
              let arr = [];
              for (let i = 0; i < data.data.length; i++) {
                let dt = data.data[i];
                arr.push({
                  billId: me.$handleData(dt.billId),
                  billStatus: me.$handleData(dt.billStatus),
                  mcId: me.$handleData(dt.mcId),
                  name: me.$handleData(dt.name),
                  phone: me.$handleData(dt.mobile),
                  identityCard: me.$handleData(dt.idCard),
                  submitDate: me.$handleData(dt.applyTime) === '' ? '' : formatDate(dt.applyTime),
                  number: me.$handleData(dt.billNo),
                  loan: me.$handleData(dt.loanAmount) === '' ? '' : '￥ ' + me.$handleData(dt.loanAmount),
                  repayAccount: (me.$handleData(dt.thisStage) === '' ? '' : me.$handleData(dt.thisStage)) + '/' + (me.$handleData(dt.allStage) === '' ? '' : me.$handleData(dt.allStage)) + '期 ￥' + (me.$handleData(dt.thisMonthAmount) === '' ? '' : me.$handleData(dt.thisMonthAmount)),
                  overdues: me.$handleData(dt.overdueDay) === '' ? 0 : me.$handleData(dt.overdueDay) + '天'
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
              if (data.data[0].total !== undefined) {
                me.total = data.data[0].total;
              }
              let arr = [];
              for (let i = 0; i < data.data.length; i++) {
                let dt = data.data[i];
                arr.push({
                  billId: me.$handleData(dt.billId),
                  billStatus: me.$handleData(dt.billStatus),
                  mcId: me.$handleData(dt.mcId),
                  name: me.$handleData(dt.name),
                  phone: me.$handleData(dt.mobile),
                  identityCard: me.$handleData(dt.idCard),
                  submitDate: me.$handleData(dt.applyTime) === '' ? '' : formatDate(dt.applyTime),
                  number: me.$handleData(dt.billNo),
                  loan: me.$handleData(dt.loanAmount) === '' ? '' : '￥ ' + me.$handleData(dt.loanAmount),
                  repayAccount: (me.$handleData(dt.thisStage) === '' ? '' : me.$handleData(dt.thisStage)) + '/' + (me.$handleData(dt.allStage) === '' ? '' : me.$handleData(dt.allStage)) + '期 ￥' + (me.$handleData(dt.thisMonthAmount) === '' ? '' : me.$handleData(dt.thisMonthAmount)),
                  overdues: me.$handleData(dt.overdueDay) === '' ? 0 : me.$handleData(dt.overdueDay) + '天'
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
      }
    },
    components: {
      defineContent
    }
  }
</script>

<style lang='scss'>
  .unrefunded-card {
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

  .unrefunded-card {
    table {
      width: 100% !important;
      td:nth-child(7), td:nth-child(8) {
        color: #FF004F;
      }
    }
    div.cell {
      padding: 0 5px;
      width: 100% !important;
      box-sizing: border-box;
      a.refund-all-detail {
        color: #004FFF !important;
        display: block;
        width: 40px;
        margin: 0 auto;
        font-weight: bold;
        font-size: 16px;
        height: 24px;
        line-height: 24px;
      }
    }
  }
</style>
