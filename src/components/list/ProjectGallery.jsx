import React, {Fragment, useContext} from 'react';
import ProjectsContext from '../../contexts/DataContext';
import ProjectItem from '../gallery-item/ProjectItem';
import './project-gallery.css';

// import LOG_1 from '../../images/project-highlighted/p8_modal_1440.webp';
// import LOG_2 from '../../images/projects-gallery/p5_gallery_1440.webp';


const ProjectGallery = () => {
    const data = useContext(ProjectsContext);
    // console.log("DATA PROJECTS : " + data.projects)

    // console.log(LOG_1)
    // console.log(LOG_2)



    return (
        <ul className='projects__gallery'>
            {data.projects.map((item) => (
                // eslint-disable-next-line
                <Fragment key={"gallery-item-" + `${item.id}`}>
                    <ProjectItem id={item.id} src={item.src} alt={item.alt} title={item.title} description={item.description} project={item.project} />
                </Fragment>
            ))}
        </ul>
    )
};

export default ProjectGallery;