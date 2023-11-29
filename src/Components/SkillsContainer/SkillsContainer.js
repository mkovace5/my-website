import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './SkillsContainer.scss'; 
import SkillButton from '../SkillsButton/SkillButton';

function SkillsContainer () {
    const skillsArray = ["JAVASCRIPT", "PYTHON", "FIGMA", "HTML", "CSS", "REACTJS", "NODEJS", "GIT", "JIRA", "ANGULAR"];

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