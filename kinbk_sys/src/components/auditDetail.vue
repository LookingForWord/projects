<template>
  <el-card class="box-card audit-detail-card" v-loading.body="loading">
    <define-content :cgxpageHandle='cgxpageHandle' :tableData='tableData' :total="total"
                    :cgxpagesizeHandle="cgxpagesizeHandle">
      <el-table-column
        prop="name"
        label="姓名"
        width='9%'>
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width='13%'>
      </el-table-column>
      <el-table-column
        prop="identityCard"
        label="身份证号码"
        width='19%'
      >
      </el-table-column>
      <el-table-column
        prop="submitProject"
        label="提交项目"
        width='9%'
      >
      </el-table-column>
      <el-table-column
        prop="submitDate"
        label="提交时间"
        width='20%'
      >
      </el-table-column>
      <el-table-column
        prop="limit"
        label="剩余额度/已授权额度"
        width='30%'
      >
      </el-table-column>
    </define-content>
    <div class='user-msg'>
      <el-card class="box-card user-msg-header">
        <div slot="header" class="clearfix">
          <span style="line-height: 20px;">用户资料</span>
        </div>
        <div class='user-msg-body'>
          <el-form :inline="true" ref='usersForm' :model="usersForm" class="users-form">
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
        <div class='audit-detail-operation'>
          <el-button type="primary" @click="pass">通&nbsp;&nbsp;&nbsp;过</el-button>
          <el-button @click='noPass'>不通过</el-button>
        </div>
      </el-card>
      <div class='no-pass' v-if='noPassCertiStatus'>
        <el-card class="box-card no-pass-header">
          <div slot="header" class="clearfix">
            <span style="line-height: 20px;">请勾选用户需要重新认证的项目</span>
            <i class='el-icon-close' @click='closeNoPass'></i>
          </div>
          <div class='no-pass-body'>
            <ul class='clearfix' @click='selectHandle($event)' ref='selectContainer'
                v-if='certiItems && certiItems.length>0'>
              <li v-for='item in certiItems' :data-id='item.id'><span>{{item.name}}</span><i
                class="el-icon-circle-check"></i></li>
            </ul>
          </div>
          <div class='no-pass-operation'>
            <el-button type="primary" @click="submitCerti">确&nbsp;&nbsp;&nbsp;认</el-button>
            <el-button @click='resetCerti'>重&nbsp;&nbsp;&nbsp;置</el-button>
          </div>
        </el-card>
      </div>
      <div class='pass' v-if='passStatus'>
        <el-card class="box-card pass-header">
          <div slot="header" class="clearfix">
            <span style="line-height: 20px;">请填写提取金额</span>
            <i class='el-icon-close' @click='closePass'></i>
          </div>
          <div class='pass-body overflow-top'>
            <el-form :model="accountForm" :rules="accountFormRules" ref="accountForm" class="accountForm">
              <el-form-item prop="account">
                <el-input v-model.trim="accountForm.account" auto-complete="off"
                          :placeholder='"请输入提额金额0~"+accountForm.placeholder'></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class='pass-operation'>
            <el-button type="primary" @click="submitPass('accountForm')">确&nbsp;&nbsp;&nbsp;认</el-button>
            <el-button @click='resetPass("accountForm")'>重&nbsp;&nbsp;&nbsp;置</el-button>
          </div>
        </el-card>
      </div>
    </div>
  </el-card>
</template>

<script>
  import defineContent from './content';
  import formatDate from '../api/formatDate';
  export default {
    data(){
      var validateAccount = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入提额金额'));
        } else if (Number(value) === 0 || Number(value) % 100 !== 0) {
          callback(new Error('提额金额仅为100的整数倍！'));
        } else if (Number(value) > Number(this.accountForm.placeholder) || Number(value) < 0) {
          callback(new Error('提额金额应为0~' + this.accountForm.placeholder));
        } else {
          callback();
        }
      };
      return {
        loading: false,
        tableData: [],
        total: 0,
        noPassCertiStatus: false,
        passStatus: false,
        certiItems: [
          {
            id: '4',
            name: '手机运营商'
          }, {
            id: '5',
            name: '淘宝'
          },
          {
            id: '6',
            name: '京东'
          },
          {
            id: '3',
            name: '联系人'
          },
          {
            id: '2',
            name: '个人资料'
          }
        ],
        accountForm: {
          account: '',
          placeholder: '0'
        },
        accountFormRules: {
          account: [
            {validator: validateAccount, trigger: 'blur'}
          ]
        },
        usersForm: {
          entryDate: '',
          depart: '',
          position: '',
          education: '',
          sex: '',
          marry: '',
          address: '',
          income: '',
          relativeContact: '',
          urgencyContact: ''
        }
      }
    },
    mounted(){
      this.$parent.menuLists = [{title: '首页', url: 'home'}, {title: '提额审核', url: 'auditAll'}, {
        title: '审核信息',
        url: 'auditDetail'
      }];
      let id = this.$router.currentRoute.params.id,
        mcId = this.$router.currentRoute.params.mcId;
      if (this.$constant.AUDITDETAIL && id !== undefined && mcId !== undefined) {
        let me = this;
        this.loading = true;
        this.$http({
          url: this.$constant.AUDITDETAIL,
          vm: me,
          method: "GET",
          params: {memberId: id, mcId}
        }, function (data) {
          if (data) {
            if (data.code === 200 && data.message === '成功') {
              if (data.data) {
                let dt = data.data[0];
                me.accountForm = {
                  account: '',
                  placeholder: me.$handleData(dt.maxRatio) === '' ? '0' : me.$handleData(dt.maxRatio),
                };
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
                  relativeContact: me.$handleData(dt.kinship) + ' ' + me.$handleData(dt.kinshipName) + ' ' + me.$handleData(dt.kinshipMobile),
                  urgencyContact: me.$handleData(dt.emergencyLink) + " " + me.$handleData(dt.emergencyName) + " " + me.$handleData(dt.emergencyMobile)
                }
              } else {
                me.accountForm = {
                  account: '',
                  placeholder: '0'
                }
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
                  urgencyContact: ''
                }
              }
            } else {
              me.accountForm = {
                account: '',
                placeholder: '0'
              }
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
                urgencyContact: ''
              }
            }
            me.loading = false;
          } else {
            me.accountForm = {
              account: '',
              placeholder: '0'
            }
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
              urgencyContact: ''
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
      submitCerti(){
        let activeElems = this.$refs.selectContainer.getElementsByClassName('active'), data = [];
        [].slice.apply(activeElems).forEach(function (elem) {
          if (elem.className === 'active') {
            data.push(elem.dataset.id);
          }
        });
        let mcId = this.$router.currentRoute.params.mcId;
        if (data.length > 0 && this.$constant.CERTIITEMS && mcId !== undefined) {
          let me = this;
          this.$http({
            url: this.$constant.CERTIITEMS,
            vm: this,
            method: "POST",
            data: {mcId, certiItem: data.join(','), auditState: 0, creditAmount: ''}
          }, function (data) {
            if (data && data.code === 200) {
              //提交成功
              //me.$messageBox({vm: me, title: "提示", message: "提交成功！", type: "warning"});
              //移除当前内容框
              me.resetCerti();//重置激活项
              //返回未审核列表
              me.$router.push({name:"auditAll"});
            } else {
              //提交失败
              me.$messageBox({vm: me, title: "提示", message: "提交失败！", type: "warning"});
            }
          });
        }else{
            this.$messageBox({
              title:"提示：",
              message:"请勾选需要重新认证的项目！",
              type:"warning",
              vm:this
            });
        }
      },
      resetCerti(){//取消所有的选中
        let activeElems = this.$refs.selectContainer.getElementsByClassName('active');
        [].slice.apply(activeElems).forEach(function (elem) {
          if (elem.className === 'active') {
            elem.className = '';
          }
        });
      },
      resetPass(formName){//重置
        this.$refs[formName].resetFields();
        this.accountForm.account = '';
      },
      submitPass(formName){//提交
        let me = this;
        this.$refs[formName].validate((valid) => {
          let mcId = this.$router.currentRoute.params.mcId;
          if (valid && this.$constant.ACCOUNT && mcId !== undefined) {
            this.$http({
              url: this.$constant.ACCOUNT,
              vm: me,
              method: "POST",
              params: {mcId, creditAmount: me.accountForm.account, auditState: 1}
            }, function (data) {
              //data =false;
              if (data && data.code === 200) {
                me.resetPass('accountForm');
                //提交成功
                //me.$messageBox({vm: me, title: "提示", message: "提额成功！", type: "warning"});
                //返回未审核列表
                me.$router.push({name:"auditAll"});
              } else {
                //提交失败
                me.$messageBox({vm: me, title: "提示", message: "提额失败！", type: "warning"});
              }
            });
          } else {
            return false;
          }
        });
      },
      closeNoPass(){
        if (this.noPassCertiStatus) {
          this.noPassCertiStatus = false;
        }
      },
      closePass(){
        if (this.passStatus) {
          this.passStatus = false;
        }
      },
      pass(){
        if (!this.passStatus) {
          this.passStatus = true;
        }
      },
      noPass(){
        if (!this.noPassCertiStatus) {
          this.noPassCertiStatus = true;
        }
      },
      selectHandle(e){
        let target = e.target;
        if (target.nodeName !== 'UL') {
          if (target.nodeName === 'SPAN' || target.nodeName === 'I') {
            target = target.parentNode;
          }
          //切换样式
          if (target.className === 'active') {
            target.className = '';
          } else {
            target.className = 'active';
          }
        }
      }
    },
    components: {
      defineContent
    }
  }
