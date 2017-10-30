<template>
	<el-breadcrumb separator="/" class='breadcrumb'>
	  <el-breadcrumb-item v-if='menuLists && menuLists.length>0' v-for='(menu,index) in menuLists' :key="index" :to="{name:menu.url}">{{menu.title}}</el-breadcrumb-item>
	</el-breadcrumb>
</template>
<script>
	export default {
		props:['menuLists']
	}
</script>
<style lang='scss'>
	.breadcrumb{
		font-size:16px;
		height:26px;
		line-height:26px;
		margin-bottom:20px;
		position:absolute;
		top:0;
		left:0;
		.el-breadcrumb__item__inner{
			cursor:pointer !important;
		}
	}
</style>
