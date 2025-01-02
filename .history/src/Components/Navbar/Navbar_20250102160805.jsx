import React, { useState, useEffect } from 'react';
import './navbar.css';
import '../../css/button.css';
// Ensure your resume is in the public folder, or provide the correct path if it is in src
import resume from './PrabeshSitaulaCV.pdf'; 
import navlogo from './logo2.png'

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
                    <div className="logo"><a href="#"><img src="" alt="" /></a></div>
                    <label htmlFor="toggle" className="navbar-toggler">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </label>
                    <ul className="nav" id="navl">
                        <li>
                            <a href="#" 
                               className={`hanimation ${activeNav === 'contact' ? 'active' : ''}`}
                               onClick={() => handleNavClick('home')}>
                                <img src="navlinkicon/home.png" alt="home" /> Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" 
                               className={`hanimation ${activeNav === 'contact' ? 'active' : ''}`}
                               onClick={() => handleNavClick('about')}>
                                <img src="navlinkicon/about.png" alt="about" /> About
                            </a>
                        </li>
                        <li>
                            <a href="#project" 
                               className={`hanimation ${activeNav === 'contact' ? 'active' : ''}`}
                               onClick={() => handleNavClick('project')}>
                                <img src="navlinkicon/project.png" alt="project" /> Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" 
                               className={`hanimation ${activeNav === 'contact' ? 'active' : ''}`}
                               onClick={() => handleNavClick('contact')}>
                                <img src="navlinkicon/contact.png" alt="contact" /> Contact
                            </a>
                        </li>
                        <li>
                        <div className='line'>

                        </div>
                        </li>
                        <li>
                            <a href={resume} 
                               className="btn download-cv-btn" 
                               download="PrabeshSitaulaCV.pdf">
                                Download CV
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <br />
        </>
    );
}
