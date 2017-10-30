<template>
  <div class="phone-recharge-message" v-loading.body="loading">
    <define-content :cgxpageHandle='cgxpageHandle' :tableData='tableData' :total="total"
                    :cgxpagesizeHandle="cgxpagesizeHandle" :pageUrl="pageUrl"
                    :currentPage='currentPage' :pageSize='pageSize'>
      <el-table-column
        prop="mobile"
        label="手机号码"
        width='20%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="billmonth"
        label="帐单月"
        width='20%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="rechargetime"
        label="充值时间"
        width='20%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="amount"
        label="充值金额(单位分)"
        width='20%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="type"
        label="充值方式"
        width='20%'
        show-overflow-tooltip
      >
      </el-table-column>
    </define-content>
  </div>
</template>

<script>
  import defineContent from './content';
  //import formatDate from '../api/formatDate';
  export default{
    name: "phoneRechargeMsg",
    data(){
      return {
        tableData:[],
        total:0,
        pageUrl:"",
        currentPage:1,
        pageSize:20,
        loading: true
      }
    },
    mounted(){
      let memberId = this.$router.currentRoute.params.id;
      if (this.$constant.PHONERECHARGE && memberId !== undefined) {
        let me = this;
        this.loading = true;
        this.total = 0;
        this.pageUrl = this.$constant.PHONERECHARGE+"?id="+memberId;
        this.$http({
          url: this.$constant.PHONERECHARGE,
          vm: me,
          method: "GET",
          params: {id:memberId,page: this.currentPage, rows: this.pageSize}
        }, function (data) {
          if (data) {
            if (data.code === 200 && data.message === '成功') {
              if (data.data) {
                if (data.data[0].totals !== undefined) {
                  me.total = data.data[0].totals;
                }
                let arr = [];
                for (let i = 0; i < data.data.length; i++) {
                  let dt = data.data[i];
                  arr.push({
                    mobile:me.$handleData(dt.mobile),
                    billmonth:me.$handleData(dt.billmonth),
                    rechargetime:me.$handleData(dt.rechargetime),
                    amount:me.$handleData(dt.amount),
                    type:me.$handleData(dt.type),
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
    methods:{
      cgxpageHandle(data){
        let me = this;
        if (data) {
          if (data.code === 200 && data.message === '成功') {
            if (data.data) {
              if (data.data[0].totals !== undefined) {
                me.total = data.data[0].totals;
              }
              let arr = [];
              for (let i = 0; i < data.data.length; i++) {
                let dt = data.data[i];
                arr.push({
                  mobile:me.$handleData(dt.mobile),
                  billmonth:me.$handleData(dt.billmonth),
                  rechargetime:me.$handleData(dt.rechargetime),
                  amount:me.$handleData(dt.amount),
                  type:me.$handleData(dt.type),
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
              if (data.data[0].totals !== undefined) {
                me.total = data.data[0].totals;
              }
              let arr = [];
              for (let i = 0; i < data.data.length; i++) {
                let dt = data.data[i];
                arr.push({
                  mobile:me.$handleData(dt.mobile),
                  billmonth:me.$handleData(dt.billmonth),
                  rechargetime:me.$handleData(dt.rechargetime),
                  amount:me.$handleData(dt.amount),
                  type:me.$handleData(dt.type),
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
  .phone-recharge-message {
    width: 100%;
    height: 100%;
    .content{
      .el-table__header-wrapper,.el-table__body-wrapper{
        min-width: 1300px;
      }
      table {
        width: 100% !important;
        .cell {
          text-align: center;
          height: 20px;
          line-height: 20px;
          width: 100% !important;
          box-sizing: border-box;
          padding: 0 5px;
        }
        th, tr, td {
          height: 30px;
        }
      }
      .el-table__header-wrapper {
        height: 31px !important;
        box-sizing: border-box;
      }
      .el-table__empty-block {
        width: 100% !important;
        height: 30px;
        min-height: 30px;
      }
      .block {
        margin-top: 10px !important;
      }
    }
  }
</style>
