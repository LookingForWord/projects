/**
 * mock数据 处理图片路径
 * @param result 数据
 * @param imgColumn 图片字段名
 * @param req require函数
 * @return {*}
 */

export default function mockImg({result,imgColumn = 'imgUrl',req }){

    try{
        //针对img路径特殊处理
        if(result instanceof Array && result[0][imgColumn]){
            result = result.map( item => {

                item[imgColumn] = req(item[imgColumn]);

                return item;
            })
        }else if(result instanceof  Object && result[imgColumn]){

            result[imgColumn] = req(result[imgColumn]);
        }

        return result;
    }catch(e){

        location.reload(true);//强制刷新页面
    }
}
