import './main.css'; 
import Introducing from '../introducing/Introducing';
import SkillsGallery from '../skills-gallery/SkillsGallery';
import ProjectGallery from '../project-gallery/ProjectGallery';
import Contact from '../contact/Contact';

const Main = () => {
    return (
        <article className="main__article">
            <section id="accueil" className="introducing-section">
                <Introducing />
            </section>

            <section id="competences" className="skills-section">
                <svg id="svg-introducing--bottom" aria-hidden='true' xmlns="http://www.w3.org/2000/svg" viewBox="0 32 1440 128">
                    <path fill="#463f3f" fillOpacity="1" d="M0,32L1440,160L1440,0L0,0Z"></path>
                </svg>
                <h2>COMPETENCES</h2>
                <SkillsGallery />
            </section>

            <section id="projets" className="projects-section">
                <svg id="projets-svg" aria-hidden='true' xmlns="http://www.w3.org/2000/svg" viewBox="0 32 1440 128">
                    <path fill="#ffffff" fillOpacity="1" d="M0,32L1440,160L1440,0L0,0Z"></path>
                </svg>
                
                <h2>PROJETS</h2>
                <ProjectGallery />                
            </section>

            <svg id="contact" aria-hidden='true' xmlns="http://www.w3.org/2000/svg" viewBox="0 32 1440 128">
                <path fill="#a9a9a9" fillOpacity="1" d="M0,32L1440,160L1440,0L0,0Z"></path>
            </svg>
            <section className="contact-section">
                <Contact />
            </section>
        </article>
    )
};

export default Main;