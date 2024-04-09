import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';


function Hero() {
    return (
        <>
        <div className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Up Your <mark>Skills</mark> To <mark>Advance</mark> Your <mark>Career</mark> Path</h1>
                <p className="hero-description">
                    We help build and manage a team of world-class developers to bring your vision to life.
                </p>
                <button className="hero-cta">
                    <Link to='/signup'className='link'>Start Learning</Link>
                    
                </button>
            </div>
            <div className="hero-image">
                <img src="webdev.png" alt="Hero" />
            </div>
            
        </div>
        <div className="empty"></div></>
    );
}

export default Hero;