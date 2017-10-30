<template>
  <user-msg-box :title="title" :userMsgBoxClass="userMsgBoxClass">
    <taobao-detail></taobao-detail>
  </user-msg-box>
</template>

<script>
  import userMsgBox from './userMsgBox';
  import taobaoDetail from './taobaoDetail';
  export default {
    name: "taobao",
    data(){
      return {
        title: "淘宝",
        userMsgBoxClass:"user-msg-box-taobao"
      }
    },
    components: {
      userMsgBox,
      taobaoDetail
    }
  }
</script>

<style scoped lang='scss'>

</style>
