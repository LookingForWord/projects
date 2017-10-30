<template>
  <div class="block" v-if="paginationStatus">
    <el-button class="prestad-btn" type="primary" v-if="btnStatus" @click="prestadBtn">放款</el-button>
    <el-pagination
      :total="getTotal"
      :page-size="pageSize"
      :current-page="currentPage"
      :page-sizes="[20,60,100]"
      layout="total, sizes, prev, pager, next, jumper"
      @current-change="currentChangeHandle"
      @size-change="handleSizeChange"
    >
    </el-pagination>
  </div>
</template>

<script>
  export default{
    props: ['total', 'pageSize', 'currentPage', 'pageUrl','btnStatus'],
    data(){
      return {
        paginationStatus: true
      }
    },
    methods: {
      handleSizeChange(pageSize){
         if(this.$parent.$parent.$parent.$data.loading !== undefined){
           this.$parent.$parent.$parent.$data.loading = true;
         }else{
           this.$parent.$parent.$data.loading = true;
         }
        if (this.pageUrl && this.currentPage === 1) {
          let me = this;
          this.$http({
            url: this.pageUrl,
            vm: this,
            method: "GET",
            params: {page: this.currentPage, rows:pageSize}
          }, function (data) {
            let dt = null;
            if (data) {
              data.pageSize = pageSize;
              dt = data;
            }
            me.$emit('cgxpagesize', dt);
          });
        }else{
          this.$emit('cgxpagesize', {pageSize:pageSize});
        }
      },
      currentChangeHandle(currentPage){
        if (this.pageUrl) {
          let me = this;
          if(this.$parent.$parent.$parent.$data.loading !== undefined){
            this.$parent.$parent.$parent.$data.loading = true;
          }else{
            this.$parent.$parent.$data.loading = true;
          }
          this.$http({
            url: this.pageUrl,
            vm: this,
            method: "GET",
            params: {page: currentPage, rows: this.pageSize}
          }, function (data) {
            let dt = null;
            if (data) {
              data.currentPage = currentPage;
              dt = data;
            }
            me.$emit('cgxpage', dt);
          });
        }
      },
      prestadBtn(){
          let elems = document.querySelectorAll('td .cell span.is-checked'),
            obj = {
              ids:[],
              names:[]
            };
          for(let i = 0;i<elems.length;i++){
              let currElem = elems[i];
              let cell = currElem.parentElement.parentElement.parentElement.parentElement.querySelector('td:nth-child(3) span');
              obj.names.push(cell.textContent);
              obj.ids.push(cell.dataset.id);
          }
          this.$parent.$parent.$parent.$data.prestadObj = obj;
          if(obj.ids.length>0){
              let me = this;
            this.$messageBox({vm: this, message: "确定通过以下（“"+obj.ids.length+"”位）用户的放款审核！", cancelButton:true,title: "放款：", type: 'info',confirmFun:function(){
              if(me.$constant.PRESTADSURE){
                me.$http({
                  url: me.$constant.PRESTADSURE,
                  vm: me,
                  method: "POST",
                  data: {bills:obj.ids.join(',')}
                },function(data){
                  if(data){
                    if(data.code === 200){
                      me.$messageBox({vm:me,message:"放款成功！",title:"成功：",type:"success"});
                      //刷新数据
                      me.currentChangeHandle(1);
                    }else{
                      me.$messageBox({vm:me,message:"放款失败！",title:"错误：",type:"error"});
                    }
                  }else{
                    me.$messageBox({vm:me,message:"服务器响应失败！",title:"提示：",type:"warning"});
                  }
                });
              }
            }});
          }
      }
    },
    computed: {
      getTotal(){
        if (this.total !== undefined) {
//          if (this.total > this.pageSize) {
//            this.paginationStatus = true;
//          } else {
//            this.paginationStatus = false;
//          }
          if(this.total === 0){
            this.paginationStatus = false;
          }else{
            this.paginationStatus = true;
          }
          return this.total;
        } else {
          //this.paginationStatus = false;
          return 0;
        }
      }
    },
    watch: {
      total(){
        this.getTotal
      }
    }
  }
</script>

<style lang='scss' scoped>
  .block {
    margin-top: 16px;
    position: relative;
    width:100%;
    .el-pagination {
      padding: 0;
      text-align: right;
    }
    .prestad-btn{
      text-align: center;
      position: absolute;
      top:0;
      left:0;
      height:100%;
      padding-top:0;
      width:10%;
      padding-bottom:0;
      min-width:115px;
    }
  }
</style>
