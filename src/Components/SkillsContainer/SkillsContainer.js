import React from 'react';
import './SkillsContainer.scss'; 
import SkillButton from '../SkillsButton/SkillButton';

function SkillsContainer () {
    const skillsArray = ["JAVASCRIPT", "PYTHON", "FIGMA", "HTML", "CSS/SCSS", "REACTJS", "NODEJS", "GIT", "JIRA", "ANGULAR", "CANVA", "WEBFLOW","ADOBE CREATIVE CLOUD", "FRAMER"];

    console.log(skillsArray[0]);

    return(
        <div className='skills-container'>
            {skillsArray.map((skill) => (
                <SkillButton skill={skill}/>
            ))}
        </div>
    )
}

export default SkillsContainer;