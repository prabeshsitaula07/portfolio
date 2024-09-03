import React from 'react';
import '../../css/style.css';
import AboutContainer from './AboutContainer';
import aboutdetails from './Aboutdetails'
function nbox(val) {
    return (
        <AboutContainer
            title={val.title}
            paragraph={val.paragraph}
            icon={val.icon}
            key={val.id}
        />
    )
}
export default function About() {
    return (
        <>
            <div className="section-box-h2" id="about">
                <h2 style={{ textAlign: "center" }}>Learn More <span className='violet'>About Me</span></h2>
                <section className="boxes">
                    <div className="container">
                        {aboutdetails.map(nbox)}
                    </div>
                </section>
            </div>
        </>
    )
}
