import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Work.scss'; 

function Work ( {date, title, location, points} ) {
    return(
        <div className="work">
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