import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Work.scss'; 

function Work ( {date, title, location, points} ) {

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
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    return(
        <div className={`work ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            <div className="experience-title">
                <p className='date'> {date}</p>
                <div className='title-location-container'>
                    <h3 className="title">{title}</h3>
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