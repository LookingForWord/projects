<template>
  <div class='main-container'>
    <header-nav></header-nav>
    <div class='main'>
      <aside-nav></aside-nav>
      <div class='main-content'>
        <breadcrumb :menuLists='menuLists'></breadcrumb>
        <router-view></router-view>
      </div>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
  import headerNav from './header';
  import footerNav from './footer';
  import asideNav from './aside';
  import breadcrumb from './breadcrumb';
  export default {
    name: 'sysIndex',
    data () {
      return {
        menuLists: [{title: '首页', url: 'home'}]
      }
    },
    methods: {},
    mounted(){

    },
    components: {
      headerNav,
      footerNav,
      asideNav,
      breadcrumb,
    }
  }
</script>
<style scoped lang='scss'>
  .main-container {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 60px 0 50px;
    box-sizing: border-box;
  }

  .main {
    height: 100%;
    padding: 40px 40px 0 260px;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }

  .main-content {
    width: 100%;
    height: 100%;
    padding-top: 46px;
    padding-bottom: 20px;
    box-sizing: border-box;
    position: relative;
    .el-table__body-wrapper {
      overflow: hidden;
    }
  }
</style>
