import React, {useEffect, useState, forwardRef, useRef} from 'react';
import ProjectPreview from '../../Components/ProjectComponent/ProjectPreview';
import './Projects.scss';
import pcf from '../../images/pcf-case.png';
import plant from '../../images/plant-app.jpg';
import site from '../../images/personal-site.png';
import { Link } from 'react-router-dom';
import { Button } from '../../Components/Button/Button';


function Projects ({projectsRef}) {

    const [isVisible, setVisible] = useState(false);
    const projectsTextRef = useRef();

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
    });

    return(
        <div className={`projects-container ${isVisible ? 'is-visible' : '' }`} ref={projectsRef}>
            <h1 className='projects-header'>PROJECTS</h1>
            <div className='projects-grid'>
                <ProjectPreview title='PCF Case Study' photo={pcf} description='' left={false} link={'/PCF'}/>
                <Link className='project-links'><ProjectPreview title='Personal Website' photo={site} description='A look into my thought process 
                and design behind my personal website' left={true}/></Link>
            </div>
        </div>
    )
}

export default forwardRef(Projects);