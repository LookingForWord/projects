/**
 * 创建Store
 */
import {createStore,applyMiddleware} from 'redux'
import rootReducer from '@/reducers'
import callApi from '../middleware/callApi'

export default function configureStore(initialState){
    return createStore(rootReducer,initialState,applyMiddleware(callApi));
}
