import React, { useContext } from 'react';
import SkillsContext from '../../contexts/DataContext';
import './skills-gallery.css';
// import Logo_1 from '../../images/skills/logo-1.svg';

const SkillsGallery = () => {
    const data = useContext(SkillsContext)
    // console.log(Logo_8)

    return (
        <div className="wrapper__introducing__article-skills--list dflex-cc" role="presentation">
            <p className="introducing__article-skills--paragraph">
                {data.skillsParagraph}
            </p>
            
            
            <ul className="introducing__article-skills--list">
                {data.skillsList.map((skill, index) => (
                    <li key={index} className="introducing__article-skills--list---item dflex-cc">
                        <img src={skill.logo} alt={skill.alt} className="introducing__article-skills--list---img" />
                        <span>{skill.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default SkillsGallery;