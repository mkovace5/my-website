import React, {useState} from 'react';
import {Link} from 'react-router-dom'; 
import './Experience.scss';
import Work from '../../Components/Work/Work';
import { ClassRT1,ClassRT2,ClassRT3,ClassRT4,MTO1,MTO2,MTO3, Western1, Western2 } from '../../Texts';


function Experience () {
    return(
       <div className='experience'>
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
       </div>
    )
}

export default Experience;