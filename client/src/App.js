import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { AuthContextProvider } from './store/auth-context';

function App() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <div className="App">
                    {/* <NavBar handleLoginClick={handleLoginClick} />
                <LoginForm isShowLogin={isShowLogin} /> */}
                    <Layout />
                </div>
            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;
