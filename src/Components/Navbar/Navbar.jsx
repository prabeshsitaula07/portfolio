import React from 'react'
import './navbar.css'
import '../../css/button.css'
// import toggleTheme from './main.js'

export default function Navbar() {
    return (
        <>
            <input type="checkbox" id="toggle" className="input" />
            <nav className="navbar">
                <div className="nav_container">

                    <div className="logo"><a href="#"> PRABESH</a></div>

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
            <br></br>
        </>
    )
}
