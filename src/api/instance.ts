import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

instance.interceptors.request.use(
    (req) => {
        const token = JSON.parse(sessionStorage.getItem('user') as any)?.token;
        req.headers.Authorization = `${token ? `Bearer ${token}` : null} `;
        return req;
    },
    (err) => {
        Promise.reject(err);
    },
);

export default instance;
