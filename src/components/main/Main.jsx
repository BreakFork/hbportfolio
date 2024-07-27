import './main.css'; 
import Introducing from '../introducing/Introducing';
import SkillsGallery from '../skills-gallery/SkillsGallery';
import ProjectGallery from '../list/ProjectGallery';
import Contact from '../contact/Contact';

const Main = () => {
    return (
        <article className="main__article">
            <section id="accueil" className="introducing-section">
                <Introducing />
            </section>

            <section id="competences" className="skills-section">
                <svg id="svg-introducing--bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 32 1440 128">
                    <path fill="#463f3f" fill-opacity="1" d="M0,32L1440,160L1440,0L0,0Z"></path>
                </svg>
                <h2>COMPETENCES</h2>
                <SkillsGallery />
            </section>

            <section id="projets" className="projects-section">
                <svg id="projets-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 32 1440 128">
                    <path fill="#ffffff" fill-opacity="1" d="M0,32L1440,160L1440,0L0,0Z"></path>
                </svg>
                
                <h2>PROJETS</h2>
                <ProjectGallery />                
            </section>

            <svg id="contact" xmlns="http://www.w3.org/2000/svg" viewBox="0 32 1440 128">
                <path fill="#a9a9a9" fill-opacity="1" d="M0,32L1440,160L1440,0L0,0Z"></path>
            </svg>
            <section id="contact" className="contact-section">
                <h2>CONTACT</h2>
                <Contact />
            </section>
            {/* <svg id="projets" xmlns="http://www.w3.org/2000/svg" viewBox="0 32 1440 128">
                <path fill="#463f3f" fill-opacity="1" d="M0,32L1440,160L1440,0L0,0Z"></path>
            </svg> */}
        </article>
    )
};

export default Main;