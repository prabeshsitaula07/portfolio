import React from 'react';
import '../../css/style.css';
import './about.css'

import aboutimg from './aboutimg.png'
export default function About() {
    return (
        <>
            <div className="about" id="about">
                <h2 style={{ textAlign: "center", fontSize: "40px"}}  className='font-bold'><span className='violet'>About</span> Me</h2>
                <div className="about-section">
                    <div className="about-details">
                        <p>My name is Prabesh Sitaula, and I completed my high school graduation (+2) from the <span>National School of Sciences</span>.</p><br />

                        <p>I am deeply interested in <span>Web Development</span>, <span>Software Development</span>, <span>Data Structures and Algorithms</span>; and I currently work as a <span>React Developer</span>, with aspirations to explore <span>Machine Learning</span> in the future.</p><br />

                        <p>My programming skills include proficiency in <span>Python</span>, <span>C</span>, <span>C++</span>, and <span>JavaScript</span>.</p><br />

                        <p>Beyond my professional interests<br /><br />
                            <ul class="arrow-list listing">
                                <li>Watching Sports</li>
                                <li>Playing Chess, Football, Volleyball, and Cricket</li>
                                <li>Listening to Music</li>
                            </ul>

                        </p>
                    </div>
                    <img src={aboutimg} alt="about img" />
                </div>
            </div>
        </>
    )
}
