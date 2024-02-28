import React, {useEffect, useRef, useState, forwardRef} from 'react';
import './ProjectPreview.scss';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';


function ProjectPreview ({title, photo, description, left, link}) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const w = window.innerWidth;
        if(w <= 960){
            setIsMobile(true);
        }else{
            return;
        }
    }, []);

    const disconnectObserver = () => {
        const observer = new IntersectionObserver( (entries, observer) => {
            entries.forEach((entry)=> {
                if(entry.isIntersecting) {
                    // do stuff and remove the listerner
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.disconnect();
    }

    console.log(isMobile);
    
    return(
        <div className='project-preview'>
            <div className="overlay"></div>
            {left && !isMobile ?
                <>
                    <div className='title-info-container'>
                        <h2 className='project-title'>{title}</h2>
                        <p className='project-info'>{description}</p>
                    </div>
                    <div className='image-container'>
                        <Link className='project-links' to={link} target="_blank">
                            <img alt={title + " photo"} className='project-img' src={photo}/>
                        </Link>
                    </div>       
                </>
            :
                <>
                    <div className='image-container'>
                        <Link className='project-links' to={link} target="_blank">
                            <Button onClick={()=> disconnectObserver}>
                                <img alt={title + " photo"} className='project-img' src={photo}/>
                            </Button>
                        </Link>
                    </div> 
                    <div className='title-info-container-left'>
                        <h2 className='project-title'>{title}</h2>
                        <p className='project-info'>{description}</p>
                    </div>
                </>
            }
        </div>
    )

}

export default ProjectPreview;