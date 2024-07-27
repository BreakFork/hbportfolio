import React, { useContext } from "react";
import IntroducingContext from '../../contexts/DataContext';
import './introducing.css';

const Introducing = () => {
    const introducing = useContext(IntroducingContext); 
    
    return (
        <>
            <header className="introducing__header dflex-cc">
                <hgroup className="introducing__header_hgroup">
                    <h1 className="introducing__header_hgroup--title">{introducing.title}</h1>
                    <p className="introducing__header_hgroup--subtitle">{introducing.subtitle}</p>
                </hgroup>
                <span className="introducing-hello-span">
                    &#x1F44B; Hello ! &#x1F44B;
                </span> 
            </header>
            <p className="introducing--paragraph">
                {introducing.intro}
            </p>
        </>       
    )
};

export default Introducing;
