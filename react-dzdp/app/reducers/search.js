/**
 * Search Reducer
 */
import reducersAsyncCreator from '../util/reducersAsyncCreator'
import {LOAD_SUCCESS,RESET_STATE} from '../constants'
import reducersFilter from '../util/reducersFilter'

const searchListReducer = reducersFilter(reducersAsyncCreator({page:0,hasMore:false,data:[]},{
    [LOAD_SUCCESS]:(state,action) => {
        //处理图片路径
        action.response.data.map( item => item.img = require('../components/Search/images/'+item.img));

        return Object.assign({},state,{
            isFetching:false,
            status:action.type,
            data: action.response == null ? state.data : state.data.concat(action.response.data),
            page:state.page + 1,
            hasMore:action.response == null ? state.hasMore : action.response.hasMore,
            //initItem:action.payload.cityName
        });
    },
    [RESET_STATE]:(state,action) => Object.assign({},state,state.initState)
}),action => action.payload.name === 'searchList');

export default searchListReducer