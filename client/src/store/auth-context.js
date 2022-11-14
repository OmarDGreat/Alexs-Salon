import { createContext, useState } from 'react';
import { logout } from './LogoutAction';

const AuthContext = createContext({
    auth: { token: null, username: null, isLoggedIn: false, isLoggedOut: true },
    initialize: function () {},
    onLogin: function (authData) {},
    onLogout: function () {}
});

export const AuthContextProvider = (props) => {
    const [authState, setAuthState] = useState({
        token: null,
        username: null,
        isLoggedIn: false,
        isLoggedOut: true
    });

    const onInit = () => {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        let isLoggedIn = false;
        let isLoggedOut = true;
        if (token && username) {
            isLoggedIn = true;
            isLoggedOut = false;
        }
        setAuthState({ token, username, isLoggedIn, isLoggedOut });
    };

    const onLogin = ({ token, username }) => {
        let isLoggedIn = false;
        let isLoggedOut = true;
        if (token && username) {
            isLoggedIn = true;
            isLoggedOut = false;
        }
        setAuthState({ token, username, isLoggedIn, isLoggedOut });
    };
    const onLogout = () => {
        logout();
        setAuthState({
            token: null,
            username: null,
            isLoggedIn: false,
            isLoggedOut: true
        });
    };

    const context = {
        auth: authState,
        initialize: onInit,
        onLogin,
        onLogout
    };

    return (
        <AuthContext.Provider value={context}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
