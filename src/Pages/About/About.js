import React, {useState} from 'react';
import {Link} from 'react-router-dom'; 
import './About.scss';
import about_pic from '../../images/mina-pic.jpg'

function About () {
    return(
        <div className='about-container'>
            <img src={about_pic}/>
            <div className='about-text-container'>
                <h1>ABOUT ME</h1>
                <p className='about-text'>
                    Hello! My name is Mina I am 24 years old, and I graduated 
                    from Western University with a degree in software engineering 
                    in 2022. I have experience in frontend development and a 
                    passion for creating user-centric, accessible, responsive web 
                    pages. I am a firm believer in life-long learning and I am 
                    always eager to learn about the latest industry trends and 
                    best practices. Outside of work I am a big nature lover and 
                    love to adventure, travel and create music.
                </p>
            </div>
        </div>

    )
}

export default About;