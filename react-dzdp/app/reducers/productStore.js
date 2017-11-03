/**
 * 商品 收藏 reducer
 */
import {STORE_ADD,STORE_REMOVE,STORE_UPDATE} from '../constants'
import reducersCreator from '../util/reducersCreator'

const productStoreReducer = reducersCreator({store:[]},{
    [STORE_ADD]:(state,action) => {
        const result = state.store.concat([{id:action.id}]);
        return Object.assign({},state,{store:result})
    },
    [STORE_REMOVE]:(state,action) => {
        const result = state.store.filter( item => {
            if(item.id !== action.id) return item;
        })
        return Object.assign({},state,{store:result})
    },
    [STORE_UPDATE]:(state,action) => Object.assign({},state,{store:[{id:action.id}]})
});

export default productStoreReducer
