import React, {useRef} from 'react';
import './Home.scss';
import Footer from '../../Components/Footer/Footer';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import Navbar from '../../Components/Navbar/Navbar';
import Projects from '../Projects/Projects';

function Home () {
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const contactRef = useRef(null);
    const projectsRef = useRef(null);

    return(
        <div className='home'>
            <Navbar
                aboutRef={aboutRef}
                projectsRef={projectsRef}
                experienceRef={experienceRef}
                contactRef={contactRef}
            />
            <div className='home-container'>
                <Intro/>
                <About aboutRef={aboutRef}/>
                {/* <Projects projectsRef={projectsRef}/> */}
                <Experience experienceRef={experienceRef}/>
                <Contact contactRef={contactRef}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;