import { useState } from 'react';
import { createPortal } from 'react-dom';
import ProjectModal from './ProjectModal';
import './project-item.css';

const ProjectModalBTN = (props) => {
    const [showModal, setShowModal] = useState(false);
    const root = document.getElementById('root');
    const html = document.getElementById('html');
    
    if (showModal === true) {
        root.setAttribute('inert', 'inert');
        root.classList.add('position-fixed');
    } else {
        html.scrollTo({ top: 880, left: 0, behavior: 'instant'})
        root.removeAttribute('inert', 'inert');
        root.classList.remove('position-fixed');
    }

    return (
        <>
            <button 
                onClick={() => setShowModal(true)}
                type='button'
                aria-label='modal'
                className='project__gallery_item--btn dflex-xcyc'
            >
                voir
            </button>
            {showModal && createPortal(
                <ProjectModal 
                    project={props.project} 
                    onClose={() => setShowModal(false)} />,
                document.body
            )}
        </>
    );
}

export default ProjectModalBTN;