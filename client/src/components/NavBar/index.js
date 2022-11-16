import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

function NavBar() {
    const authCtx = useContext(AuthContext);

    return (
        <div className="navbar align-items-baseline">
            <div className="navbar-brand">
                <h2>
                    <Link to="/" className="navbar-title">
                        Alex's Salon
                    </Link>
                </h2>
            </div>

            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/#about" className="navbar-link">
                        About
                    </Link>
                </li>

                <li className="navbar-item">
                    <Link to={{pathname:'/',hash:'stylist'}} className="navbar-link">
                        Stylists
                    </Link>
                </li>

                <li className="navbar-item">
                    <Link to="#appointment" className="navbar-link">
                        Appointments
                    </Link>
                </li>

                <li className="navbar-item">
                    <Link to="/#contact" className="navbar-link">
                        Contact
                    </Link>
                </li>
            </ul>

            {authCtx.auth.isLoggedOut && (
                <Link to={'/login'}>
                    <button type="button" className="btn btn-primary">
                        Sign In
                    </button>
                </Link>
            )}
            {authCtx.auth.isLoggedIn && (
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => authCtx.onLogout()}>
                    Log out
                </button>
            )}
        </div>
    );
}

export default NavBar;
