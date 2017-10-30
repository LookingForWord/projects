/**
 * 日期处理函数
 * @param timers 时间戳
 */
export default function formatDate(timers, status = false) {
  let date = new Date(timers),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;
  if (status) {
    return year + '年' + month + '月' + day + '日 ';
  } else {
    return year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second;
  }
}
