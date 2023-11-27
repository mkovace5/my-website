import React, {useState} from 'react';
import navbar_img from '../../images/navbar_img.JPG';
import {Link} from 'react-router-dom'; 
import './Navbar.scss';
import { Button } from '../Button/Button';


function Navbar(){

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    // window.addEventListener('resize', showButton);

    const bringTo = () => {
        closeMobileMenu();
    }

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
                                <Button onClick={bringTo} className='nav-links' >
                                    ABOUT
                                </Button>
                            </li>
                            <li className='nav-item'>
                                <Button className='nav-links' onClick={closeMobileMenu}>
                                    WORK
                                </Button>
                            </li>
                            <li className='nav-item'>
                                <Button className='nav-links' onClick={closeMobileMenu}>
                                    CONTACT
                                </Button>
                            </li>
                        </ul>
                    </div>                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar