import React, { useState, useEffect } from 'react';
import './navbar.css';
import '../../css/button.css';

export default function Navbar() {
    // State to manage navbar background color
    const [isScrolled, setIsScrolled] = useState(false);

    // useEffect to handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Adding the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                        <li><a href="#"><img src="navlinkicon/home.png" alt="home" /> Home</a></li>
                        <li><a href="#about"><img src="navlinkicon/about.png" alt="about" /> About</a></li>
                        <li><a href="#project"><img src="navlinkicon/project.png" alt="project" /> Project</a></li>
                        <li><a href="#contact"><img src="navlinkicon/contact.png" alt="contact" /> Contact</a></li>
                    </ul>
                </div>
            </nav>
            <br />
        </>
    );
}
