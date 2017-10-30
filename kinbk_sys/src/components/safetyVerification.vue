<template>
  <el-form :model="safeVerification" :rules="safeVerificationRules" ref="safeVerification"  class="safeVerification">
    <el-form-item class="safe-title">为了您的账号安全，请完成身份验证：</el-form-item>
    <el-form-item class="safe-phone">
      <h4>手机验证：</h4>
      <div class="safe-content">手机号：<span>{{safeVerification.phone}}</span></div>
    </el-form-item>
    <el-form-item class="phone" prop='safeCode'>
      <h4>验证码：</h4>
      <div class="safe-content">
        <el-input v-model="safeVerification.safeCode" auto-complete="off" placeholder="请输入验证码"></el-input><span @click="sendCode" class="send-code">发送验证码</span>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="nextBtn('safeVerification')" class="next-btn">下一步</el-button>
    </el-form-item>
    <el-form-item><span>注意：</span>如果您的密保工具无法使用,可以联系管理员更改！</el-form-item>
  </el-form>
</template>

<script>
    export default {
        data(){
          let validateCode = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入验证码！'));
            }else if (value != this.safeVerification.code) {
              callback(new Error('验证码输入错误！'));
            } else {
              callback();
            }
          };
            return {
              safeVerification:{
                  phone:'134******49',
                  id:0,
                  safeCode:'',
                  code:1234
              },
              safeVerificationRules: {
                  safeCode: [
                  { validator: validateCode, trigger: 'blur' }
                ]
              }
            }
        },
        methods:{
          sendCode(){
              console.log('发送验证码！');
          },
          nextBtn(formName){
            this.$refs[formName].validate((valid) => {
              if (valid) {
                this.$parent.$parent.finishStatus={active:2,status:'success'};//修改步骤条
                this.$router.push({name:"resetPassword"});
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          }
        }
    }
</script>

<style lang='scss'>
    .safeVerification{
      width:360px;
      margin:0 auto;
      overflow: hidden;
      height:359px;
      .el-form-item{
        text-align: left;
      }
      .el-input{
        display: inline-block;
        width:200px;
      }
      .send-code{
        display: inline-block;
        margin-left:36px;
        height:34px;
        width:100px;
        text-align: center;
        border:1px solid #ddd;
        cursor: pointer;
      }
      .next-btn{
        width:100%;
      }
      h4{
        font-size:20px;
        color:#000;
      }
      .safe-content{
        padding-left:20px;
      }
      .el-form-item__error{
        left:20px;
      }
    }
</style>
