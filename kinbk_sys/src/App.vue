<template>
  <div v-cloak id="app">
    <router-view name="appView"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
        userData: {
          title: '',
          content: ''
        }
      }
    },
    components: {
    },
  }
</script>

<style lang="scss">
  html, body, #app {
    width: 100%;
    min-width: 1080px;
    min-height: 680px;
    height: 100%;
    position: relative;
  }
  [v-cloak] {
    display: none;
  }

  .el-loading-mask {
    z-index: 2000 !important;
  }
</style>
