<template>
  <div class="phone-base-message" v-loading.body="loading">
    <define-content :cgxpageHandle='cgxpageHandle' :tableData='tableData' :total="total"
                    :cgxpagesizeHandle="cgxpagesizeHandle" :pageUrl="pageUrl"
                    :currentPage='currentPage' :pageSize='pageSize'>
      <el-table-column
        prop="name"
        label="姓名"
        width='10%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="手机号码"
        width='10%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="idCard"
        label="证件号"
        width='14%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="carrier"
        label="类型"
        width='5%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width='8%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="city"
        label="城市"
        width='8%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="openTime"
        label="开卡时间"
        width='10%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="level"
        label="星级"
        width='5%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="packageName"
        label="手机套餐"
        width='10%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="availableBalance"
        label="可用余额(单位分)"
        width='10%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        width='10%'
        show-overflow-tooltip
      >
      </el-table-column>
    </define-content>
  </div>
</template>

<script>
  import defineContent from './content';
  import formatDate from '../api/formatDate';
  export default{
    name: "phoneBaseMsg",
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
      if (this.$constant.PHONEBASEDATA && memberId !== undefined) {
        let me = this;
        this.loading = true;
        this.total = 0;
        this.pageUrl = this.$constant.PHONEBASEDATA+"?id="+memberId;
        this.$http({
          url: this.$constant.PHONEBASEDATA,
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
                  let state = '',oldState = me.$handleData(dt.state);
                  if(oldState == -1){
                      state = "未知";
                  }else if(oldState === 0){
                      state = "正常";
                  }else if(oldState == 1){
                      state = '单向停机';
                  }else if (oldState == 2){
                      state = '停机';
                  }else if (oldState == 3){
                      state = '预销户';
                  }else if(oldState == 4){
                      state = '销户';
                  }else if(oldState == 5){
                    state = '过户';
                  }else if (oldState == 6){
                      state = '改号';
                  }else if (oldState == 99){
                      state ='号码不存在';
                  }else{
                      state = '';
                  }
                  arr.push({
                    name:me.$handleData(dt.name),
                    mobile:me.$handleData(dt.mobile),
                    idCard:me.$handleData(dt.idcard),
                    carrier:me.$handleData(dt.carrier) == 1 ? "移动" : me.$handleData(dt.carrier) == 2 ? '联通':me.$handleData(dt.carrier) == 3 ? "电信" : "",
                    province:me.$handleData(dt.province),
                    city:me.$handleData(dt.city),
                    openTime:me.$handleData(dt.opentime) === '' ? '' : formatDate(me.$handleData(dt.opentime),true),
                    level:me.$handleData(dt.level),
                    packageName:me.$handleData(dt.packagename),
                    availableBalance:me.$handleData(dt.availablebalance),
                    state:state,
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
              if (data.data[0].total !== undefined) {
                me.total = data.data[0].total;
              }
              let arr = [];
              for (let i = 0; i < data.data.length; i++) {
                let dt = data.data[i];
                let state = '',oldState = me.$handleData(dt.state);
                if(oldState == -1){
                  state = "未知";
                }else if(oldState === 0){
                  state = "正常";
                }else if(oldState == 1){
                  state = '单向停机';
                }else if (oldState == 2){
                  state = '停机';
                }else if (oldState == 3){
                  state = '预销户';
                }else if(oldState == 4){
                  state = '销户';
                }else if(oldState == 5){
                  state = '过户';
                }else if (oldState == 6){
                  state = '改号';
                }else if (oldState == 99){
                  state ='号码不存在';
                }else{
                  state = '';
                }
                arr.push({
                  name:me.$handleData(dt.name),
                  mobile:me.$handleData(dt.mobile),
                  idCard:me.$handleData(dt.idcard),
                  carrier:me.$handleData(dt.carrier) == 1 ? "移动" : me.$handleData(dt.carrier) == 2 ? '联通':me.$handleData(dt.carrier) == 3 ? "电信" : "",
                  province:me.$handleData(dt.province),
                  city:me.$handleData(dt.city),
                  openTime:me.$handleData(dt.opentime) === '' ? '' : formatDate(me.$handleData(dt.opentime),true),
                  level:me.$handleData(dt.level),
                  packageName:me.$handleData(dt.packagename),
                  availableBalance:me.$handleData(dt.availablebalance),
                  state:state,
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
                let state = '',oldState = me.$handleData(dt.state);
                if(oldState == -1){
                  state = "未知";
                }else if(oldState === 0){
                  state = "正常";
                }else if(oldState == 1){
                  state = '单向停机';
                }else if (oldState == 2){
                  state = '停机';
                }else if (oldState == 3){
                  state = '预销户';
                }else if(oldState == 4){
                  state = '销户';
                }else if(oldState == 5){
                  state = '过户';
                }else if (oldState == 6){
                  state = '改号';
                }else if (oldState == 99){
                  state ='号码不存在';
                }else{
                  state = '';
                }
                arr.push({
                  name:me.$handleData(dt.name),
                  mobile:me.$handleData(dt.mobile),
                  idCard:me.$handleData(dt.idcard),
                  carrier:me.$handleData(dt.carrier) == 1 ? "移动" : me.$handleData(dt.carrier) == 2 ? '联通':me.$handleData(dt.carrier) == 3 ? "电信" : "",
                  province:me.$handleData(dt.province),
                  city:me.$handleData(dt.city),
                  openTime:me.$handleData(dt.opentime) === '' ? '' : formatDate(me.$handleData(dt.opentime),true),
                  level:me.$handleData(dt.level),
                  packageName:me.$handleData(dt.packagename),
                  availableBalance:me.$handleData(dt.availablebalance),
                  state:state,
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
  .phone-base-message {
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
