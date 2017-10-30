/**
 * detail reducer
 */
import reducersAsyncCreator from '../util/reducersAsyncCreator'
import reducersFilter from '../util/reducersFilter'
import {combineReducers} from 'redux'
import {LOAD_SUCCESS,RESET_STATE} from '../constants'

const detailInfo = reducersFilter(reducersAsyncCreator(),action => action.payload.name === 'detailInfo');
const detailComment = reducersFilter(reducersAsyncCreator({page:0,hasMore:false,data:[]},{
    [LOAD_SUCCESS]:(state,action) => {
        return Object.assign({},state,{
            isFetching:false,
            status:action.type,
            data: action.response == null ? state.data : state.data.concat(action.response.data),
            page:state.page + 1,
            hasMore:action.response == null ? state.hasMore : action.response.hasMore
        });
    },
    [RESET_STATE]:(state,action) => Object.assign({},state,state.initState)
}),action => action.payload.name === 'detailComment');

export default combineReducers({
    detailInfo,
    detailComment
})

