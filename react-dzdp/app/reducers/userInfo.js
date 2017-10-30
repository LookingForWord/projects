/**
 * userInfo reducers
 */
import {USER_INFO_UPDATE} from '@/constants'
import reducersCreator from '@/util/reducersCreator'


const userInfoReducer = reducersCreator({},{
    USER_INFO_UPDATE:(state,action) => {
        return Object.assign({},state,action)
    }
});

export default userInfoReducer


