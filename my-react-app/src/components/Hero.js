import React from 'react';
import './Hero.css';
import profileImage from './images/Profile.jpg'; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi! I am <span className="hero-name">Ramil Benitez</span>
          </h1>
          <h2 className="hero-subtitle">Frontend Developer</h2>
          <p className="hero-description">
            Passionate about creating beautiful, responsive, and user-friendly web applications. 
            With expertise in React, JavaScript, and modern web technologies, 
            I bring ideas to life with clean and efficient code.
          </p>
            <div className="hero-buttons">
                <button className="hero-button primary-button">View My Work</button>
                <button className="hero-button secondary-button">Contact Me</button>
            </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img src={profileImage} alt="Ramil Benitez" className="hero-image" />
            <div className="hero-image-accent"></div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;