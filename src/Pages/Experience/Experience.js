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

    return(
       <div className='experience' ref={experienceRef}>
            <div className="experience-container">
               {/* <h1 className={`experience-text ${isVisible ? 'is-visible' : ''}`} ref={experienceTextRef}>EXPERIENCE</h1>  */}
               <Work
                    header='EXPERIENCE'
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
                    header='EDUCATION'
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