/**
 * API baseURL
 */

//路由基路径
export const PUBLIC_PATH = process.env.PUBLIC_PATH;

const BASE_URL = process.env.NODE_ENV === 'development' ? '/api' : '/api';

export default BASE_URL