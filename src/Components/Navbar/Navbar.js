import React, {useState} from 'react';
import {Link} from 'react-router-dom'; 
import './Navbar.scss';
import { Button } from '../Button/Button';
import minaCV from '../../Documents/MinaKovacevic-CV.pdf';


function Navbar({aboutRef, experienceRef, contactRef}){

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    function executeScroll (button) {
        closeMobileMenu();
        if(button == 'about'){
            aboutRef.current.scrollIntoView();
        }else if(button == 'experience'){
            experienceRef.current.scrollIntoView();
        }else if(button == 'contact'){
            contactRef.current.scrollIntoView();
        }        
    }

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
                                <Button onClick={() => {handleScroll(aboutRef.current);}} className='nav-links' alt='About'>
                                    ABOUT
                                </Button>
                            </li>
                            <li className='nav-item'>
                                <Button className='nav-links' alt='Experience' onClick={() => {handleScroll(experienceRef.current);}}>
                                    EXPERIENCE
                                </Button>
                            </li>
                            <li className='nav-item'>
                                <Button className='nav-links' alt='Contact' onClick={() => {handleScroll(contactRef.current);}}>
                                    CONTACT
                                </Button>
                            </li>
                            <li className='nav-item'>
                                <Link to='https://mina-cv.s3.us-east-2.amazonaws.com/MinaKovacevic-CV.pdf' target="_blank">
                                    <Button className='nav-links' alt='CV'>
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