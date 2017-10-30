<template>
  <el-form :model="sureUser" :rules="sureRules" ref="sureUser"  class="sureUser">
    <el-form-item prop="username">
      <el-input  v-model="sureUser.username" auto-complete="off" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item prop="securityCode" class="security-code">
      <el-input v-model="sureUser.securityCode" auto-complete="off" placeholder="请输入验证码"></el-input><em class="show-security-code">{{sureUser.code}}</em><span @click="changeCode">换一张</span>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="nextBtn('sureUser')" class="next-btn">下一步</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data(){
      let validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名！'));
        }else{
          callback();
        }
      };
      let validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码！'));
        }else if (value.toLowerCase() !== this.sureUser.code.toLowerCase()) {
          callback(new Error('验证码输入错误！'));
        } else {
          callback();
        }
      };
      return {
        sureUser:{
          username:'',
          securityCode:'',
          code:'abCD'
        },
        sureRules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          securityCode: [
            { validator: validateCode, trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      nextBtn(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$parent.$parent.finishStatus={active:1,status:'success'};//修改步骤条
            this.$router.push({name:"safetyVerification"});
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      changeCode(){
        console.log('切换验证码');
      }
    }
  }
</script>

<style lang='scss' scoped>
  .sureUser{
    width:400px;
    margin:0 auto;
    height:156px;
    overflow: hidden;
    margin-top:60px;
  }
  .next-btn{
    width:100%;
  }
  .security-code .el-input{
    width:200px;
    display: inline-block;
  }
  .security-code{
    width:400px;
    height:38px;
    .show-security-code,span{
      display: inline-block;
      width:80px;
      height:36px;
      margin-left:20px;
    }
    .show-security-code{
      border:1px solid #325157;
      box-sizing: border-box;
    }
    span{
      cursor: pointer;
    }
  }
</style>
