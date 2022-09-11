import axios from 'axios';
import UserService from '../services/user-service';

export default axios.create({
    baseURL: '/api',
    headers: {
        'Content-type': 'application/json',
        //Authorization: `Bearer ${UserService.getToken()}`,
    },
});

// const HttpMethods = {
//     GET: 'GET',
//     POST: 'POST',
//     DELETE: 'DELETE',
// };

// const _axios = axios.create();

// const configure = () => {
//     _axios.interceptors.request.use((config) => {
//         const cb = () => {
//             config.headers.Authorization = `Bearer: ${UserService.getToken()}`;
//             return Promise.resolve(config);
//         };
//         return UserService.updateToken(cb);
//     });
// };

// const getAxiosClient = () => _axios;

// const HttpService = {
//     HttpMethods,
//     configure,
//     getAxiosClient,
// };

//export default HttpService;
