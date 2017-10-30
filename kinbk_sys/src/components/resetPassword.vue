<template>
  <el-form label-width='100px' :model="surePassword" :rules="surePasswordRules" ref="surePassword"  class="surePassword">
    <el-form-item prop="newPassword" label="新密码：">
      <el-input  type='password' v-model="surePassword.newPassword" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item prop="checkPassword" label="确认新密码：">
      <el-input type='password' v-model="surePassword.checkPassword" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitBtn('surePassword')" class="sure-btn">确&nbsp;&nbsp;&nbsp;定</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data(){
      let validateNewPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码！'));
        }else{
          callback();
        }
      };
      let validateCheckPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入确认密码！'));
        }else if (value !== this.surePassword.newPassword ) {
          callback(new Error('两次输入密码不匹配！'));
        } else {
          callback();
        }
      };
      return {
        surePassword:{
          newPassword:'',
          checkPassword:''
        },
        surePasswordRules: {
          newPassword: [
            { validator: validateNewPassword, trigger: 'blur' }
          ],
          checkPassword: [
            { validator: validateCheckPassword, trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      submitBtn(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$parent.$parent.finishStatus={active:3,status:'success'};//修改步骤条
            //this.$router.push({name:"resetPassword"});
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style lang='scss' scoped>
  .surePassword{
    width:400px;
    margin:0 auto;
    height:154px;
    overflow: hidden;
    .sure-btn{
      width:100%;
    }
  }
</style>
