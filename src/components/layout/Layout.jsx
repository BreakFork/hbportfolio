import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

import './layout.css';

const Layout = ({data}) => {
    console.log(data)
    return (
        <>
            <header className='layout__header'>
                <Header title='_HB__PORTFOLIO'/>
                <Navbar />
            </header>
            <main className='layout__main'>
                <Outlet />    
            </main>
            <footer className='layout__footer'>
                <Footer />
            </footer>
        </>
    )
};

export default Layout;