import React, {useState, forwardRef} from 'react';
import {Link} from 'react-router-dom'; 
import './Contact.scss';


function Contact ({contactRef}) {

    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
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
            <h1>CONTACT</h1>
       </div>
    )
}

export default forwardRef(Contact);