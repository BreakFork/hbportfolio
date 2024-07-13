import React from "react";
// import useFetch  from '../../hooks/useFetch';
import Logo from '../../images/skills/logo-1.svg';
import Data from '../../data/introducing.json';
import './introducing.css';

const Introducing = (props) => {
    console.log(Logo)
    const content = Data.find((e) => e); 

    return (
        <>
            <article className="introducing__article dflex-cc" role="main">
                <header className="introducing__article__header dflex-cc">
                    <hgroup className="introducing__article__header_hgroup dflex-cc">
                        <h2 className="introducing__article__header_hgroup--title">{content.title}</h2>
                        <h3 className="introducing__article__header_hgroup--subtitle">{content.subtitle}</h3>
                    </hgroup>
                        <img className="introducing__article__header-img" src={content.picture.src} alt=""/>
                </header>

                <p className="introducing__article--intro">
                    {content.intro}
                </p>

                <hr />

                <h2 className="introduction__article-skills--title">{content.skillsSubtitle}</h2>

                <ul className="introducing__article-skills--list dflex-rc">
                    {content.skillsList.map((skill, index) => (
                        <li key={index} className="introducing__article-skills--list---item dflex-cc">
                            <img src={skill.logo} alt={skill.alt} className="introducing__article-skills--list---img" />
                            <span>{skill.name}</span>
                        </li>
                    ))}
                </ul>
            </article> 
        </>
        

        
    )
};

export default Introducing;
