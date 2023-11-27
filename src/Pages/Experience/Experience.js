import React, {useState} from 'react';
import {Link} from 'react-router-dom'; 
import './Experience.scss';


function Experience () {
    return(
       <div className='experience'>
            <div className="experience-container">
               <h1>EXPERIENCE</h1> 
               <div className="content">
                    <div className="experience-title">
                        <p className='date'> 03/2021-03/2023</p>
                        <div className='title-location-container'>
                            <h3 className="title">FRONTEND DEVELOPER</h3>
                            <p className="location">ClassRT - Toronto, ON</p>
                        </div>
                    </div>
                    <div className='experience-description'>
                        <ul>
                            <li>
                                <p>
                                    Implemented responsive website page designs using ReactJS while optimizing for
                                    cross-browser and multi-platform compatibility including desktop, tablet and mobile
                                    devices, in turn increasing website traffic by 20%
                                </p>
                            </li>
                            <li>
                                <p>
                                    Collaborated with team members in a fast-paced Agile Scrum working environment to
                                    come up with product solutions efficiently and effectively, while using Git
                                    version control
                                </p>
                            </li>
                            <li>
                                <p>
                                    Maintained and enhanced code to guarantee seamless website functionality, along with 
                                    actively contributing to code reviews through GitHub
                                </p>
                            </li>
                            <li>
                                <p>
                                    Had opportunities to work on back-end frameworks as well as to execute comprehensive 
                                    debugging tests
                                </p>
                            </li>
                        </ul>
                    </div>
               </div>
            </div>
            
       </div>
    )
}

export default Experience;