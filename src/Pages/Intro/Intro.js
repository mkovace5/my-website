import React from 'react';
import './Intro.scss';
import mina from '../../images/mina.jpg';


function Intro(){

    return(
        <div className='intro-container'>
            <div className='text-container'>
                <h3>HELLO THERE!</h3>
                <h1>I'm Mina.</h1>
                <p>I’M A UX DESIGNER AND SOFTWARE DEVELOPER WHO LOVES TO CREATE USER-CENTRIC, ENGAGING, AND INTUITIVE DESIGNS</p>
            </div>
            <img src={mina} alt="Mina outdoorsy surf picture"/>
        </div>
    )
}

export default Intro;