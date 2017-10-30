/**
 * home reducers
 */
import reducersAsyncCreator from '../util/reducersAsyncCreator'
import {combineReducers} from 'redux'
import reducersFilter from '../util/reducersFilter'
import {LOAD_SUCCESS,RESET_STATE} from '../constants'

const homeAd = reducersFilter(reducersAsyncCreator(),action => action.payload.name === 'homeAd');

const homeList = reducersFilter(reducersAsyncCreator({page:0,hasMore:false,data:[]},{
    [LOAD_SUCCESS]:(state,action) => {
        //处理图片路径
        action.response.data.map( item => item.img = require('../components/HomeList/images/'+item.img));

        return Object.assign({},state,{
            isFetching:false,
            status:action.type,
            data: action.response == null ? state.data : state.data.concat(action.response.data),
            page:state.page + 1,
            hasMore:action.response == null ? state.hasMore : action.response.hasMore,
            initItem:action.payload.cityName
        });
    },
    [RESET_STATE]:(state,action) => Object.assign({},state,state.initState)
}),action => action.payload.name === 'homeList');

export default combineReducers({
    homeAd,
    homeList
})
