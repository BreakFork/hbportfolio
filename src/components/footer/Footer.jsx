import React from 'react';
import './footer.css';

const Footer = () => {
    const year = new Date();
    const displayYear = year.getFullYear();

    return (
        <footer className='layout__footer'>
            <span className='footer-copy'><i class="fa-regular fa-copyright"></i></span>&nbsp;&nbsp;
            <span className='footer-date'> {displayYear}</span>
        </footer>
    )
};

export default Footer;