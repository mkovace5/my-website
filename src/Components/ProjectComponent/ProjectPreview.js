import React, {useEffect, useRef, useState, forwardRef} from 'react';


function ProjectPreview ({title}) {

    return(
        <div className='project-preview'>
            <h3>{title}</h3>
            <img/>
        </div>
    )
}

export default ProjectPreview;