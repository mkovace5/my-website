import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss';
import minaLogo from '../../images/mina-logo.png';
import email from '../../images/email.png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github-sign.png';

function Footer () {
    
    return(
        <div className="footer-container">
            <div className="name-container">
                <img src={minaLogo} className="logo"/>
                <p>Copyright © 2023 Mina Kovacevic. All rights reserved</p>
            </div>
            <div className="links-container">
                <Link className="link" to='https://www.linkedin.com/in/mina-kovacevic-a41524192/'><img src={linkedin}/></Link>
                <Link className="link" to='mailto:mina.k@hotmail.com' > <img src={email}/> </Link>
                <Link className="link" to='https://github.com/mkovace5' ><img src={github} /></Link>
            </div>
            <Link className="link"></Link>
        </div>
    )
}

export default Footer;