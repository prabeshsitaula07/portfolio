import React from 'react'

export default function AboutContainer(props) {
    return (
        <div className="box">
            <h3><i className={props.icon}></i>{props.title}</h3>
            <p>{props.paragraph}</p>
        </div>
    )
}
