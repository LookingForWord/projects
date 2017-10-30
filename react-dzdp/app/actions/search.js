/**
 * Search Action
 */
import {SEARCH_LIST} from '../constants'
import actionsAsyncCreator from '../util/actionsAsyncCreator'

export const searchListAction = actionsAsyncCreator({
   $httpParams:{url:SEARCH_LIST},
    payload:{name:"searchList"}
});
