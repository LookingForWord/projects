<template>
  <el-card class="box-card audit-pass-card" v-loading.body="loading">
    <define-content :cgxpageHandle='cgxpageHandle' :tableData='tableData' :total="total" :cgxpagesizeHandle="cgxpagesizeHandle">
      <el-table-column
        prop="name"
        label="姓名"
        width='8%'>
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width='10%'>
      </el-table-column>
      <el-table-column
        prop="identityCard"
        label="身份证号码"
        width='16%'
      >
      </el-table-column>
      <el-table-column
        prop="submitProject"
        label="提交项目"
        width='10%'
      >
      </el-table-column>
      <el-table-column
        prop="submitDate"
        label="提交时间"
        width='16%'
      >
      </el-table-column>
      <el-table-column
        prop="limit"
        label="剩余额度/已授权额度"
        width='40%'
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
        <div class='audit-pass-detail'>
          审核通过  <span>{{account}}</span>
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
        loading: false,
        tableData: [],
        total: 0,
        usersForm: {
          entryDate: '',
          sex:'',
          depart: '',
          position: '',
          education: '',
          marry: '',
          address: '',
          income: '',
          relativeContact: '',
          urgencyContact: ''
        },
        account: ''
      }
    },
    mounted(){
      this.$parent.menuLists = [{title: '首页', url: 'home'}, {title: '提额审核', url: 'auditAll'}, {
        title: '审核通过信息',
        url: 'auditPass'
      }];
      let id = this.$router.currentRoute.params.id,
        mcId = this.$router.currentRoute.params.mcId;
      if (this.$constant.AUDITPASSDETAIL && id !== undefined && mcId !== undefined) {
        let me = this;
        this.loading = true;
        this.$http({
          url: this.$constant.AUDITPASSDETAIL,
          vm: me,
          method: "GET",
          params: {memberId: id, mcId}
        }, function (data) {
          if (data) {
            if (data.code === 200 && data.message === '成功') {
              if (data.data) {
                let dt = data.data[0];
                me.account = me.$handleData(dt.amount) === '' ? '' : '提额￥'+me.$handleData(dt.amount);
                me.tableData = [{
                  name: me.$handleData(dt.realName),
                  phone: me.$handleData(dt.mobile),
                  identityCard: me.$handleData(dt.idCard),
                  submitProject: (me.$handleData(dt.creditCount) === '' ? '0' : me.$handleData(dt.creditCount)) + '/5',
                  submitDate: me.$handleData(dt.applyTime) === '' ? '' : formatDate(dt.applyTime),
                  limit: (me.$handleData(dt.residueAmount) === '' ? 0 : me.$handleData(dt.residueAmount)) + '/' + (me.$handleData(dt.creditAmount) === '' ? 0 : me.$handleData(dt.creditAmount))
                }];
                me.usersForm = {
                  entryDate: me.$handleData(dt.entryTime) === '' ? '' : formatDate(dt.entryTime, true),
                  depart: me.$handleData(dt.post),
                  position: me.$handleData(dt.position),
                  sex: me.$handleData(dt.sex) === '' ? '' : me.$handleData(dt.sex) === 1 ? '男' : me.$handleData(dt.sex) === 2 ? '女' : '',
                  education: me.$handleData(dt.edu),
                  marry: me.$handleData(dt.maritalStatus),
                  address: me.$handleData(dt.nowAddressProvince) + me.$handleData(dt.nowAddressCity) + me.$handleData(dt.nowAddressInfo),
                  income: me.$handleData(dt.monthIncome) === '' ? '' : '￥ ' + me.$handleData(dt.monthIncome),
                  relativeContact: me.$handleData(dt.kinship) +' '+ me.$handleData(dt.kinshipName) +' '+ me.$handleData(dt.kinshipMobile),
                  urgencyContact: me.$handleData(dt.emergencyLink) +' '+ me.$handleData(dt.emergencyName) +' '+ me.$handleData(dt.emergencyMobile),
                }
              } else {
                me.account = '';
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
              me.account = '';
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
            me.account = '';
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
        this.$router.push({name:"auditAll"});
      },
      contactBtn(){
        let id = this.$router.currentRoute.params.id,
          name = this.$router.currentRoute.name,
          mcId = this.$router.currentRoute.params.mcId;
        if(id !== undefined && name !== undefined && mcId !== undefined){
          this.$router.push({name: "contactsDetail", params: {id,name,mcId}});
        }
      },
      phoneBtn(){
        let id = this.$router.currentRoute.params.id,
          name = this.$router.currentRoute.name,
          mcId = this.$router.currentRoute.params.mcId;
        if(id !== undefined && name !== undefined && mcId !== undefined){
          this.$router.push({name: "PMDetail", params: {id,name,mcId}});
        }
      },
      jingdongBtn(){
        let id = this.$router.currentRoute.params.id,
          name = this.$router.currentRoute.name,
          mcId = this.$router.currentRoute.params.mcId;
        if(id !== undefined && name !== undefined && mcId !== undefined){
          this.$router.push({name: "JdDetail", params: {id,name,mcId}});
        }
      },
      taobaoBtn(){
        let id = this.$router.currentRoute.params.id,
          name = this.$router.currentRoute.name,
          mcId = this.$router.currentRoute.params.mcId;
        if(id !== undefined && name !== undefined && mcId !== undefined){
          this.$router.push({name: "taobaoDetail", params: {id,name,mcId}});
        }
      },
    },
    components: {
      defineContent
    }
  }
</script>

<style lang='scss'>
  .audit-pass-card {
    box-sizing: border-box;
    position: relative;
    padding: 20px !important;
    max-height: 100%;
    overflow: auto;
    .el-card__body {
      min-width: 1160px;
    }
    .users-detail-btn {
      .el-form-item {
        width: 23.46% !important;
      }
    }
    .audit-pass-detail {
      height: 30px;
      line-height: 30px;
      overflow: hidden;
      font-size: 20px;
      font-weight: bold;
      color: #004FFF !important;
      background-image: linear-gradient(to right, #ccc, #afa);
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
    .el-card__body {
      height: 100%;
      box-sizing: border-box;
      padding: 0 !important;
    }
    .el-card__header {
      padding: 10px !important;
      & > div {
        position: relative;
        line-height: 20px;
        overflow: hidden;
      }
      em {
        color: #888;
        position: absolute;
        top: 0;
        right: 10px;
        font-style: normal;
        cursor: pointer;
        overflow: hidden;
        line-height: 20px;
        height: 20px;
      }
      i {
        font-size: 20px;
        color: #888;
        margin-right: 5px;

      }
    }
    table {
      width: 100% !important;
      div.cell {
        padding: 0 5px;
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
  }
</style>
