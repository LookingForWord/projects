<template>
  <el-card class="box-card prestad-all-card" v-loading.body="loading">
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
        show-overflow-tooltip
        width='15%'>
      </el-table-column>
      <el-table-column
        prop="identityCard"
        label="身份证号码"
        show-overflow-tooltip
        width='20%'
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
          <router-link class='unprestad' v-if='scope.row.prestadStatus == "未放款"'
                       :to='{name: "unprestad"}'>{{scope.row.prestadStatus}}
          </router-link>
          <router-link class='prestaded' v-else='scope.row.prestadStatus == "已放款"'
                       :to='{name: "prestaded"}'>{{scope.row.prestadStatus}}
          </router-link>
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
        pageSize: 20
      }
    },
    mounted(){
      this.$parent.menuLists = [{title: '首页', url: 'home'}, {title: '放款管理', url: 'prestadAll'}];
      if (this.$constant.PRESTADALL) {
        let me = this;
        this.loading = true;
        this.total = 0;
        this.pageUrl = this.$constant.PRESTADALL;
        this.$http({
          url: this.$constant.PRESTADALL,
          vm: me,
          method: "GET",
          params: {page: this.currentPage, rows: this.pageSize}
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
      }
    },
    components: {
      defineContent
    }
  }
</script>

<style lang='scss'>
  .prestad-all-card {
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

  .prestad-all-card {
    table {
      width: 100% !important;
    }
    div.cell {
      padding: 0 5px;
      width: 100% !important;
      box-sizing: border-box;
      a.unprestad, a.prestaded {
        color: #FF004F !important;
        display: block;
        width: 100px;
        margin: 0 auto;
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        font-weight: bold;
        position: relative;
      }
      a.prestaded {
        color: #1F2D3D !important;
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
