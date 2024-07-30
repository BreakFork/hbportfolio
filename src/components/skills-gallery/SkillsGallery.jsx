import React, { useContext } from 'react';
import SkillsContext from '../../contexts/DataContext';
import './skills-gallery.css';

const SkillsGallery = () => {
    const data = useContext(SkillsContext)

    return (
        <div className="wrapper__introducing__article-skills--list dflex-cc" role="presentation">
            <p className="introducing__article-skills--paragraph">
                {data.skillsParagraph}
            </p>
               
            <ul className="introducing__article-skills--list">
                {data.skillsList.map((skill, index) => (
                    <li key={index} className="introducing__article-skills--list---item dflex-cc">
                        <img src={skill.logo} alt={skill.alt} width={skill.width} height={skill.height} className="introducing__article-skills--list---img" />
                        <span>{skill.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default SkillsGallery;