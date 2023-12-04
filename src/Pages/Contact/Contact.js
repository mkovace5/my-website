import React, {useEffect, useRef, useState, forwardRef} from 'react';
import {Link} from 'react-router-dom'; 
import './Contact.scss';
import {Button} from '../../Components/Button/Button';
import github from '../../images/github-sign.png';
import linkedin from '../../images/linkedin.png'

function Contact ({contactRef}) {

    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(contactRef.current);
        return () => observer.unobserve(contactRef.current);
    }, []);

    return(
       <div className={`contact-container ${isVisible ? 'is-visible' : ''}`} ref={contactRef}>
            <h3>LET'S GET IN TOUCH!</h3>
            <Link to='mailto:mina.k@hotmail.com'>
                <Button buttonStyle='btn--outline'>CONTACT ME</Button>
            </Link>
            <div className="icon-container">
                <Link to='https://www.linkedin.com/in/mina-kovacevic-a41524192/' target="_blank">
                    <img src={linkedin}/>
                </Link>
                <Link to='https://github.com/mkovace5' target='_blank'>
                    <img src={github}/>
                </Link>
            </div>
       </div>
    )
}

export default forwardRef(Contact);