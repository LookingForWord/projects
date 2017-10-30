/**
 *  session模块
 *            用于设置或获取session值
 *  @param  key session key值 默认值 'key'  类型 string
 *  @param  value  session value值 默认值 null 当不为null时则为设置session 类型 string或object
 */
export default function session({key = 'key', value = null, remove = false}) {
  if (window.sessionStorage) {
    if (value !== null && !remove) {//设置session值
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } else if (value === null && !remove) {//获取session
      return JSON.parse(window.sessionStorage.getItem(key));
    } else {
      window.sessionStorage.removeItem(key);
    }
  } else {
    console.log('当前浏览器不支持session');
  }
}
