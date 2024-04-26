import axios from 'axios';

export const SERVER_BASE_URL = 'https://jsonplaceholder.typicode.com';

const API = axios.create({
  baseURL: SERVER_BASE_URL,
});
export default API;