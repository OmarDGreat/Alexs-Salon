import axios from 'axios';
const SERVER_BASE_URL = 'http://localhost:3001';
const instance = axios.create({
    baseURL: SERVER_BASE_URL
});

// HTTP Request Interceptor
instance.interceptors.request.use(
    (requestConfig) => {
        requestConfig.headers.Authorization =
            'Bearer ' + localStorage.getItem('token');

        // console.log('Axios Request', requestConfig);
        return requestConfig;
    },
    (error) => {
        // console.log('Axios Request Error', error);
        return Promise.reject(error);
    }
);

// HTTP Response Interceptor
instance.interceptors.response.use(
    (responseConfig) => {
        // console.log('Axios Response', responseConfig);
        return responseConfig;
    },
    (error) => {
        // console.log('Axios Response Error', error);
        return Promise.reject(error);
    }
);

export default instance;
