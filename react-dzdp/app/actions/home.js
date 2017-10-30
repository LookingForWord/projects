/**
 * home actions
 */
import actionsAsyncCreator from '../util/actionsAsyncCreator'
import {HOME_AD,HOME_LIST} from '../constants'


export const homeAdAction = actionsAsyncCreator({
    $httpParams:{url:HOME_AD},
    payload:{name:"homeAd"},
    shouldCallAPI: state => !state.homeState.homeAd.data
});

export const homeListAction = actionsAsyncCreator({
    $httpParams:{url:HOME_LIST},
    payload:{name:"homeList"}
});

