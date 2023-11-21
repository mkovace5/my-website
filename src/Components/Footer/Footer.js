import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './Footer.css';

function Footer () {
    
    return(
        <div className="footer-container">
            <div className="name-container">
                <h3>Mina</h3>
                <h3>Kovacevic</h3>
            </div>
            <div className="links-container">
                <Link className="link">LinkedIn</Link>
                <Link className="link"to={'https://www.linkedin.com/in/mina-kovacevic-a41524192/'} target="_blank">GitHub</Link>
            </div>
            <Link className="link"></Link>
        </div>
    )
}

export default Footer;