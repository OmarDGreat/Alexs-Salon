import axios from '../../core/http/axios';

export const signup = (signUpData, onStartSignup, callBack) => {
    onStartSignup(true);
    const url = '/api/users';
    axios
        .post(url, signUpData)
        .then(() => {
            callBack({
                success: true,
                error: false
            });
        })
        .catch((error) => {
            callBack({ success: false, error: true, data: error.response });
        });
};
