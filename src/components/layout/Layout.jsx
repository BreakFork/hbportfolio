import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

import './layout.css';

const Layout = () => {
    return (
        <>
            <header className='header'>
                <Header title='_HB__PORTFOLIO'/>
                <Navbar />
            </header>
            <main className='main'>
                <div id='scroller-container' role='presentation'>
                    <Outlet />
                </div>
            </main>
            <footer className='footer'>
                <Footer />
            </footer>
        </>
    )
};

export default Layout;