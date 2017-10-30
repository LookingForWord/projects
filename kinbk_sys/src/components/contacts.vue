<template>
  <user-msg-box :title="title" :userMsgBoxClass="userMsgBoxClass">
    <contacts-detail></contacts-detail>
  </user-msg-box>
</template>

<script>
  import userMsgBox from './userMsgBox';
  import contactsDetail from './contactsDetail';
  export default {
    name: "contacts",
    data(){
      return {
        title: "通讯录",
        userMsgBoxClass:"user-msg-box-contacts"
      }
    },
    components: {
      userMsgBox,
      contactsDetail
    }
  }
</script>

<style scoped lang='scss'>

</style>
