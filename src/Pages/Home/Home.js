import React, {useRef} from 'react';
import './Home.scss';
import Footer from '../../Components/Footer/Footer';
import Intro from '../../Components/Intro/Intro';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import Navbar from '../../Components/Navbar/Navbar';

function Home () {
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const contactRef = useRef(null);

    return(
        <>
            <Navbar
                aboutRef={aboutRef}
                experienceRef={experienceRef}
                contactRef={contactRef}
            />
            <div className='home'>
                <Intro/>
                <About aboutRef={aboutRef}/>
                <Experience experienceRef={experienceRef}/>
                <Contact contactRef={contactRef}/>
            </div>
            <Footer/>
        </>
    )
}

export default Home;