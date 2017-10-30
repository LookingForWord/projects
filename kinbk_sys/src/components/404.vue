<template>
  <div class="page-container">
    <el-card class="box-card">
      404 page not found ！&nbsp;&nbsp;&nbsp;<router-link :to="{name:'home'}">进入首页</router-link>
    </el-card>
  </div>
</template>

<script>

</script>

<style lang='scss' scoped>
  .page-container {
    font-size: 20px;
    text-align: center;
    color: rgb(192, 204, 218);
    background-color: #324147;
    width:100%;
    height:100%;
  }
  a{
    color: #325157;
  }
  .box-card{
    height:300px;
    width:600px;
    margin:0 auto;
    position: absolute;
    top:50%;
    left:50%;
    margin-left:-300px;
    margin-top:-150px;
  }
</style>
