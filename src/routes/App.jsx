import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '@containers/Layout';

import { Home, Login, PasswordRecovery, SendEmail, NewPassword, MyAccount, CreateAccount, Checkout, Orders, NotFound } from '@pages';


import '@styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/password-recovery" element={<PasswordRecovery />} />
                    <Route exact path="/send-email" element={<SendEmail />} />
                    <Route exact path="/new-password" element={<NewPassword />} />
                    <Route exact path="/account" element={<MyAccount />} />
                    <Route exact path="/signup" element={<CreateAccount />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                    <Route exact path="/orders" element={<Orders />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App; 
