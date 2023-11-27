import React, {useState} from 'react';
import {Link} from 'react-router-dom'; 
import './Home.scss';
import Footer from '../../Components/Footer/Footer';
import Intro from '../../Components/Intro/Intro';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';

function Home () {
    return(
        <>
            <div className='home'>
                <Intro/>
                <About/>
                <Experience/>
                <Contact/>
            </div>
            <Footer/>
        </>
    )
}

export default Home;