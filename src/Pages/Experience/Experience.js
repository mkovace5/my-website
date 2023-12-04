import React, {useState, forwardRef, useRef, useEffect} from 'react';
import './Experience.scss';
import Work from '../../Components/Work/Work';
import { ClassRT1,ClassRT2,ClassRT3,ClassRT4,MTO1,MTO2,MTO3,Western1,Western2 } from '../../Texts';
import SkillsContainer from '../../Components/SkillsContainer/SkillsContainer';


function Experience ({experienceRef}) {

    const [isVisible, setVisible] = useState(false);
    const experienceTextRef = useRef(null);
    const educationTextRef = useRef(null);
    const skillsTextRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(experienceTextRef.current);
        return () => {
            observer.unobserve(experienceTextRef.current);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(educationTextRef.current);
        return () => {
            observer.unobserve(educationTextRef.current);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(skillsTextRef.current);
        return () => {
            observer.unobserve(skillsTextRef.current);
        };
    }, []);

    return(
       <div className='experience'>
            <div className="experience-container">
               <h1 className={`experience-text ${isVisible ? 'is-visible' : ''}`} ref={experienceTextRef}>EXPERIENCE</h1> 
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
                <h1 className={`education-text ${isVisible ? 'is-visible' : ''}`} ref={educationTextRef}>EDUCATION</h1>
                <Work
                    date='09/2017-04/2023'
                    title='BACHELOR OF ENGINEERING SCIENCE - BESc'
                    location='Western University - London, ON'
                    points={[Western1, Western2]}
                />
            </div> 
            <h1 className={`skills-text ${isVisible ? 'is-visible' : ''}`} ref={skillsTextRef}>SKILLS</h1>
            <SkillsContainer/>      
       </div>
    )
}

export default forwardRef(Experience);