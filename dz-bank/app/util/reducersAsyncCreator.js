/**
 * 异步reducer处理工具
 */
import reducersCreator from './reducersCreator'
import {LOAD_SUCCESS,LOAD_FAILURE,LOAD_REQUEST} from '../constants'

export default function reducersAsyncCreator(initState = {},handlers = {}){
    const _initState = Object.assign({isFetching:false,status:'',data:null},initState);

    const _handlers = Object.assign({
        [LOAD_SUCCESS]: (state,action) => {
            return Object.assign({},state,{isFetching:false,status:action.type,
                    data:action.response == null ? null : action.response});
        },
        [LOAD_FAILURE]:(state,action) => {
            console.error(`${action.type} -> ${action.error.message}.`);
            return Object.assign({},state,{isFetching:false,status:action.type});
        },
        [LOAD_REQUEST]:(state,action) => {
            if(process.env.NODE_ENV === 'development') console.warn(`${action.type} -> ${JSON.stringify(action.payload)}.`);
            return Object.assign({},state,{isFetching:true,status:action.type});
        }
    },handlers);

    return reducersCreator(_initState,_handlers);
}
