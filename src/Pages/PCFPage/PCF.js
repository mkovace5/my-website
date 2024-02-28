import React, {useRef} from 'react';
import './PCF.scss';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import process from '../../images/process-steps.png';
import { Button } from '../../Components/Button/Button';
import { Link } from 'react-router-dom';
import persona1 from '../../images/persona1.png';
import persona2 from '../../images/persona2.png';
import persona3 from '../../images/persona3.png';
import persona4 from '../../images/persona4.png';
import journeyMap from '../../images/journey-map.jpg';
import sample from '../../images/sample.png';
import competitors from '../../images/competitors.jpg'
import sitemap1 from '../../images/cancer.png';
import sitemap2 from '../../images/wearethecure.png';
import sitemap3 from '../../images/acf.png';
import sitemap4 from '../../images/pmcf.png';


function PCF () {

    const overviewRef = useRef(null);
    const personaRef = useRef(null);
    const sitemapRef = useRef(null);


    const slideRight = function (ref) {
        const scrollLeft = ref.current.scrollLeft;
        const itemWidth = parseInt(
            getComputedStyle(ref.current.children[0]).width
        );
        ref.current.scrollLeft = scrollLeft + itemWidth;
    };
    const slideLeft = function (ref) {
        const scrollLeft = ref.current.scrollLeft;
        const itemWidth = parseInt(
            getComputedStyle(ref.current.children[0]).width
        );
        ref.current.scrollLeft = scrollLeft - itemWidth;
    };

    const handleScroll = (ref) => {
        window.scrollTo({
          top: ref.offsetTop,
          left: 0,
          behavior: "smooth",
        });
    };

    return(
        <div className='case-study'>
            <Navbar/>
            {/* <div className='navigation'>
                <ul className='navigation-list'>
                    <li className='nav-item'>
                        <Button onClick={() => {handleScroll(overviewRef.current);}} className='nav-links' alt='Overview'>
                            OVERVIEW
                        </Button>
                    </li>
                    <li className='nav-item'>
                        <Button className='nav-links' alt='Projects' onClick={() => {handleScroll(projectsRef.current);}}>
                            PROJECTS
                        </Button>
                    </li>
                    <li className='nav-item'>
                        <Button className='nav-links' alt='Experience' onClick={() => {handleScroll(experienceRef.current);}}>
                            EXPERIENCE
                        </Button>
                    </li>
                    <li className='nav-item'>
                        <Button className='nav-links' alt='Contact' onClick={() => {handleScroll(contactRef.current);}}>
                            CONTACT
                        </Button>
                    </li>
                </ul>
            </div> */}
            <div className='case-container'>
                <h1>Pet Cancer Fund Case Study</h1>
                <div className='case-section' id='overview-container'>
                    <div className='overview-column'>
                        <h2>Overview</h2>
                        <h3>Role</h3>
                        <p className='overview-text'>
                               UX/UI Designer           
                        </p>
                    </div>
                    <div className='background-container'>
                        <div className='background-info'>
                            <h2>Background</h2>
                            <p> The Pet Cancer Foundation is leading the effort to increase the life expectancy and quality of life for pets diagnosed with cancer. Their goal is to raise awareness about pet cancer while funding research into causes, diagnoses, treatments, and care. 
                            This is a ficticious scenario completed as part of a UX mentoring program I completed. 
                            </p>
                        </div>
                        <img src={sample}/>
                    </div>
                </div>
                <div className='case-section' id='statement-container' ref={overviewRef}>
                    <div className="problem-container">
                        <h2>The Problem</h2>
                        <p>PCF’s current website design doesn’t give users enough options to participate, donate and support, while users are looking for information on their site.</p>
                    </div>
                    <div className="goal-container">
                        <h2>The Goal</h2>
                        <p>The goal of the business is to increase the number of users/customers on the site who will participate, donate and support the PCF program.</p>
                    </div>
                </div>
                <div className='case-section' id='process-steps'>
                    <h2>Process Steps</h2>
                    <img src={process}/>
                </div>
                <div className="case-section" id='process-steps'>
                    <h2>User Research Summary</h2>
                    <p>After interviewing 8 people of various ages I have deducted that the main user goals for individuals using the pet cancer fund website is that they are looking to find information quickly and easily so that they can assess pet illnesses for better and quicker diagnosis. In terms of donations, users would love to have a donation process that is simple, and can be easily found.</p>
                    <div className='summary-container'>
                        <div className='summary-columns'>
                            <h3>User Quotes</h3>
                            <ul>
                                <li>Love for Cats and Dogs</li>
                                <li>We are a family with no kids</li>
                            </ul>
                        </div>
                        <div className='summary-columns'>
                            <h3>Technology Used</h3>
                            <ul>
                                <li>Smartphone or tablet</li>
                                <li>Desktop computer</li>
                            </ul>
                        </div>
                        <div className='summary-columns'>
                            <h3>User Goals</h3>
                            <ul>
                                <li>Design for quick search</li>
                                <li>Affiliation with credible institution</li>
                                <li>Bringing earlier cancer diagnosis</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='case-section' id='pain-points'>
                    <h2>User Pain Points</h2>
                    <div className='pain-points-container'>
                        <div className='pain-points-columns'>
                            <h2>1</h2>
                            <h3>Animal Suffering</h3>
                            <p>Users are greatly affected by animal suffering and want to find ways to help and diagnose</p>
                        </div>
                        <div className='pain-points-columns'>
                            <h2>2</h2>
                            <h3>Navigation Challenges</h3>
                            <p>Users want a design where searching can be done quickly and information found easily</p>
                        </div>
                        <div className='pain-points-columns'>
                            <h2>3</h2>
                            <h3>Complicated donation process</h3>
                            <p>Users want a simpler donation process as difficult ones can deter them from donating</p>
                        </div>
                        <div className='pain-points-columns'>
                            <h2>4</h2>
                            <h3>Credibility</h3>
                            <p>Users want to be able to know that where they are donating to is a credible institution</p>
                        </div>
                    </div>
                </div>
                <div className="case-section" id='user-stories'>
                    <h2>User Stories</h2>
                    <p>“As a pet owner, I want to be able to find information about my pets health fast, and to be able to have earlier cancer diagnosis available so I can help my pet to suffer less ”</p>
                    <p>“As a donor, I want to be able to track my the progress and success of the credible charities I give to so I can know that my donations are making a difference”</p>
                    <p>“As a veterinarian, I want to be able to learn more about new cancer findings and treatments, so that I can better help sick animals”</p>
                </div>
                <div className="case-section" id='personas'>
                    <h2>Personas</h2>
                    <div className='persona-container' ref={personaRef}>
                        <img src={persona1}/>
                        <img src={persona2}/>
                        <img src={persona3}/>
                        <img src={persona4}/>
                    </div>
                    <div className='button-container'>
                        <Button onClick={() => slideLeft(personaRef)}>
                            <i class="fa-solid fa-chevron-left" ></i>
                        </Button>
                        <Button onClick={() => slideRight(personaRef)}>
                            <i class="fa-solid fa-chevron-right"></i>
                        </Button>
                    </div>
                </div>
                <div className="case-section" id='journey-map'>
                    <h2>Journey Map</h2>
                    <img src={journeyMap}/>
                </div>
                <div className="case-section" id='competitive-audit'>
                    <h2>Competitive Audit</h2>
                    <img src={competitors}/>
                    <h3>Key Takeaways</h3>
                    <p>
                        Home page</p>
                    <ul>
                        <li>Main CTA is always in clear focus and easy to read (Ways to Donate, Shop, Connect, etc.).</li>
                        <li>Main focus of homepage is to provide information about cancers and success stories</li>
                        <ul>
                            <li>Statistical data helps process information more quickly.</li>
                            <li>Affiliations to other organizations.</li>
                            <li>Brand appeal is credible and professional.</li>
                        </ul>
                    </ul>
                    <p>Ways to Connect</p>
                    <ul>
                        <li>Majority of competitors provide users the option to donate in various ways (In honour of, in memory of, etc.).</li>
                        <li>There are other ways users can connect with the organization (connect on social media, shop website).</li>
                    </ul>
                    <p>Navigation and Content</p>
                    <ul>
                        <li>Often consists of several links related to the research of various cancers, organized into groups.</li>
                        <li>Besides research articles, there are other blog posts, in the news and ways to get involved.</li>
                        <li>Donate Now is often part of the navigation for ease of findability.</li>
                        <li>Links to social media.</li>
                    </ul>
                    <div className='sitemaps'>
                        <h3>Site Maps</h3>
                        <div className='sitemap-container' ref={sitemapRef}>
                            <img src={sitemap1}/>
                            <img src={sitemap2}/>
                            <img src={sitemap3}/>
                            <img src={sitemap4}/>
                        </div>
                        <div className='button-container'>
                            <Button onClick={() => slideLeft(sitemapRef)}>
                                <i class="fa-solid fa-chevron-left" ></i>
                            </Button>
                            <Button onClick={() => slideRight(sitemapRef)}>
                                <i class="fa-solid fa-chevron-right"></i>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='case-section' id='wireframes'>
                    <h2>Paper Wireframes</h2>
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default PCF;