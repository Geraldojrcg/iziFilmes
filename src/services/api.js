import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.2.1.173:3001/api'
});

export default api;