<template>
  <user-msg-box :title="title" :userMsgBoxClass="userMsgBoxClass">
    <jing-dong-detail></jing-dong-detail>
  </user-msg-box>
</template>

<script>
  import userMsgBox from './userMsgBox';
  import jingDongDetail from './jingDongDetail';
  export default {
    name: "jingDong",
    data(){
      return {
        title: "京东",
        userMsgBoxClass: "user-msg-box-jingdong"
      }
    },
    components: {
      userMsgBox,
      jingDongDetail
    }
  }
</script>

<style scoped lang='scss'>

</style>
