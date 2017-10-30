<template>
  <el-card class="box-card user-detail-card" v-loading.body="loading">
    <define-content :cgxpageHandle='cgxpageHandle' :tableData='tableData' :total="total"
                    :cgxpagesizeHandle="cgxpagesizeHandle">
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
        width='20%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width='20%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="registerTime"
        label="注册时间"
        width='30%'
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="company"
        label="公司"
        width='20%'
      >
      </el-table-column>
    </define-content>
    <div class='user-msg'>
      <el-card class="box-card user-msg-header">
        <div slot="header" class="clearfix">
          <span style="line-height: 20px;">用户资料</span>
          <em @click="returnBtn"><i class='el-icon-arrow-left'></i>返回</em>
        </div>
        <div class='user-msg-body'>
          <el-form :inline="true" :model="usersForm" class="users-form">
            <div class="users-form-line clearfix">
              <el-form-item label="入司时间：">
                <el-input v-model="usersForm.entryDate" readonly></el-input>
              </el-form-item>
              <el-form-item label="部门：">
                <el-input v-model="usersForm.depart" readonly></el-input>
              </el-form-item>
              <el-form-item label="性别：" class="el-form-item-last">
                <el-input v-model="usersForm.sex" readonly></el-input>
              </el-form-item>
            </div>
            <div class="users-form-line clearfix">
              <el-form-item label="教育程度：">
                <el-input v-model="usersForm.education" readonly></el-input>
              </el-form-item>
              <el-form-item label="婚姻状况：">
                <el-input v-model="usersForm.marry" readonly></el-input>
              </el-form-item>
              <el-form-item label="现居住地址：" class="el-form-item-last">
                <el-input v-model="usersForm.address" readonly></el-input>
              </el-form-item>
            </div>
            <div class="users-form-line clearfix">
              <el-form-item label="个人月收入：">
                <el-input v-model="usersForm.income" readonly></el-input>
              </el-form-item>
              <el-form-item label="亲属联系人：">
                <el-input v-model="usersForm.relativeContact" readonly></el-input>
              </el-form-item>
              <el-form-item label="紧急联系人：" class="el-form-item-last">
                <el-input v-model="usersForm.urgencyContact" readonly></el-input>
              </el-form-item>
            </div>
            <div class="users-form-line clearfix users-detail-btn">
              <el-form-item label="手机运营商：">
                <el-button @click="phoneBtn">点击展示数据</el-button>
              </el-form-item>
              <el-form-item label="京东：">
                <el-button @click="jingdongBtn">点击展示数据</el-button>
              </el-form-item>
              <el-form-item label="淘宝：">
                <el-button @click="taobaoBtn">点击展示数据</el-button>
              </el-form-item>
              <el-form-item label="联系人：" class="el-form-item-last">
                <el-button @click="contactBtn">点击展示数据</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </el-card>
    </div>
  </el-card>
</template>

