/**
 * 常量模块
 */


/**
 * 静态资源
 */

export const SOCIAL_PDF = `${process.env.NODE_ENV === 'development' ? 'app/static': ''}/resource/2016社会责任报告.pdf`
//export const STOCKHOLDER_PDF = `${process.env.NODE_ENV === 'development' ? 'app/static': ''}/resource/股东信息.pdf`

/**
 * 请求API URL
 */
import BASE_URL from './baseURL'
export const PROPOSAL = `${BASE_URL}/verb`
export const PERSONAL_CREDIT = `${BASE_URL}/personalapplyloan`
export const ENTERPRISE_CREDIT = `${BASE_URL}/legalapplyloan`
export const DEPOSIT_CALCULATE = `${BASE_URL}/caculate/deposit`
export const LOAN_CALCULATE = `${BASE_URL}/caculate/loan`
export const NEWS = `${BASE_URL}/news`
export const PUBLIC_NOTICE = `${BASE_URL}/publicNotice`
export const INFORMATION = `${BASE_URL}/infomation`
export const RECRUITMENT = `${BASE_URL}/recruitment`
export const REPORT = `${BASE_URL}/report`
