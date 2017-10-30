<template>
  <div class='header'>
    <div class='header-left'>
      <span><router-link to='/'><img src='../assets/logo-inner.png'/></router-link></span>
      <span>蓝润金宝行管理系统</span>
    </div>
    <div class='header-right'>
      <!--<div class="search">-->
      <!--<el-input size="small" placeholder="请输入检索内容" icon="search" :on-icon-click="handleIconClick"></el-input>-->
      <!--</div>-->
      <div class="user">
        <el-dropdown trigger="click" @command='handleCommand'>
			      <span class="user-main">
				<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2201742883,753700641&fm=117&gp=0.jpg">{{loginUser}}<i
              class="el-icon-caret-bottom el-icon--right"></i>
			      </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command='updatePassword'>修改密码</el-dropdown-item>
            <el-dropdown-item command='exit'>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data() {
      return {
        loginUser: ""
      };
    },
    mounted(){
      let session = this.$session({key: 'loginMsg'});
      if (session && session.realName != undefined) {
        this.loginUser = session.realName;
      } else {
        this.loginUser = '管理员';
      }
    },
    methods: {
      handleIconClick(){
      },
      handleCommand(command){
        let vm = this;
        if (command === 'updatePassword') {
          this.$router.push({name: 'updatePassword'});
        } else if (command === 'exit') {
          let session = this.$session({key: 'loginMsg'});
          if (session && session.userId != undefined && this.$constant.LOGINOUT) {
            this.$http({
              vm,
              url: vm.$constant.LOGINOUT,
              method: 'POST',
              data: {id: session.userId}
            }, function (data) {
              if (data) {
                if (data.code === 200) {
                  vm.$session({key: 'loginMsg', remove: true});
                  vm.$router.push({name: 'login'});
                }
              } else {
                //响应失败
                vm.$messageBox({vm, message: "服务器响应失败,是否退出！", title: "错误", type: 'error',
                  confirmFun:function () {
                    vm.$session({key: 'loginMsg', remove: true});
                    vm.$router.push({name: 'login'});
                  }
                });
              }
            });
          } else {
            this.$session({key: 'loginMsg', remove: true});
            this.$router.replace({name: 'login'});
          }
        }
      }
    }
  }
</script>
<style lang='scss'>
  .header {
    width: 100%;
    height: 60px;
    background-color: #324157;
    color: #fff;
    line-height: 60px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .header-left {
    float: left;
    font-size: 20px;
    margin-left: 10px;
    vertical-align: middle;
    img {
      height: 40px;
      margin-top: 10px;
      margin-right: 5px;
    }
    span {
      float: left;
      height: 60px;
      line-height: 60px;
    }
  }

  .header-right {
    float: right;
    margin-right: 50px;
    .search {
      width: 200px;
      float: left;
    }
    .user {
      float: right;
      margin-left: 50px;
    }
    .user-main {
      color: #fff;
      display: block;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      img {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
  }

  .el-dropdown-menu {
    top: 55px !important;
  }
</style>
