import React from 'react';
import { useRef, useState } from 'react';
import './header.css';


const Header = ({...props}) => {
    const documentTitle = useRef('HB / Portfolio / ');
    const linkListInMemory = useRef(undefined);
    const bufferArray = [];
    const mobileNavbar = useRef(undefined);
    const navbarToggle = document.getElementById("navbar-toggle");
    mobileNavbar.current = navbarToggle;

    const [hiddenCssClass, setHiddenCssClass] = useState(' hidden');
    const [isHidden, setIsHidden] = useState(false);
    // const [showMobileNavbar, setShowMobileNavbar] = useState(false);  
    
    

    const ScrollToAnchorLink = (link) => {
        const linkList = document.querySelectorAll('.navbar__link');
        /* Store NodeList on first click */
        if (linkListInMemory.current === undefined) {
            bufferArray.push(linkList);
            linkListInMemory.current = bufferArray;
            /* Toggle CSS Class */
            linkListInMemory.current[0].forEach(CssClass => CssClass.classList.remove('active'));
            link.target.classList.add('active');
        } else {
            /* Toggle CSS Class */
            linkListInMemory.current[0].forEach(CssClass => CssClass.classList.remove('active'));
            link.target.classList.add('active');
        };
        /* Update bookmark name */
        const location = link.target.getAttribute('href');
        document.title = documentTitle.current + location.slice(1);

        setIsHidden(isHidden => !isHidden);
        /* Update bookmark name */
        // const location = link.target.dataset.anchor; /* string */
        // document.title = documentTitle.current + location;
        
        // const sectionTarget = document.getElementById(`${location}`) 

        // function scrollIntoViewOffset(sectionTarget, offset) {
        //     window.scrollBy({
        //         top: sectionTarget.getBoundingClientRect().top - offset,
        //         behavior: "smooth"
        //     });
        // };
        // scrollIntoViewOffset(sectionTarget, 55);
        
    }

    const HandleNavbarToggle = () => {
        setIsHidden(isHidden => !isHidden);
        setHiddenCssClass(isHidden === true ? 'navbar-toggle dflex-cc hidden' : 'navbar-toggle dflex-cc');
        // setShowMobileNavbar(showMobileNavbar => !showMobileNavbar);
    }

    const MobileNavbar = () => {
        return (
            <nav className="navbar-toggle--links-container dflex-cc">
                <a onClick={ScrollToAnchorLink} href="#competences" data-anchor="accueil" className="navbar-toggle--link active" aria-label="link to introducting section">
                    COMPETENCES
                </a>
                <a onClick={ScrollToAnchorLink} href="#projets" data-anchor="projets" className="navbar-toggle--link" aria-label="link to projects section">
                    PROJETS
                </a>
                <a onClick={ScrollToAnchorLink} href="#contact" data-anchor="contact" className="navbar-toggle--link" aria-label="link to contact section">
                    CONTACT
                </a>
            </nav>
        )
    }

    return (
        <header className='header__layout dflex-cc'>
            <div className="header__main-container">
                <span className='header__main-container--logo'>
                    <a onClick={ScrollToAnchorLink} href="#accueil">
                        {props.logo}
                    </a> 
                </span>
                <button
                    id="toggle-btn"
                    onClick={HandleNavbarToggle}
                    className="navbar-toggle--btn"
                    type="button"
                    role="navigation">
                    <i className="fa-solid fa-bars fa-xl"></i>
                </button>

                <nav className="navbar dflex-rc" role={"navigation".toString()} aria-label="Main navigation">
                    <a onClick={ScrollToAnchorLink} href="#competences" data-anchor="accueil" className="navbar__link active" aria-label="link to introducting section">
                        COMPETENCES
                    </a>
                    <a onClick={ScrollToAnchorLink} href="#projets" data-anchor="projets" className="navbar__link" aria-label="link to projects section">
                        PROJETS
                    </a>
                    <a onClick={ScrollToAnchorLink} href="#contact" data-anchor="contact" className="navbar__link" aria-label="link to contact section">
                        CONTACT
                    </a>
                </nav>

            </div>
            <nav className={`${hiddenCssClass}`} role={"navigation".toString()} aria-label="Main navigation">

                <div id="navbar-toggle" className="viewer-hidden dflex-cc" role="presentation">
                    { isHidden ? <MobileNavbar /> : null }
                </div>

            </nav> 
        </header>
    )
};

export default Header;