<script>
  import defineContent from './content';
  import formatDate from '../api/formatDate';
  export default {
    data(){
      return {
        loading: true,
        tableData: [],
        total: 0,
        usersForm: {
          entryDate: '',
          depart: '',
          position: '',
          sex: '',
          education: '',
          marry: '',
          address: '',
          income: '',
          relativeContact: '',
          urgencyContact: '',
        },
        mcId:0
      }
    },
    mounted(){
      this.$parent.menuLists = [{title: '首页', url: 'home'}, {title: '统计信息', url: 'totalDataList'}, {
        title: '用户详情',
        url: 'userDetail'
      }];
      let id = this.$router.currentRoute.params.id;
//      this.memberId = id;
//      if (this.$constant.AUDITDETAIL && id !== undefined) {
//        let me = this;
//        this.loading = true;
//        this.$http({
//          url: this.$constant.AUDITDETAIL,
//          vm: me,
//          method: "GET",
//          params: {memberId:id, mcId:""}
//        }, function (data) {
//          if (data) {
//            if (data.code === 200 && data.message === '成功') {
//              if (data.data) {
//                let dt = data.data[0];
//                me.memberId = dt.memberId;
//                me.usersForm = {
//                  entryDate: me.$handleData(dt.entryTime) === '' ? '' : formatDate(dt.entryTime, true),
//                  depart: me.$handleData(dt.post),
//                  position: me.$handleData(dt.position),
//                  sex: me.$handleData(dt.sex) === '' ? '' : me.$handleData(dt.sex) === 1 ? '男' : me.$handleData(dt.sex) === 2 ? '女' : '',
//                  education: me.$handleData(dt.edu),
//                  marry: me.$handleData(dt.maritalStatus),
//                  address: me.$handleData(dt.nowAddressProvince) + me.$handleData(dt.nowAddressCity) + me.$handleData(dt.nowAddress),
//                  income: me.$handleData(dt.monthIncome) === '' ? '' : '￥ ' + me.$handleData(dt.monthIncome),
//                  relativeContact: me.$handleData(dt.kinship) + ' ' + me.$handleData(dt.kinshipName) + ' ' + me.$handleData(dt.kinshipMobile),
//                  urgencyContact: me.$handleData(dt.emergencyLink) + ' ' + me.$handleData(dt.emergencyName) + ' ' + me.$handleData(dt.emergencyMobile),
//                }
//              } else {
//                me.usersForm = {
//                  entryDate: '',
//                  depart: '',
//                  position: '',
//                  sex: '',
//                  education: '',
//                  marry: '',
//                  address: '',
//                  income: '',
//                  relativeContact: '',
//                  urgencyContact: '',
//                }
//              }
//            } else {
//              me.usersForm = {
//                entryDate: '',
//                depart: '',
//                position: '',
//                sex: '',
//                education: '',
//                marry: '',
//                address: '',
//                income: '',
//                relativeContact: '',
//                urgencyContact: '',
//              }
//            }
//            me.loading = false;
//          } else {
//            me.usersForm = {
//              entryDate: '',
//              depart: '',
//              position: '',
//              sex: '',
//              education: '',
//              marry: '',
//              address: '',
//              income: '',
//              relativeContact: '',
//              urgencyContact: '',
//            }
//            me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
//          }
//        });
//      }
      //获取列表信息
      if (this.$constant.REGISTERURL && id !== undefined ) {
        let me = this;
        this.loading = true;
        this.$http({
          url: this.$constant.REGISTERURL+"/"+id,
          vm: me,
          method: "GET"
        }, function (data) {
          if (data) {
            if (data.code === 200 && data.message === '成功') {
              if (data.data) {
                let dt = data.data;
                me.tableData = [{
                  name:me.$handleData(dt.name),
                  phone:me.$handleData(dt.mobile),
                  registerTime:me.$handleData(dt.createTime) === '' ? '': formatDate(me.$handleData(dt.createTime)),
                  company:me.$handleData(dt.company)
                }]
                me.usersForm = {
                  entryDate: me.$handleData(dt.entryTimeStr),
                  depart: me.$handleData(dt.department),
                  position: "",
                  sex: me.$handleData(dt.sex),
                  education: me.$handleData(dt.edu),
                  marry: me.$handleData(dt.marital),
                  address: me.$handleData(dt.address),
                  income: me.$handleData(dt.monthIncome) === '' ? '' : '￥ ' + me.$handleData(dt.monthIncome),
                  relativeContact: me.$handleData(dt.kinshipStr),
                  urgencyContact: me.$handleData(dt.emergencyStr),
                }
              } else {
                me.tableData = [];
                me.usersForm = {
                  entryDate: '',
                  depart: '',
                  position: '',
                  sex: '',
                  education: '',
                  marry: '',
                  address: '',
                  income: '',
                  relativeContact: '',
                  urgencyContact: '',
                }
              }
            } else {
              me.tableData = [];
              me.usersForm = {
                entryDate: '',
                depart: '',
                position: '',
                sex: '',
                education: '',
                marry: '',
                address: '',
                income: '',
                relativeContact: '',
                urgencyContact: '',
              }
            }
            me.loading = false;
          } else {
            me.tableData = [];
            me.usersForm = {
              entryDate: '',
              depart: '',
              position: '',
              sex: '',
              education: '',
              marry: '',
              address: '',
              income: '',
              relativeContact: '',
              urgencyContact: '',
            }
            me.$messageBox({vm: me, message: "服务器响应失败！", title: "错误", type: 'error'});
          }
        });
      }

    },
    methods: {
      cgxpageHandle(){
      },
      cgxpagesizeHandle(){
      },
      returnBtn(){
        this.$router.push({name:"totalDataList"});
      },
      contactBtn(){
        let id = this.$router.currentRoute.params.id,
          name = this.$router.currentRoute.name;
        if(id !== undefined && name !== undefined){
          this.$router.push({name: "contactsDetail", params: {id,name,mcId:this.mcId}});
        }
      },
      phoneBtn(){
        let id = this.$router.currentRoute.params.id,
          name = this.$router.currentRoute.name;
        if(id !== undefined && name !== undefined){
          this.$router.push({name: "PMDetail", params: {id, name, mcId:this.mcId}});
        }
      },
      jingdongBtn(){
        let id = this.$router.currentRoute.params.id,
          name = this.$router.currentRoute.name;
        if(id !== undefined && name !== undefined){
          this.$router.push({name: "JdDetail", params: {id, name, mcId:this.mcId}});
        }
      },
      taobaoBtn(){
        let id = this.$router.currentRoute.params.id,
          name = this.$router.currentRoute.name;
        if(id !== undefined && name !== undefined){
          this.$router.push({name: "taobaoDetail", params: {id, name, mcId:this.mcId}});
        }
      },
    },
    components: {
      defineContent
    }
  }
</script>

<style lang='scss'>
  .user-detail-card {
    box-sizing: border-box;
    position: relative;
    padding: 20px !important;
    max-height: 100%;
    overflow: auto;
    .el-card__body {
      height: 100%;
      min-width: 1160px;
      box-sizing: border-box;
      padding: 0 !important;
    }
    .users-detail-btn {
      .el-form-item {
        width: 23.46% !important;
      }
    }
    .el-card__header {
      position: relative;
      em {
        color: #888;
        position: absolute;
        top: 10px;
        right: 10px;
        font-style: normal;
        cursor: pointer;
      }
      i {
        font-size: 20px;
        color: #888;
        margin-right: 5px;
      }
    }
    table {
      width: 100% !important;
      td:nth-child(7), td:nth-child(8) {
        color: #FF004F;
      }
      div.cell {
        padding: 0 5px;
        width:100% !important;
        box-sizing: border-box;
      }
    }
    .user-msg {
      width: 100%;
      margin-top: 10px;
      position: relative;
      .el-card__body {
        padding: 20px !important;
      }
    }
    .content {
      height: auto;
    }
    .user-msg-body {
      height: 250px;
    }
    .user-msg-header .el-card__header {
      padding: 10px !important;
      font-size: 20px;
      font-weight: bold;
    }
    .users-form {
      .users-form-line {
        .el-form-item {
          float: left;
          width: 32%;
          position: relative;
          padding-left: 100px;
          margin-right: 2%;
          box-sizing: border-box;
          label {
            width: 100px;
            position: absolute;
            top: 0;
            left: 0;
          }
          .el-form-item__content {
            width: 100%;
            text-align: center;
          }
          button {
            width: 100%;
            box-sizing: border-box;
          }
        }
        .el-form-item-last {
          margin-right: 0;
        }
      }
    }
  }
</style>
