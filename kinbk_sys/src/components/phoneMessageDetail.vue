<template>
  <div class="user-msg-box-body user-phone-box-body">
    <div class="user-phone-box-body-aside">
      <ul>
        <li v-if="phoneMsgData && phoneMsgData.length > 0" v-for="data in phoneMsgData"
             :data-key="data.key" @click="switchContent($event)">{{data.label}}
        </li>
      </ul>
    </div>
    <div class="user-phone-box-body-main">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 30px;">{{currentTitle}}</span>
        </div>
        <div class="user-phone-main-content">
          <router-view name="phoneContent"></router-view>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "phoneMessageDetail",
    data(){
      return {
        phoneMsgData: [
          {
            label: "手机基本信息",
            key: "phoneBaseMsg"
          },
          {
            label: "手机套餐信息",
            key: "phonePackage"
          },
          {
            label: "手机账单信息",
            key: "phoneBill"
          },
          {
            label: "手机通话详情",
            key: "phoneCall"
          },
          {
            label: "手机短信详情",
            key: "phoneShortMsg"
          },
          {
            label: "手机充值信息",
            key: "phoneRecharge"
          },
          {
            label: "手机号亲情网信息",
            key: "phoneFamily"
          }
        ],
        currentTitle: ""
      }
    },
    mounted(){
      let routerName = this.$router.currentRoute.name;
      if (routerName) {
        let currentElem = document.querySelector('[data-key=' + routerName + ']');
        this.currentTitle = currentElem.innerHTML;
        currentElem.className = 'active'
      }
    },
    methods: {
      switchContent(event){
        let currentElem = event.currentTarget;
        if (currentElem.className !== 'active') {
          //重置激活样式
          document.querySelector('.user-phone-box-body-aside li.active').className = '';
          currentElem.className = 'active';
          //切换路由
          let targetRouter = currentElem.dataset.key;
          if (targetRouter !== '') {
            this.$router.push({name: targetRouter});
            this.currentTitle = currentElem.innerHTML;
          }
        }
      }
    }
  }
</script>

<style lang='scss'>
  .user-phone-box-body {
    position: relative;
    padding: 0 40px 0 240px;
    box-sizing: border-box;
    overflow: hidden;
    .user-phone-box-body-aside {
      width: 200px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      ul {
        width: 100%;
        height: 100%;
        padding-top:10px;
        box-sizing: border-box;
        background-color: #eee;
        li {
          height: 30px;
          line-height: 30px;
          font-size: 16px;
          text-align: center;
          cursor: pointer;
          margin-top: 5px;
          color: #000;
          &:first-child {
            margin-top: 0;
          }
          &.active {
            background-color: #ddd;
          }
        }
      }
    }
    .user-phone-box-body-main {
      width: 100%;
      height: 100%;
      .el-card__header {
        text-align: left;
        span {
          margin-left: 10px;
          font-weight: bold;
        }
      }
      .box-card {
        width: 100%;
        height: 100%;
      }
      .user-phone-main-content {
        width: 100%;
        height: 100%;
      }
    }
  }

  .user-msg-box-phone {
    .box-card {
      width: 100%;
      margin: 0 auto;
      height: 100%;
      padding-top: 51px;
      position: relative;
      box-sizing: border-box;
    }
  }
</style>
