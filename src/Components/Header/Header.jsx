import React from 'react';
import '../../css/style.css';
import home from './home.png'
// import home_photo from './home_photo.png'

export default function Header() {
  return (
    <>
    <header className="header" id="head">
        <div className="container" align="center">
            <div>
                <h1 align="center">PRABESH <span>SITAULA</span></h1>
                <p align="center">Hello, my name is Prabesh Sitaula, and I'm excited to be here in the field of IT
                    today. As a student, I am dedicated to learning and growing, and I look forward to making the most
                    of the opportunities available to me. I have a positive attitude and am eager to work with all of
                    you to achieve our academic and personal goals.</p>
            </div>
            <img src={home} alt="prabesh_sitaula_web-developer"/>

        </div>
        </header>
    </>
  )
}
