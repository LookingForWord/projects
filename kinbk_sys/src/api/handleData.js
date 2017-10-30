/**
 * 统一处理返回数据格式模块
 * @param data 数据字段
 */
export default function handleData(data){
  return data !== null && data !== undefined && data !== '' ? data : '';
}
