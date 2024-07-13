import { useRef } from 'react';
import './navbar.css';

const Navbar = () => {
    const documentTitle = useRef('HB / Portfolio / ');
    const linkListInMemory = useRef(undefined); 
    const bufferArray = [];

    const ScrollToAnchorLink = (link) => {
        const linkList = document.querySelectorAll('.navbar__link');

        if (linkListInMemory.current === undefined) {
            bufferArray.push(linkList);
            linkListInMemory.current = bufferArray;
            
            linkListInMemory.current[0].forEach(CssClass => CssClass.classList.remove('active'));
            link.target.classList.add('active');
        } else {
            linkListInMemory.current[0].forEach(CssClass => CssClass.classList.remove('active'));
            link.target.classList.add('active');
        };

        const location = link.target.getAttribute('href');
        document.title = documentTitle.current + location.slice(1);
    }

    return (
        <nav className="navbar" role={"navigation".toString()} aria-label="Main navigation">
            <a onClick={ScrollToAnchorLink} href="#introducing" className="navbar__link active" aria-label="link to introducting section">
                ACCUEIL
            </a>
            <a onClick={ScrollToAnchorLink} href="#projects" className="navbar__link" aria-label="link to projects section">
                PROJETS
            </a>
            <a onClick={ScrollToAnchorLink} href="#contact" className="navbar__link" aria-label="link to contact section">
                CONTACT
            </a>
        </nav>
    )
};

export default Navbar;