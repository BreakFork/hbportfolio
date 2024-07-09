import React from 'react';
import './header.css';


const Header = ({...props}) => {
    return (
        <>
            <h1 className='header-title'>{props.title}</h1>
        </>
    )
};

export default Header;