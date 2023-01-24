import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/app.png';

export default function Footer() {
    return (
        <footer>
            <div className="footer1">
                <Link to="/"><img src={logo}/></Link>
                <ul className="footer1links" id="acercaDe">
                    <li><Link to="/about-us"><strong>ABOUT YOLÍA</strong></Link></li>
                    <li><Link to="/why-yolia">Why Yolía</Link></li>
                    <li><Link to="/our-story">Our Story</Link></li>
                    <li><Link to="/about-cuernavaca">About Cuernavaca</Link></li>
                </ul>
                <ul className="footer1links" id="yoliaUSA">
                    <li><Link to="/book"><strong>BOOK MY TRIP</strong></Link></li>
                    <li><Link to="/stays">Stays</Link></li>
                    <li><Link to="/experiences">Experiences</Link></li>
                </ul>
                <ul className="footer1links" id="miCuenta">
                    <li><Link to="/coming-soon"><strong>MY ACCOUNT</strong></Link></li>
                    <li><Link to="/coming-soon">Sign Up</Link></li>
                    <li><Link to="/coming-soon">Log In</Link></li>
                    <li><Link to="/coming-soon">Forgotten Password</Link></li>
                </ul>
            </div>
            <ul className="footer2">
                <li>All rights reserved for Yolía®</li>
                <li><Link to="/coming-soon">Privacy Policy</Link></li>
                <li><Link to="/coming-soon">Legal Notice</Link></li>
            </ul>
        </footer>
    )
}