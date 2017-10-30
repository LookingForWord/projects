<template>
  <div class="forget-password-container">
    <el-card class="forget-password-card">
      <div slot="header" class="clearfix forget-password-header">
        <el-steps :active="finishStatus.active" :finish-status="finishStatus.status">
          <el-step title="确认账号"></el-step>
          <el-step title="安全验证"></el-step>
          <el-step title="重置密码"></el-step>
        </el-steps>
      </div>
      <div class="forget-password-body">
          <router-view></router-view>
      </div>
    </el-card>
  </div>
</template>

<script>
    export default {
        data(){
            return {
              finishStatus:{
                  status:'process',//wait/process/finish/error/success
                  active:0
              }
            }
        },
        mounted(){
          if(this.$router.currentRoute.name !== 'sureUser'){
            this.$router.push({name:'sureUser'});
          }
        }
    }
</script>

<style lang='scss'>
    .forget-password-container{
      width:100%;
      height:100%;
    }
  .forget-password-card{
    width:800px;
    height:500px;
    margin:0 auto;
    position: absolute;
    top:50%;
    left:50%;
    margin-left:-400px;
    margin-top:-250px;
  }
  .el-card__header{
    height:101px;
    overflow: hidden;
    .el-step__line{
      left:50px;
    }
  }
  .forget-password-body{
    height:500 - 101-40px;
    overflow: hidden;
  }
  .el-step{
    width:200px !important;
    &:last-child{
      width:60px !important;
    }
  }
  .el-step__head{
    padding-left:20px;
  }
  .el-step__icon{
    position: relative;
    width:28px;
    height:28px;
    left:-10px;
  }
</style>
