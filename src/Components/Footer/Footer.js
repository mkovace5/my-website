import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss';
import minaLogo from '../../images/mina-logo.png';
import email from '../../images/email.png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github-sign.png';
import { Button } from "../Button/Button";

function Footer () {
    
    return(
        <div className="footer-container">
            <div className="footer">
                <div className="name-container">
                    <Button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                        <img src={minaLogo} className="logo"/>
                    </Button>
                    <p className="copyright">Copyright © 2023 Mina Kovacevic. All rights reserved</p>
                </div>
                <div className="links-container">
                    <Link className="link" to='https://www.linkedin.com/in/mina-kovacevic-a41524192/' target="_blank"><img src={linkedin}/></Link>
                    <Link className="link" to='mailto:mina.k@hotmail.com' target="_blank"> <img src={email}/> </Link>
                    <Link className="link" to='https://github.com/mkovace5' target="_blank"><img src={github} /></Link>
                </div>
            </div>
            <p className="copyright-mobile">Copyright © 2023 Mina Kovacevic. All rights reserved</p>
        </div>
    )
}

export default Footer;