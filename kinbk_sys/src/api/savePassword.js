/**
 * 记住密码模块
 *    处理是否记住密码的相关操作
 * @param vm Vue实例
 * @return supportSavePassword 返回是否支持记住密码
 */
export default function handleSavePassword(vm) {
  let supportSavePassword = true;//检查浏览器是否支持该功能
  if (vm.login.saveStatus) {//记住密码
    if (window.localStorage) {
      let data = {username: vm.login.username, password: vm.login.password, timestamp: new Date().getTime()};
      window.localStorage.setItem('login', JSON.stringify(data));
    } else {
      //不支持记住密码
      supportSavePassword = false;
    }
  } else {//取消记住密码
    window.localStorage.removeItem('login');
  }
  return supportSavePassword;
}
