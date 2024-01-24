import React, {useState} from 'react';
import {Link} from 'react-router-dom'; 
import './Navbar.scss';
import { Button } from '../Button/Button';
import minaCV from '../../Documents/MinaKovacevic-CV.pdf';


function Navbar({aboutRef, experienceRef, contactRef, projectsRef}){

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const handleScroll = (ref) => {
        closeMobileMenu();
        window.scrollTo({
          top: ref.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      };

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
                                <Button onClick={() => {handleScroll(aboutRef.current);}} className='nav-links' >
                                    ABOUT
                                </Button>
                            </li>
                            <li className='nav-item'>
                                <Button className='nav-links' onClick={() => {handleScroll(projectsRef.current);}}>
                                    PROJECTS
                                </Button>
                            </li>
                            <li className='nav-item'>
                                <Button className='nav-links' onClick={() => {handleScroll(experienceRef.current);}}>
                                    EXPERIENCE
                                </Button>
                            </li>
                            <li className='nav-item'>
                                <Button className='nav-links' onClick={() => {handleScroll(contactRef.current);}}>
                                    CONTACT
                                </Button>
                            </li>
                            <li className='nav-item'>
                                <Link to={minaCV} target="_blank">
                                    <Button className='nav-links'>
                                        CV
                                    </Button>
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