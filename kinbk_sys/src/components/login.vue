<template>
  <div class='login-container'>
    <div class='login-main'>
      <div class='login-title'>
        <img src='../assets/logo.png'/>
      </div>
      <el-form :model='login'>
        <el-form-item>
          <el-input style="display: none"></el-input>
          <el-input v-model="login.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="display: none"></el-input>
          <el-input v-model="login.password" type="text" class='login-input'  placeholder="请输入密码" v-changeType></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox class='save-password' v-model='login.saveStatus'>记住密码</el-checkbox>
          <!--<span class='forget-password'><router-link :to="{name:'sureUser'}">忘记密码？</router-link></span>-->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click='loginHandle' class='login-btn'>登&nbsp;&nbsp;&nbsp;录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import handleSavePassword from '../api/savePassword';
  import getLoginMsg from '../api/getLoginMsg';
  export default {
    name: 'login',
    data () {
      return {
        login: {
          username: '',
          password: '',
          saveStatus: false
        }
      }
    },
    methods: {
      loginHandle(){
        let vm = this;
        if (this.login.username !== '' && this.login.password !== '' && this.$constant.LOGINURL) {
          this.$http({
            vm,
            url: this.$constant.LOGINURL,
            method: 'POST',
            timeout:30000,
            data: {username: this.login.username, password: this.login.password}
          }, function (data) {
            if (data) {
              if(data.code === 200){
                let supportSavePassword = handleSavePassword(vm);//保存密码 返回浏览器是否支持保存密码
                vm.$session({key: 'loginMsg', value: {password:vm.login.password,userId: data.data.userId, token: data.data.user.token,realName:data.data.user.realName}});//保存session
                if (supportSavePassword) {//浏览器支持记住密码
                  vm.$router.push({name: 'home'});
                } else {
                  vm.$messageBox({
                    vm, title: "提示", message: "您当前浏览器不支持记住密码！", type: "warning",
                    confirmFun (){
                      vm.$router.push({name: 'home'});
                    },
                    cancelFun (){
                      vm.$router.push({name: 'home'});
                    }
                  });
                }
              }else if(data.code === -1001){
                //清除保存记录
                if (window.localStorage) {
                  window.localStorage.removeItem('login');
                }
                vm.login.username = '';
                vm.login.password = '';
                vm.$messageBox({vm,title:"错误",message:"用户名与密码不匹配！",type:"error"});
              }
            } else {
              //响应失败
              vm.$messageBox({vm, message: "服务器响应失败！", title: "错误", type: 'error'});
            }
          });
        } else {
          this.$messageBox({vm: this, title: "提示", message: "用户名与密码不能为空！", type: "warning"});
        }
      }
    },
    created () {
      getLoginMsg(this);//填充登录信息
    },
    directives:{
        changeType:{
          inserted: function (el) {
            let input = el.querySelector('input');
            if(input){
                input.type = 'password';
            }
          }
        }
    }
  }
</script>
<style lang='scss'>
  .login-container {
    width: 100%;
    height: 100%;
    background-color: #325157; //url(../assets/bg.jpg) no-repeat center center
    background-size: cover;
    .save-password {
      float: left;
      color: #fff;
      font-size: 14px;
    }
    .forget-password {
      float: right;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
    }
    .login-btn {
      width: 100%;
      font-size: 20px;
      color: #000;
      border-color: transparent;
    }
    .login-title {
      width: 100%;
      height: 183px;
      text-align: center;
      img {
        width: 400px;
      }
    }
    .login-main {
      width: 600px;
      height: 400px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -300px;
      margin-top: -200px;
    }
    .el-form {
      width: 400px;
      margin: 0 auto;
    }
    .el-form-item input {

    }
    .el-checkbox__input .el-checkbox__inner {
      border-color: #fff !important;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner {
      background-color: transparent;
      border-color: transparent !important;
    }
    .el-button--primary {
      background-color: #eff;
    }
    .el-button--primary:hover {
      background-color: #fff;
      color: #000;
    }
  }
</style>
