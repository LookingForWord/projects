<template ref="userMsgBox">
  <div class="user-msg-box" :class="userMsgBoxClass">
    <el-card class="box-card">
      <div slot="header" class="clearfix user-msg-box-header">
        <span style="line-height: 30px;">{{title}}</span>
        <i @click='closeMsgBox' class="close-msg-box">返回</i>
      </div>
      <slot></slot>
    </el-card>
  </div>
</template>

<script>
  export default{
    name: "userMsgBox",
    props: ["title", "userMsgBoxClass"],
    methods: {
      closeMsgBox(){
        let mcId = this.$router.currentRoute.params.mcId,
          id = this.$router.currentRoute.params.id,
          name = this.$router.currentRoute.params.name;
        if (mcId !== undefined && id !== undefined && name !== undefined) {
          if (name === "refundDetail") {
            let param = mcId.split('bs_b');
            this.$router.push({name, params: {billStatus: param[0], billId: param[1]}});
          }else if(name === 'userDetail'){
            this.$router.push({name, params: {id}});
          } else {
            this.$router.push({name, params: {mcId, id}});
          }
        }
      }
    }
  }
</script>

<style lang='scss'>
  .user-msg-box {
    //display: none;
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: relative;
    box-sizing: border-box;
    //z-index: 9999;
    .close-msg-box {
      position: absolute;
      right: 30px;
      top: 5px;
      cursor: pointer;
      font-weight: normal;
    }
    .el-card__header {
      padding: 10px 0 !important;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .user-msg-box-header {
      font-weight: bold;
      font-size: 20px;
      position: relative;
      .el-icon-close {
        font-size: 30px;
        position: absolute;
        top: 5px;
        right: 10px;
        background-color: #ccc;
        border-radius: 15px;
        overflow: hidden;
        cursor: pointer;
      }
    }
    .el-card__body {
      height: 100%;
      padding: 10px;
      box-sizing: border-box;
    }
    .user-msg-box-body {
      height: 100%;
    }
  }
</style>
