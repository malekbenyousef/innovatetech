import React from 'react';
import './Section1.css';

import backgroundImage from '../../assets/bgimage.jpg'; 
import { Link } from 'react-router-dom';

function Section1() {
    return (
        <div className="hero2" style={{ backgroundImage: `url(${backgroundImage})` }}>
             
        <div className="section-one">
            <div className="navbar-about">
                <img src='logo.png' alt="Innovate Tech" className="navbar-logo" />
                <div className="navbar-links">
                    <Link to="/" className="nav-link active">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to='/dashboard'className="nav-link">Learn</Link>
            </div>
                <div className="navbar-auth">
                    <Link to='/login'className="btn-login">Login</Link>
                    <Link to='/signup' className="btn-signup">Sign Up</Link>
                </div>
            </div>
               <div className="hero2-content">
                    <h1>Who we are....</h1>
                    <p>
                    Quality is at the heart of everything we do. From course content to 
                    user experience, we strive for excellence in every aspect of 
                    our platform. Our goal is to ensure that every learner has a
                     positive and impactful learning experience with us.
                    </p>
                    <button className="btn-create-account">
                       <Link to='/signup'>CREATE ACCOUNT</Link> 
                    </button>
                    <div className="social-links">
                        <span>Find us on</span>
                        <div className="social-icons">
                            <a href="#facebook" className="social-icon"></a>
                            <a href="#instagram" className="social-icon"></a>
                            <a href="#twitter" className="social-icon"></a>
                            <a href="#google-plus" className="social-icon"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;
