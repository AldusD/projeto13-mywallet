import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './contexts/UserContexts';
import Styled from 'styled-components';

import './assets/reset.css';
import './assets/bodyBackground.css';

import LoginPage from './components/LoginPage';
import SignupPage from './components/SingupPage';
import Home from './components/Home';

export default function App() {

    const [userData, setUserData] = useState({});
    const API = "http://localhost:5000";

    return (
        <UserContext.Provider value={ {API, userData, setUserData } }>
            <Styles>
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={ <LoginPage /> } />
                        <Route path="/signup" element={ <SignupPage /> } />
                        <Route path="/home" element={ <Home /> } />
                    </Routes>
            </BrowserRouter>
            </Styles>
        </UserContext.Provider>
    );
}

const Styles = Styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap');
    font-family: 'Roboto', sans-serif;
`;