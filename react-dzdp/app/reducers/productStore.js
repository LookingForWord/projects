/**
 * 商品 收藏 reducer
 */
import {STORE_ADD,STORE_REMOVE,STORE_UPDATE} from '../constants'
import reducersCreator from '../util/reducersCreator'

const productStoreReducer = reducersCreator({store:[]},{
    [STORE_ADD]:(state,action) => [action.data].concat(state),
    [STORE_REMOVE]:(state,action) => {
        state.filter( item => {
            if(item.id !== action.data.id) return item;
        })
    },
    [STORE_UPDATE]:(state,action) => action.data
});

export default productStoreReducer
