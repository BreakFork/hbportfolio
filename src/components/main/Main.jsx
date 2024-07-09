import './main.css'; 
import Introducing from '../introducing/Introducing';
import Projects from '../projects/Project';
import Contact from '../contact/Contact';

const Main = () => {
    return (
        <>
            <section id="introducing">
                <Introducing />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </>
    )
};

export default Main;