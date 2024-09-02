import React, { useState, useEffect } from 'react';
import './navbar.css';
import '../../css/button.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeNav, setActiveNav] = useState('home'); // State for tracking the active nav link

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = (nav) => {
        setActiveNav(nav);
    };

    return (
        <>
            <input type="checkbox" id="toggle" className="input" />
            <nav className={`navbar ${isScrolled ? 'semi-transparent' : 'transparent'}`}>
                <div className="nav_container">
                    <div className="logo"><a href="#">PRABESH</a></div>
                    <label htmlFor="toggle" className="navbar-toggler">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </label>
                    <ul className="nav" id="navl">
                        <li>
                            <a href="#" 
                               className={activeNav === 'home' ? 'active' : ''}
                               onClick={() => handleNavClick('home')}>
                                <img src="navlinkicon/home.png" alt="home" /> Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" 
                               className={activeNav === 'about' ? 'active' : ''}
                               onClick={() => handleNavClick('about')}>
                                <img src="navlinkicon/about.png" alt="about" /> About
                            </a>
                        </li>
                        <li>
                            <a href="#project" 
                               className={activeNav === 'project' ? 'active' : ''}
                               onClick={() => handleNavClick('project')}>
                                <img src="navlinkicon/project.png" alt="project" /> Project
                            </a>
                        </li>
                        <li>
                            <a href="#contact" 
                               className={activeNav === 'contact' ? 'active' : ''}
                               onClick={() => handleNavClick('contact')}>
                                <img src="navlinkicon/contact.png" alt="contact" /> Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <br />
        </>
    );
}
