/**
 * 常量模块
 */

//用户城市名称
export const CITY_NAME = 'USER_CURRENT_CITY_NAME'

//重置state
export const RESET_STATE = 'RESET_STATE'

/**
 * 用户信息type
 */
export const USER_INFO_UPDATE ="USER_INFO_UPDATE"

/**
 * 请求action type
 */
export const LOAD_REQUEST = 'LOAD_REQUEST'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_FAILURE = 'LOAD_FAILURE'

/**
 * 请求API URL
 */
import BASE_URL from './baseURL'
export const HOME_AD = `${BASE_URL}/homead`
export const HOME_LIST = `${BASE_URL}/homelist`
export const SEARCH_LIST = `${BASE_URL}/searchlist`
export const DETAIL_INFO = `${BASE_URL}/detail/info`
export const DETAIL_COMMENT = `${BASE_URL}/detail/comment`
