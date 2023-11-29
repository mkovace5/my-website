import React, {useState, forwardRef} from 'react';
import {Link} from 'react-router-dom'; 
import './Experience.scss';
import Work from '../../Components/Work/Work';
import { ClassRT1,ClassRT2,ClassRT3,ClassRT4,MTO1,MTO2,MTO3,Western1,Western2 } from '../../Texts';
import SkillsContainer from '../../Components/SkillsContainer/SkillsContainer';


function Experience ({experienceRef}) {

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
        observer.observe(experienceRef.current);
        return () => observer.unobserve(experienceRef.current);
    }, []);

    return(
       <div className={`experience ${isVisible ? 'is-visible' : ''}`} ref={experienceRef}>
            <div className="experience-container">
               <h1>EXPERIENCE</h1> 
               <Work
                    date='03/2021-03/2023'
                    title='FRONTENDEVELOPER'
                    location='ClassRT - Toronto, ON'
                    points={[ClassRT1,ClassRT2,ClassRT3,ClassRT4]}
               />
               <Work
                    date='05/2019-09/2019'
                    title='IT SYSTEMS ASSISTANT'
                    location='Ontario Ministry of Transportation - Toronto, ON'
                    points={[MTO1,MTO2,MTO3]}
                />
                <Work
                    date='09/2017-04/2023'
                    title='BACHELOR OF ENGINEERING SCIENCE - BESc'
                    location='Western University - London, ON'
                    points={[Western1, Western2]}
                />
            </div> 
            <SkillsContainer/>      
       </div>
    )
}

export default forwardRef(Experience);