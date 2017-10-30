/**
 * 弹出框模块
 * @param Object
 *    vm Vue实例
 *    message 提示框的显示内容 string
 *    title 提示框的主题  string
 *    type  提示框的类型  success info warning error
 */
export default function messageBox({
                                     vm, message, title, type, cancelButton = false, loadingState = true, confirmFun = function () {
  }, cancelFun = function () {
  }
                                   }) {
  vm.$confirm(message, title, {
    confirmButtonText: '确定',
    showCancelButton: cancelButton,
    closeOnClickModal: false,
    type: type,
    callback(action){
      if (action === 'confirm') {//确认按钮回调
        if (vm.loading && loadingState) {
          vm.loading = false
        }
        confirmFun();
      } else if (action === 'cancel') {//取消按钮回调
        if (vm.loading && loadingState) {
          vm.loading = false
        }
        cancelFun();
      }
    },
  })
}
