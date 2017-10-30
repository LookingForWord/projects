/**
 * detail action
 */
import actionsAsyncCreator from '../util/actionsAsyncCreator'
import {DETAIL_INFO,DETAIL_COMMENT} from '../constants'

export const infoAction = actionsAsyncCreator({
    $httpParams:{url:DETAIL_INFO},
    payload:{name:"detailInfo"}
});

export const commentAction = actionsAsyncCreator({
    $httpParams:{url:DETAIL_COMMENT},
    payload:{name:"detailComment"}
});
