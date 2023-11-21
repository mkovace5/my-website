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
                        MINA KOVACEVIC
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <div className="nav-links-container">
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                                    ABOUT
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Work' className='nav-links' onClick={closeMobileMenu}>
                                    WORK
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    </div>                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar