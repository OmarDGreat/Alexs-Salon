import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from './SignupAction';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify/dist/react-toastify.umd';

const SignUp = () => {
    const [isSignupStart, setIsSignupStart] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();
    const notifyError = () => toast('Error: Please enter correct details');

    const onSignupHandler = () => {
        const authData = { firstName, lastName, email, username, password };
        signup(authData, setIsSignupStart, (response) => {
            console.log(response);
            if (response.success) {
                navigate('/');
            } else {
                notifyError();
            }
        });
    };

    return (
        <div>
            <div className="login-form">
                <div className="form-box solid pb-5">
                    <h1 className="login-text">Sign In</h1>
                    <label>First Name</label>
                    <br></br>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        name="firstName"
                        className="login-box"
                    />
                    <br></br>
                    <label>Last Name</label>
                    <br></br>
                    <input
                        type="text"
                        value={lastName}
                        name="lastName"
                        onChange={(event) => setLastName(event.target.value)}
                        className="login-box"
                    />
                    <br></br>
                    <label>Username</label>
                    <br></br>
                    <input
                        type="text"
                        value={username}
                        name="username"
                        onChange={(event) => setUsername(event.target.value)}
                        className="login-box"
                    />
                    <br></br>
                    <label>Email</label>
                    <br></br>
                    <input
                        type="email"
                        value={email}
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                        className="login-box"
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
                        className="login-btn"
                        onClick={() => onSignupHandler()}>
                        SIGN UP
                    </button>
                    <br></br>
                    <label>
                        Already have an account?{' '}
                        <Link to={'/login'}>
                            <span className="signup-link">Signin </span>
                        </Link>
                    </label>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
