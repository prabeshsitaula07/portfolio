import React from 'react'
import ProjectCard from './ProjectCard'
import projectdetails from './Projectdetails'
import './project.css'


import '../../css/style.css'

function nproject(val) {
    return (
        <ProjectCard
            key={val.id}
            link={val.link}
            image={val.image}
        />
    )
}

export default function Project() {
    return (
        <>
            <section className="project" id="project">
                <h2 align="center" style={{ textAlign: "center", fontSize: "40px !important", fontWeight: "bold"}} >Web <span className='violet'>Projects</span></h2>
                <div className="projects">
                    {projectdetails.map(nproject)}
                </div>
            </section>
        </>
    )
}
