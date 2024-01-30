import React, {useEffect, useRef, useState, forwardRef} from 'react';
import './ProjectPreview.scss';


function ProjectPreview ({title, photo}) {

    return(
        <div className='project-preview'>
            <div className="overlay"></div>
            <h3 className='project-title'>{title}</h3>
            <img alt={title + " photo"} className='project-img' src={photo}/>
        </div>
    )
}

export default ProjectPreview;