import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import NavBar from '../../components/NavBar';
import Login from '../../components/LoginForm';
import Signup from '../../components/Signup';
import AuthContext from '../../store/auth-context';
import { useEffect } from 'react';

const Layout = () => {
    const authCtx = useContext(AuthContext);
    useEffect(() => {
        authCtx.initialize();
    }, []);

    return (
        <>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    );
};

export default Layout;
