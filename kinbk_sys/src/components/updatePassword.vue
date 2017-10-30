<template>
  <el-card class="box-card update-password-card">
    <div slot="header" class="clearfix card-header">
      <span>修改密码</span>
    </div>
    <div class="card-body">
      <el-form label-width="100px" :model='updatePasswordData' :rules='rules' ref='updatePasswordData'>
        <el-form-item label='原密码：' prop="oldPassword">
          <el-input v-model="updatePasswordData.oldPassword" type='password' auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label='新密码：' prop='password'>
          <el-input type="password" v-model="updatePasswordData.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label='确认新密码：' prop='checkPassword'>
          <el-input type="password" v-model="updatePasswordData.checkPassword" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('updatePasswordData')">提&nbsp;&nbsp;&nbsp;交</el-button>
          <el-button @click="resetForm('updatePasswordData')">重&nbsp;&nbsp;&nbsp;置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>
<script>
  export default {
    data(){
      let validateOldPassword = (rule, value, callback) => {
        let session = this.$session({key: "loginMsg"});
        if (value === '') {
          callback(new Error('请输入原密码！'));
        } else if (session && session.password !== value) {
          callback(new Error('原密码错误！'));
        } else {
          callback();
        }
      };
      let validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else if (value.length < 6) {
          callback(new Error('请输入至少6位的新密码'));
        } else {
          let session = this.$session({key: "loginMsg"});
          if (this.$constant.UPDATEPASSWORDVALIDATE && session && session.userId !== undefined) {
            let vm = this;
            this.$http({
              vm,
              url: this.$constant.UPDATEPASSWORDVALIDATE,
              method: 'POST',
              data: {userId: session.userId, password: value}
            }, function (data) {
              if (data) {
                if (data.code === 200) {
                  if (vm.updatePasswordData.checkPassword !== '') {
                    vm.$refs.updatePasswordData.validateField('checkPassword');
                  }
                  callback();
                } else if (data.code === -1004) {//验证失败
                  callback(new Error('密码不可用，请再次输入！'));
                }
              } else {
                //验证失败
                callback(new Error('密码不可用，请再次输入！'));
              }
            });
          }
        }
      };
      let validatePasswordCheck = (rule, value, callback) => {
          console.log(this.updatePa);
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.updatePasswordData.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        updatePasswordData: {
          password: '',
          checkPassword: '',
          oldPassword: ''
        },
        rules: {
          oldPassword: [
            {validator: validateOldPassword, trigger: 'blur'}
          ],
          password: [
            {validator: validatePassword, trigger: 'blur'}
          ],
          checkPassword: [
            {validator: validatePasswordCheck, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid && this.$constant.UPDATEPASSWORD) {
            let session = this.$session({key: "loginMsg"}), vm = this;
            if(session && session.userId !== undefined){
              this.$http({
                vm,
                url: this.$constant.UPDATEPASSWORD,
                method: 'POST',
                data: {id: session.userId, password: this.updatePasswordData.password}
              },function(data){
                  if(data === true){
                    vm.$messageBox({vm,title:"提示：",message:"密码修改成功,请再次登陆！",type:"warning",confirmFun:function(){
                      //清除保存记录
                      if (window.localStorage) {
                        window.localStorage.removeItem('login');
                      }
                      vm.$session({key: 'loginMsg', remove: true});
                      vm.$router.push({name:"login"});
                    },cancelFun:function(){
                      //清除保存记录
                      if (window.localStorage) {
                        window.localStorage.removeItem('login');
                      }
                      vm.$session({key: 'loginMsg', remove: true});
                      vm.$router.push({name:"login"});
                    }});
                  }else{
                    vm.$messageBox({vm,title:"提示：",message:"密码修改失败！",type:"warning"})
                  }
                  vm.resetForm(formName);
              });
            }
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted(){
      this.$parent.menuLists = [{title: '首页', url: 'home'}, {title: '修改密码', url: 'updatePassword'}];
    }
  }
</script>
<style lang='scss'>
  .update-password-card {
    .card-header {
      height: 20px;
      line-height: 20px;
      text-align: left;
      font-size: 16px;
    }
    .card-body {
      .el-button {
        margin-right: 50px;
      }
    }
    .el-form {
      width: 600px;
      margin: 0 auto;
    }
  }
</style>
