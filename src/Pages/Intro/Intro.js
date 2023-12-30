import React from 'react';
import './Intro.scss';
import mina from '../../images/mina.jpg';


function Intro(){

    return(
        <div className='intro-container'>
            <div className='text-container'>
                <h3>HELLO THERE!</h3>
                <h1>I'M MINA.</h1>
                <p>I’M A SOFTWARE DEVELOPER AND UX DESIGNER </p>
            </div>
            <img src={mina} alt="Mina outdoorsy surf picture"/>
        </div>
    )
}

export default Intro;