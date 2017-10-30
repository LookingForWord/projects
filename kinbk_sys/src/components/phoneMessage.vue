<template>
  <user-msg-box :title="title" :userMsgBoxClass="userMsgBoxClass">
    <phone-message-detail></phone-message-detail>
  </user-msg-box>
</template>

<script>
  import userMsgBox from './userMsgBox';
  import phoneMessageDetail from './phoneMessageDetail';
  export default{
    name: "phoneMessage",
    data(){
      return {
        title: "手机信息",
        userMsgBoxClass:"user-msg-box-phone"
      }
    },
    components: {
      userMsgBox,
      phoneMessageDetail
    }
  }
</script>

<style scoped lang='scss'>

</style>
