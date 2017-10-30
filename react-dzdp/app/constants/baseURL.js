/**
 * API baseURL
 */
const BASE_URL = process.env.NODE_ENV === 'dev' ? 'http://localhost:8081/api' : '';

export default BASE_URL