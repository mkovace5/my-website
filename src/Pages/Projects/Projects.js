import React, {useEffect, useState, forwardRef} from 'react';
import ProjectPreview from '../../Components/ProjectComponent/ProjectPreview';
import './Projects.scss';
import pcf from '../../images/pcf-case.png';
import plant from '../../images/plant-app.jpg';
import site from '../../images/personal-site.png';
import { Link } from 'react-router-dom';


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
                <Link className='project-links' to='/PCF'><ProjectPreview title='PCF Case Study' photo={pcf} description=''/></Link>
                <Link className='project-links'><ProjectPreview title='Plant app Case Study' photo={plant}/></Link>
                <Link className='project-links'><ProjectPreview title='Personal Website' photo={site}/></Link>
            </div>
        </div>
    )
}

export default forwardRef(Projects);