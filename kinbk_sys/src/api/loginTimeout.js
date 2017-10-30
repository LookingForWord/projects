/**
 * 登录时间过期 跳转到登录页面
 * @param data  服务器返回对象
 * @param vm  vue实例
 */
export default function loginTimeout(data, vm) {
  switch (data.code) {
    case -100:
      if (data.message === 'unauthorized') {
        vm.$messageBox({
          type: "warning", vm, message: "本次登录已过期，请再次登录！", title: "提示：",
          confirmFun: function () {
            // 清除token信息并跳转到登录页面
            vm.$session({key: 'loginMsg', remove: true});
            vm.$router.replace({
              name: 'login'
            })
          },
          cancelFun: function () {
            // 清除token信息并跳转到登录页面
            vm.$session({key: 'loginMsg', remove: true});
            vm.$router.replace({
              name: 'login'
            })
          }
        })
      }
  }
}