</script>

<style lang='scss'>
  .audit-detail-card {
    box-sizing: border-box;
    position: relative;
    padding: 20px !important;
    max-height: 100%;
    overflow: auto;
    .users-form {
      /* .el-radio-group{
         width:100%;
         height:36px;
         line-height:36px;
         text-align: left;
         .el-radio+.el-radio{
           margin-left:30px;
         }
       }*/
      .users-form-line {
        .el-form-item {
          float: left;
          width: 32%;
          position: relative;
          padding-left: 100px;
          margin-right: 2%;
          box-sizing: border-box;
          & > label {
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
    .users-detail-btn {
      .el-form-item {
        width: 23.46% !important;
      }
    }
    .el-card__body {
      height: 100%;
      min-width: 1160px;
      box-sizing: border-box;
      padding: 0 !important;
    }
    table {
      width: 100% !important;
      div.cell {
        padding: 0 5px;
      }
    }
    .content {
      height: auto;
    }
    .user-msg {
      width: 100%;
      margin-top: 10px;
      position: relative;
      .el-card__body {
        padding: 20px !important;
      }
    }
    /*.content {*/
    /*height: 75px !important;*/
    /*overflow: hidden;*/
    /*}*/
    .audit-detail-operation, .no-pass-operation, .pass-operation {
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      .el-button--primary {
        margin-right: 100px;
      }
    }
    .user-msg-body, .no-pass-body, .pass-body {
      height: 250px;
    }
    .user-msg-header .el-card__header, .no-pass-header .el-card__header, .pass-header .el-card__header {
      padding: 10px !important;
      font-size: 20px;
      font-weight: bold;
    }
    .no-pass, .pass {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
    }
    .no-pass-body {
      position: relative;
      ul {
        width: 590px;
        height: 102px;
        overflow: hidden;
        margin: 0 auto;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -51px;
        margin-left: -295px;
      }
      li {
        float: left;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        border: 1px solid #ddd;
        text-align: center;
        line-height: 100px;
        cursor: pointer;
        margin-left: 20px;
        position: relative;
        &:first-child {
          margin: 0;
        }
        &.active i {
          display: block;
        }
      }
      i {
        position: absolute;
        top: 1px;
        left: 1px;
        font-size: 30px;
        display: none;
        color: #00ffdd;
      }
    }
    .no-pass-header, .pass-header {
      position: relative;
      .el-icon-close {
        font-size: 30px;
        position: absolute;
        top: 5px;
        right: 10px;
        background-color: #ccc;
        border-radius: 15px;
        overflow: hidden;
        cursor: pointer;
      }
    }
    .accountForm {
      width: 250px;
      margin: 0 auto;
      margin-top: 80px;
    }
    .pass-body {
      width: 100%;
    }
  }
</style>
