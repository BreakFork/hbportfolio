import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Project from './pages/projects/Project';
import Contact from './pages/contact/Contact';
import Error from './pages/error/Error';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Project />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Router;