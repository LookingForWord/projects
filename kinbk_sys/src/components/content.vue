<template>
  <div class='content'>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :fit='flag'
    >
      <slot></slot>
    </el-table>
    <pagination @cgxpage='cgxpageHandle' :total="total" :pageUrl="pageUrl" :currentPage='currentPage'
                :pageSize='pageSize' @cgxpagesize="cgxpagesizeHandle" :btnStatus="btnStatus"></pagination>
  </div>
</template>
<script>
  import pagination from './pagination';
  export default {
    props: ['btnStatus','tableData', 'total', 'pageUrl', 'pageSize', 'currentPage', 'cgxpageHandle','cgxpagesizeHandle'],
    data(){
      return {
        flag: true
      }
    },
    methods:{

    },
    components: {
      pagination
    }
  }
</script>
<style lang='scss'>
  .content {
    height: 100%;
    td {
      height: 34px;
      box-sizing: border-box;
    }
    .el-table__body-wrapper {
      min-width:1150px;
      overflow: hidden;
      td {
        text-align: center;
      }
    }
    position: relative;
    .el-table {
      //min-height: 380px;
      max-height:90%;
      overflow: auto;
      border-top:none;
      //padding-right:20px;
      &::before{
        top:34px;
        height:0 !important;
      }
      &::after{
        width:0;
      }
    }
    .el-table__header-wrapper {
      height: 34px;
      overflow: hidden;
      min-width:1150px;
      border: 1px solid #dfe6ec;
      border-right:none;
      border-left:none;
      th {
        height: 100%;
        padding-top: 2px;
        padding-bottom: 2px;
        text-align: center;
      }
    }
    .el-table__empty-block {
      width: 100% !important;
      height: 33px;
      min-height: 33px;
      box-sizing: border-box;
      border-bottom: 1px solid #dfe6ec;
      border-right: 1px solid #dfe6ec;
    }
  }
</style>
