import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { login } from './LoginAction';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import { ToastContainer, toast } from 'react-toastify/dist/react-toastify.umd';

const LoginForm = () => {
    const notifyError = () => toast("Error: Please enter correct details");
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedInStart, setIsLoggedInStart] = useState(false);

    const onLoginHandler = () => {
        const authData = { username, password };
        login(authData, setIsLoggedInStart, (response) => {
            if (response.success) {
                authCtx.onLogin({
                    ...response.data
                });
                navigate('/');
            } else {
                notifyError();
            }
        });
    };

    return (
        <div className={`show`}>
            <div className="login-form">
                <div className="form-box solid pb-5">
                    <h1 className="login-text">Sign In</h1>
                    <label>Username</label>
                    <br></br>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        className="login-box"
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <br></br>
                    <label>Password</label>
                    <br></br>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="login-box"
                    />
                    <br></br>
                    <button
                        className="login-btn p-2"
                        onClick={() => {
                            onLoginHandler();
                        }}>
                        LOGIN
                    </button>
                    <br></br>
                    <label className="mt-3">
                        Not a member?{' '}
                        <Link to={'/signup'}>
                            <span className="signup-link">Signup now </span>
                        </Link>
                    </label>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LoginForm;
