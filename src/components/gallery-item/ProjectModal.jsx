import './project-modal.css';
// import plouc from '../../images/project-highlighted/p4_modal_1440.webp';

const ModalContent = ({ onClose, project }) => {
    
    return (
        <dialog open className="modal__project dflex-rc">
            <article className='modal__project__article '>
                <header className='modal__project__article_header'>
                    <img 
                        className='modal__project__article_header--img'
                        style={{objectPosition: project.position }}
                        src={project.src} 
                        alt={project.alt}
                    />
                    <h1 className='modal__project__article_header--title'>{project.title}</h1>
                </header>

                <section className='modal__project__article__section dflex-cl'>
                    <ul className='modal__project__article__section_tags dflex-rl'>
                        {project.tags.map((tag, index) => (
                            <li key={index} className='modal__project__article__section_tags--item dflex-xcyc'>{tag}</li>
                        ))}
                    </ul>
                </section>

                <section className='modal__section__resume'>
                    <h2 className='modal__project__article__section_subtitle'>Synopsis : </h2>
                    <p className='modal__project__article__section_resume'>{project.resume}</p>
                    <h2 className='modal__project__article__section_subtitle'>Objectifs : </h2>
                    
                </section>

                <section className='modal__section__bottom'>
                    <ul className='modal__project__article__section_links dflex-rl'>
                        <span className='modal__project__article__section_links--title'>LIENS :</span>
                        {project.linksList.map((listItem, index) => (
                            <li key={index} className='modal__project__article__section_links--item'>
                                <a className='modal__project__article__section_links--link'
                                    href={listItem.linkURL}> {listItem.linkName}</a> 
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={onClose}
                        type='button'
                        className='modal__project--btn-close dflex-xcyc'
                    >
                        retour
                    </button>
                </section>
            </article>
        </dialog>
    );
};
export default ModalContent;