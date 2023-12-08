import React, {useEffect, useRef, useState} from 'react';
import './Work.scss'; 

function Work ( {date, title, location, points, header} ) {

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
        <div className={`work ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            <h1 className={`header ${header ? '' : 'hidden'}`}>{header}</h1>
            <div className="experience-title">
                <p className='date'> {date}</p>
                <div className='title-location-container'>
                    <div className='title-container-mobile'>
                        <h3 className="title">{title}</h3>
                        <p className='date-mobile'> {date}</p>
                    </div>
                    <p className="location">{location}</p>
                </div>
            </div>
            <div className='experience-description'>
                <ul>
                    {points.map((points) => (
                        <li>
                            <p>
                                {points}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Work;