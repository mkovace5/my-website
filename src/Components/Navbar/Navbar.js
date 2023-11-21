import React, {useState} from 'react';
import navbar_img from '../../images/navbar_img.JPG';
import {Link} from 'react-router-dom'; 
import './Navbar.css';
import { Button } from '../Button';


function Navbar(){

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return(
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='nav-logo'>
                        Mina Kovacevic
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Work' className='nav-links' onClick={closeMobileMenu}>
                                Work
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Video Intro
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar