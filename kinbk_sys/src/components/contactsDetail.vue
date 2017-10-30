<template>
  <div class="user-msg-box-body user-contacts-box-body">
    <define-content :cgxpageHandle='cgxpageHandle' :tableData='tableData' :total="total"
                    :cgxpagesizeHandle="cgxpagesizeHandle" :pageUrl="pageUrl"
                    :currentPage='currentPage' :pageSize='pageSize'>
      <el-table-column
        prop="name"
        label="姓名"
        width='50%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="phone"
        label="联系方式"
        width='50%'
        show-overflow-tooltip
      >
      </el-table-column>
    </define-content>
  </div>
</template>

<script>
  import defineContent from './content';
  export default{
    name: "contactsDetail",
    data(){
      return {
        tableData:[],
        total:0,
        pageUrl:"",
        currentPage:1,
        pageSize:20
      }
    },
    mounted(){
      let memberId = this.$router.currentRoute.params.id;
      //获取通信录信息
      if (this.$constant.CONTACTSDETAILDATA && memberId !== undefined) {
        let me = this;
        this.total = 0;
        this.pageUrl = this.$constant.CONTACTSDETAILDATA + "?id=" + memberId;
        this.$http({
          url: this.$constant.CONTACTSDETAILDATA,
          vm: me,
          method: "GET",
          params: {id:memberId,page: this.currentPage, rows: this.pageSize}
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
                    name:me.$handleData(dt.contactName),
                    phone:me.$handleData(dt.contactMobile)
                  });
                }
                me.tableData = arr;
              } else {
                me.tableData = [];
              }
            } else {
              me.tableData = [];
            }
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
              if (data.data[0].total !== undefined) {
                me.total = data.data[0].total;
              }
              let arr = [];
              for (let i = 0; i < data.data.length; i++) {
                let dt = data.data[i];
                arr.push({
                  name:me.$handleData(dt.contactName),
                  phone:me.$handleData(dt.contactMobile)
                });
              }
              me.tableData = arr;
            } else {
              me.tableData = [];
            }
          } else {
            me.tableData = [];
          }
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
                  name:me.$handleData(dt.contactName),
                  phone:me.$handleData(dt.contactMobile)
                });
              }
              me.tableData = arr;
            } else {
              me.tableData = [];
            }
          } else {
            me.tableData = [];
          }
          me.currentPage = 1;
          me.pageSize = data.pageSize;
        } else {
          me.tableData = [];
          me.total = 0;
          me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
        }
      }
    },
    components:{
      defineContent
    }
  }
</script>

<style lang='scss'>
  .user-contacts-box-body {
    .el-table__header-wrapper,.el-table__body-wrapper{
      min-width:100% !important;
    }
    .el-table__header-wrapper {
      height: 31px !important;
    }
    .el-table__empty-block {
      width: 100% !important;
      height: 30px !important;
      min-height: 30px !important;
    }
    .block{
      margin-top:10px !important;
    }
    .el-table{
      //height:634px !important;
      max-height:634px !important;
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
        height: 30px !important;
      }
    }
  }

  .user-msg-box-contacts{
    position: relative;
    min-height:760px;
    .box-card {
      width: 600px !important;
      //margin: 0 auto;
      height: 760px;
      padding-top: 51px;
      position: relative;
      box-sizing: border-box;
      position: absolute;
      top:50%;
      left:50%;
      margin-left:-300px;
      margin-top:-380px;
    }
  }
</style>
