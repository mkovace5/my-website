import React, {useEffect, useRef, useState} from 'react';
import './SkillButton.scss'; 

function SkillButton ( {skill} ) {
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
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    return(
        <div className={`skill-button ${isVisible ? 'is-visible' : ''}`}ref={domRef}>
            <p>{skill}</p>
        </div>
    )
}

export default SkillButton;