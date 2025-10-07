import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin.jsx';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Account from './pages/Account';
import Search from './pages/Search';

const App = () => {
    return (
        <Theme appearance="inherit" radius="large" scaling="100%">
            <Router>
                <main className="min-h-screen">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/product/:id" element={<ProductDetails />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        newestOnTop
                        closeOnClick
                        pauseOnHover
                        className="mt-16"
                    />
                </main>
            </Router>
        </Theme>
    );
}

export default App;