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

                        <li><a href="#" style={{ color: "lightblue" }}>Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#project">Project</a></li>
                        <li><a href="#contact">Contact</a></li>
                        {/* <li><a href="prabesh-sitaula-cv.html">CV</a></li> */}
                        {/* <li><button id="theme-toggle" onClick={toggleTheme}>Switch Theme</button></li> */}

                    </ul>
                </div>
            </nav>
            <br></br>
        </>
    )
}
