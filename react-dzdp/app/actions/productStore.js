/**
 * 商品收藏 action
 */
import {STORE_ADD,STORE_REMOVE,STORE_UPDATE} from '../constants'
import actionsCreator from '../util/actionsCreator'

export const updateAction = actionsCreator(STORE_UPDATE);

export const addAction = actionsCreator(STORE_ADD);

export const removeAction = actionsCreator(STORE_REMOVE);
