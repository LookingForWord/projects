/**
 * 根据id删除数据模块
 * @param vm vue实例
 * @param url 删除数据的接口
 * @param deleteId 删除数据的id 可以是一个值  也可以是一个数组
 * @param callback 删除成功之后的回调
 */
export default function deleteById ({vm,url,deleteId,callback,state=0}){
  if (url !== undefined && deleteId !== undefined) {
    if( deleteId instanceof Array ){
      if(deleteId.length <= 0){
        return ;
      }
    }
    vm.$messageBox({
      vm,
      message: "您是否确定删除该条数据！",
      title: "提示：",
      type: "warning",
      cancelButton:true,
      confirmFun: function () {
        vm.$http({
          url: url,
          vm,
          method: "DELETE",
          params: {[state == 0 ? 'ids' : 'typeId']: deleteId}
        }, function (data) {
          if (data === true) {
            vm.$messageBox({vm, message: "删除成功！", title: "提示：", type: "warning", loadingState: false});
            //请求数据
            callback();
          } else {
            vm.$messageBox({vm, message: "删除失败！", title: "提示：", type: "warning"});
          }
        })
      }
    })
  }
}
