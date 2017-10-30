/**
 * root reducer
 */
import {combineReducers} from 'redux'
import userInfoReducer from './userInfo'
import homeReducer from './home'
import searchReducer from './search'
import detailReducer from './detail'

const rootReducer = combineReducers({
    userInfoState:userInfoReducer,
    homeState:homeReducer,
    searchState:searchReducer,
    detailState:detailReducer
});

export default rootReducer