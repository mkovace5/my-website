import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './SkillButton.scss'; 

function SkillButton ( {skill} ) {

    return(
        <div className='skill-button'>
            <p>{skill}</p>
        </div>
    )
}

export default SkillButton;