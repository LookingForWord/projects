<template>
	<div class='sys-index'>
		<el-card class="box-card">
			欢迎使用金宝行管理系统！
		</el-card>
	</div>
</template>
<script>
    export default{
        mounted(){
          this.$parent.menuLists=[{title:'首页',url:'home'}];
        }
    }
</script>
<style lang='scss'>
	.sys-index{
		//background:url(../assets/index-bg.jpg) no-repeat center center;
		.box-card{
			height:160px;
		}
	}
</style>
