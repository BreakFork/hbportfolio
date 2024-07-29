import React from 'react';
import ProjectModalBTN from './ProjectModalBTN';
import './project-item.css';
// import Logo from '../../images/project-highlighted/p4_modal_1440_banner.webp';
// import Logo from '../../images/skills/logo-8_135-121.webp';
// import Logo from '../../images/avatar_274-330.webp';
const ProjectItem = (props) => {
// console.log(props.project)
    return (
        <li className='projects__gallery_item'>
            <img src={props.src} 
                 alt={props.alt} 
                 width={props.width}
                 height={props.height} 
                 className='project__gallery_item--img' />

            <div className='projects__gallery_item__footer dflex-cl' role="presentation">

                <hgroup className='projects__gallery_item__wrapper--title'>
                    <h3 className='project__gallery_item--title'>{props.title}</h3>
                    <p className='project__gallery_item--description'>{props.description}</p>
                </hgroup>

                <ProjectModalBTN project={props.project} />
            </div>
        </li>
    )
};

export default ProjectItem;