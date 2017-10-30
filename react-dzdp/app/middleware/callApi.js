/**
 * 请求 actions 中间件
 */
export default function callApi({dispatch, getState}) {
    return next => action => {

        /**
         * types action type Object
         * callAPI 获取数据 Promise
         * shouldCallAPI 检测是否缓存 Function 可选
         * payload actions中注入的参数 Object 可选
         */
        const {
            types, callAPI, shouldCallAPI = (state,action) => true, payload = {},$httpParams
        } = action;

        //同步action
        if (!types) return next(action);

        if (typeof types !== 'object' || Array.isArray(types))
            throw new Error('Expected types to be a Object.');

        const {request, success, failure} = types;
        if (request == null || success == null || failure == null)
            throw new Error('Expected an Object of three(request、success、failure) string types.');

        if (typeof callAPI !== 'function')
            throw new Error('Expected callAPI to be a function.');

        if (typeof shouldCallAPI !== 'function')
            throw new Error('Expected shouldCallAPI to be a function.');

        if (typeof payload !== 'object' || Array.isArray(payload))
            throw new Error('Expected payload to be a Object.');

        //是否存在缓存
        if (!shouldCallAPI(getState(),action)) return;

        /**
         * 请求数据
         */
        //开始请求
        dispatch({type: request,payload});

        //返回响应结果
        return callAPI($httpParams).then(
            response => dispatch({response, type: success,payload}),
            error => dispatch({error:{message:error.message}, type: failure,payload})
        );
    }
}


