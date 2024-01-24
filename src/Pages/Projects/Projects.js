import React, {useEffect, useRef, useState, forwardRef} from 'react';
import ProjectPreview from '../../Components/ProjectComponent/ProjectPreview';
import './Projects.scss';


function Projects ({projectsRef}) {

    const [isVisible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(projectsRef.current);
        return () => observer.unobserve(projectsRef.current);
    }, []);

    return(
        <div className={`projects-container ${isVisible ? 'is-visible' : '' }`} ref={projectsRef}>
            <h1>PROJECTS</h1>
            <div className='projects-grid'>
                <ProjectPreview/>
            </div>
        </div>
    )
}

export default Projects;