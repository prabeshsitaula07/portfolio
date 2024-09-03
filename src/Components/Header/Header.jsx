import React from 'react';
import './header.css';
import home from './home.png';
import Typewriter from 'typewriter-effect';

export default function Header() {
  return (
    <>
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
          <div className="text-1">Hi there! <span className="wave">👋🏻</span></div>
            <div className="text-2">
              I'M <span className="voilet">PRABESH SITAULA</span>
            </div>
            <div className="text-3">
              <span className="typing voilet">
                <Typewriter
                  options={{
                    strings: ['React Developer', 'AI Enthusiast', 'ML Engineer To Be'],
                    autoStart: true,
                    loop: true,
                    cursor: '|',
                    delay: 75,
                    deleteSpeed: 50,
                    pauseFor: 2000,
                  }}
                />
              </span>
            </div>
          </div>
          <img src={home} alt="home" />
        </div>
      </section>
    </>
  );
}
