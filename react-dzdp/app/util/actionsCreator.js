/**
 * 同步action工具模块
 */
export default  function actionCreator(type){
    return (data) => {
        return Object.assign({type},data);
    }
}
