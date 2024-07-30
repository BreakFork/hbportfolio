import React from 'react';
import Error from '../../pages/error/Error';
import DATA_fetch from '../../data/data.json';
import DataContext from '../../contexts/DataContext';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './layout.css';

const Layout = () => {
    const DATA = DATA_fetch.find((e) => e);
    
    if(!DATA) {
        return <Error />
    } else {
        return (
            <div className='layout__wrapper' role="presentation">
                <Header logo='HB' />
                <main className='layout__main'>
                    <DataContext.Provider value={DATA}>
                        <Outlet />
                    </DataContext.Provider>
                </main>
                <Footer />
            </div>
        )
    }
};

export default Layout;