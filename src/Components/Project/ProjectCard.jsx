import React from 'react';

export default function ProjectCard(props) {
    return (
        <>
            <div className="project-container">
                <div className="project-overlay">
                    <p className="project-text">
                        <a className="project-link" href={props.link} target="_blank" rel="noopener noreferrer">Project Link</a>
                    </p>
                </div>
                <img className="project-image" src={"project-image/"+props.image} alt="Project Image" />
            </div>
        </>
    );
}