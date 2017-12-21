/**
 * 异步action 工具
 */
import {LOAD_FAILURE,LOAD_REQUEST,LOAD_SUCCESS} from '../constants'
import fetch from '../fetch'
export default function actionAsyncCreator({types = {},$httpParams = {},
                                               shouldCallAPI = (state,action) => true,payload = {}}){

    return (data = {} ) => {
        $httpParams.data = data;
        return {
            //action types
            types:Object.assign({request:LOAD_REQUEST,success:LOAD_SUCCESS,failure:LOAD_FAILURE},types),
            //请求
            callAPI:fetch,
            //检测缓存
            shouldCallAPI,
            //actions的注入参数
            payload:Object.assign(payload,data),
            //请求数据
            $httpParams
        }
    }
}
