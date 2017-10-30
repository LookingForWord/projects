<template>
  <el-card class="box-card unaduited-card" v-loading.body="loading">
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
        width='8%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width='12%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="identityCard"
        label="身份证号码"
        width='16%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="submitProject"
        label="提交项目"
        width='8%'
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
        prop="limit"
        label="剩余额度/已授权额度"
        width='20%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="auditStatus"
        label="审核状态"
        width='15%'
        class='audit-status'
        show-overflow-tooltip
      >
        <template scope="scope">
          <router-link class='unaudited' :to="{name:'auditDetail',params:{id:scope.row.id,mcId:scope.row.mcId}}">
            {{scope.row.auditStatus}}<i
            class="el-icon-arrow-right"></i></router-link>
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
        loading: true,
        currentPage: 1,
        pageSize: 20,
      }
    },
    mounted(){
      this.$parent.menuLists = [{title: '首页', url: 'home'}, {title: '提额审核', url: 'auditAll'}, {
        title: '未审核',
        url: 'unaudited'
      }];
      if (this.$constant.UNAUDITEDURL) {
        let me = this;
        this.loading = true;
        this.total = 0;
        this.pageUrl = this.$constant.UNAUDITEDURL;
        this.$http({
          url: this.$constant.UNAUDITEDURL,
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
                    id: me.$handleData(dt.memberId),
                    mcId: me.$handleData(dt.mcId),
                    name: me.$handleData(dt.realName),
                    phone: me.$handleData(dt.mobile),
                    identityCard: me.$handleData(dt.idCard),
                    submitProject: (me.$handleData(dt.creditCount) === '' ? '0' : me.$handleData(dt.creditCount)) + '/5',
                    submitDate: me.$handleData(dt.applyTime) === '' ? '' : formatDate(dt.applyTime),
                    limit: (me.$handleData(dt.residueAmount) === '' ? 0 : me.$handleData(dt.residueAmount)) + '/' + (me.$handleData(dt.creditAmount) === '' ? 0 : me.$handleData(dt.creditAmount)),
                    auditStatus: me.$handleData(dt.auditState) === '' ? '' : me.$handleData(dt.auditState) === 0 ? '未通过' : me.$handleData(dt.auditState) === 1 ? '提额' + (me.$handleData(dt.amount) === '' ? 0 : me.$handleData(dt.amount)) : me.$handleData(dt.auditState) === 2 ? '未审核' : '',
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
                  id: me.$handleData(dt.memberId),
                  mcId: me.$handleData(dt.mcId),
                  name: me.$handleData(dt.realName),
                  phone: me.$handleData(dt.mobile),
                  identityCard: me.$handleData(dt.idCard),
                  submitProject: (me.$handleData(dt.creditCount) === '' ? '0' : me.$handleData(dt.creditCount)) + '/5',
                  submitDate: me.$handleData(dt.applyTime) === '' ? '' : formatDate(dt.applyTime),
                  limit: (me.$handleData(dt.residueAmount) === '' ? 0 : me.$handleData(dt.residueAmount)) + '/' + (me.$handleData(dt.creditAmount) === '' ? 0 : me.$handleData(dt.creditAmount)),
                  auditStatus: me.$handleData(dt.auditState) === '' ? '' : me.$handleData(dt.auditState) === 0 ? '未通过' : me.$handleData(dt.auditState) === 1 ? '提额' + (me.$handleData(dt.amount) === '' ? 0 : me.$handleData(dt.amount)) : me.$handleData(dt.auditState) === 2 ? '未审核' : '',
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
                  id: me.$handleData(dt.memberId),
                  mcId: me.$handleData(dt.mcId),
                  name: me.$handleData(dt.realName),
                  phone: me.$handleData(dt.mobile),
                  identityCard: me.$handleData(dt.idCard),
                  submitProject: (me.$handleData(dt.creditCount) === '' ? '0' : me.$handleData(dt.creditCount)) + '/5',
                  submitDate: me.$handleData(dt.applyTime) === '' ? '' : formatDate(dt.applyTime),
                  limit: (me.$handleData(dt.residueAmount) === '' ? 0 : me.$handleData(dt.residueAmount)) + '/' + (me.$handleData(dt.creditAmount) === '' ? 0 : me.$handleData(dt.creditAmount)),
                  auditStatus: me.$handleData(dt.auditState) === '' ? '' : me.$handleData(dt.auditState) === 0 ? '未通过' : me.$handleData(dt.auditState) === 1 ? '提额' + (me.$handleData(dt.amount) === '' ? 0 : me.$handleData(dt.amount)) : me.$handleData(dt.auditState) === 2 ? '未审核' : '',
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
  .unaduited-card {
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

  .unaduited-card {
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
  }
</style>
