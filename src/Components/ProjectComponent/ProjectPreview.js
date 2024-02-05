import React, {useEffect, useRef, useState, forwardRef} from 'react';
import './ProjectPreview.scss';


function ProjectPreview ({title, photo, description}) {

    return(
        <div className='project-preview'>
            <div className="overlay"></div>
            <div className='title-info-container'>
                <h2 className='project-title'>{title}</h2>
                <p className='project-info'>{description}</p>
            </div>
            <img alt={title + " photo"} className='project-img' src={photo}/>
        </div>
    )
}

export default ProjectPreview;