import axios from '../core/http/axios';

export const logout = () => {
    let url = '/api/users/logoutAll';

    return axios
        .post(url, {})
        .then((response) => {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
        })
        .catch((err) => {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
        });
};
