import React from 'react';
import './PCF.scss';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

function PCF () {

    return(
        <div className='pcf'>
            <Navbar/>
            <div className='pcf-container'>
                <h1>Pet Cancer Fund Case Study</h1>
            </div>
            <Footer/>
        </div>
    );
}
export default PCF;