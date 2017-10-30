<template>
  <div class='nav-aside-container'>
    <el-menu  class="nav-aside" @open="" @close="" :unique-opened='true' theme='dark'>
      <template v-for='(menu,index) in menuData'>
        <el-submenu v-if='menu.lists && menu.lists.length>0' :index="index+1 + ''">
          <template slot="title"><i :class="menu.icon"></i>{{menu.title}}</template>
          <el-menu-item-group v-for='(list,idx) in menu.lists' :key="index + '-' +idx">
            <router-link :to='{name:list.url}'>
              <el-menu-item :index="index + '-' +idx" :class="list.url"><em></em>{{list.content}}</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <router-link :to='{name:menu.url}' v-else>
          <el-menu-item :index="index+1 + ''" class='menu-single' :class="menu.url"><i :class="menu.icon"></i>{{menu.title}}
          </el-menu-item>
        </router-link>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'asideNav',
    data() {
      return {
        menuData: [
          {
            title: "统计信息",
            icon: 'el-icon-message',
            url: 'totalDataList'
          },
          {
            title: "提额审核",
            icon: 'el-icon-star-on',
            lists: [
              {
                content: '全部',
                url: 'auditAll'
              },
              {
                content: '未审核',
                url: 'unaudited'
              },
              {
                content: '已审核',
                url: 'audited'
              }
            ]
          },
          {
            title: "放款管理",
            icon: 'el-icon-star-off',
            lists: [
              {
                content: '全部',
                url: 'prestadAll'
              },
              {
                content: '未放款',
                url: 'unprestad'
              },
              {
                content: '已放款',
                url: 'prestaded'
              }
            ]
          },
          {
            title: "还款管理",
            icon: 'el-icon-search',
            lists: [
              {
                content: '全部',
                url: 'refundAll'
              },
              {
                content: '未还款',
                url: 'unrefunded'
              },
              {
                content: '已结清',
                url: 'refunded'
              }
            ]
          },
          {
            title: "版本管理",
            icon: 'el-icon-document',
            url:"versionManage"
          },
          {
            title: "协议管理",
            icon: 'el-icon-star-off',
            url:"protocolManage"
          },
          {
            title: "banner管理",
            icon: 'el-icon-picture',
            url:"bannerManage"
          },
          {
            title: "OA管理",
            icon: 'el-icon-upload',
            url:"oaDataManage"
          },
          {
            title: "字典数据管理",
            icon: 'el-icon-minus',
            url:"baseDataManage"
          }
        ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      }
    }
  }
</script>
<style lang='scss'>
  .nav-aside-container {
    width: 220px;
    height: 100%;
    min-height: 552px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #324157;
    em {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid #bbb;
      border-radius: 5px;
      position: absolute;
      top: 50%;
      left: 55px;
      margin-top: -5px;
    }
    /*.el-menu-item.is-active em {*/
      /*border-color: #20a0ff;*/
    /*}*/
    .el-menu-item.is-active{
      color:#bfcbd9;
    }
    .el-submenu__title, .menu-single {
      padding-left: 40px !important;
      padding-right: 40px !important;
      text-align: left;
    }
    .el-submenu__icon-arrow {
      right: 50px;
    }
    a {
      text-decoration: none;
    }
  }
</style>
