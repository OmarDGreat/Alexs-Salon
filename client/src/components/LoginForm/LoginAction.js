import axios from '../../core/http/axios';

export const login = (authData, onStartLogin, callBack) => {
    let url = '/api/users/login';
    onStartLogin(true);

    axios
        .post(url, authData)
        .then((response) => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.user.username);

            const { token, user } = response.data;
            callBack({
                success: true,
                error: false,
                data: { token, username: user.username }
            });
        })
        .catch((err) => {
            callBack({ success: false, error: true, data: err.response });
        });
};
