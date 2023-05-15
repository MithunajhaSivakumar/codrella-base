import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});



export const signUp = (formData) => API.post('/auth/signup', formData);
export const logIn = (formData) => API.post('/auth/login', formData);

export const codeCompile = (code) => API.post('/code/compile', code);

export const joinClass = (code) => API.post('/course/joinClass', code);
export const createClass = (code) => API.post('/course/createClass', code);