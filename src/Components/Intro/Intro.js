import React from 'react';
import './Intro.scss';
import mina from '../../images/mina.JPG';


function Intro(){

    return(
        <div className='intro-container'>
            <div className='text-container'>
                <h3>HELLO THERE!</h3>
                <h1>I'M MINA.</h1>
                <p>I’M A SOFTWARE DEVELOPER WITH A PASSION FOR UX/UI DESIGN </p>
            </div>
            <img className='main-img' src={mina}/>
        </div>
    )
}

export default Intro;