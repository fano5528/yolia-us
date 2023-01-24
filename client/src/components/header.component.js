import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPersonWalking } from "@fortawesome/free-solid-svg-icons";

import { animated } from 'react-spring';


export default function Header() {
    const [menu, setMenu] = useState(false);

    return (
        <header>
            <Link to="/" className="logo"><img src={logo}/></Link>
            <ul className="categories">
                <li><Link to="/stays"><FontAwesomeIcon icon={faBed}/>Stays</Link></li>
                <li><Link to="/experiences"><FontAwesomeIcon icon={faPersonWalking}/>Experiences</Link></li>
            </ul>
            <ul className="desktopMenu">
                <li className="headic"><Link to="/coming-soon">Log In</Link></li>
                <li className="headcta"><Link to="/coming-soon">Register</Link></li>
            </ul>
            <div className="menu" onClick={ () => { setMenu(!menu) } }>
                <animated.svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={ menu ? { opacity: 0 } : { opacity: 1 } }><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fillRule="nonzero"/></animated.svg>
                <animated.svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={ menu ? { opacity: 1 } : { opacity: 0 } }><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></animated.svg>
            </div>
            <animated.ul className="mobileCategories" style={ menu ? { opacity: 1, display: "flex" } : { opacity: 0, display: "none" } }>
                <li><Link to="/stays"><FontAwesomeIcon icon={faBed}/>Stays</Link></li>
                <li className="mHeadExperience"><Link to="/experiences"><FontAwesomeIcon icon={faPersonWalking}/>Experiences</Link></li>
            </animated.ul>
            <animated.ul className="mobileMenu" style={ menu ? { opacity: 1, display: "flex" } : { opacity: 0, display: "none" } }>
                <li className="headic"><Link to="/coming-soon">Log In</Link></li>
                <li className="headcta"><Link to="/coming-soon">Register</Link></li>
            </animated.ul>
        </header>
    )
}