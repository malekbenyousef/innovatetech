import React from 'react';
import './Contacthero.css';
import { Link } from 'react-router-dom';

function ContactHero() {
    return (
        <div className='contacthero'>
        <header className="header-contact">
            <img src='logo.png' alt="Innovate Tech Logo" className="header-logo-contact" />
            <nav className="header-nav-contact">
                <Link to="/" className="nav-link-contact ">Home</Link>
                <Link to="/about" className="nav-link-contact">About</Link>
                <Link to="/contact" className="nav-link-contact active">Contact</Link>
                <Link to='/dashboard'className="nav-link-contact">Learn</Link>
            </nav>
            <div className="header-buttons-contact">
                <Link to='/login'className="login-button">Login</Link>
                <Link to='/signup' className="signup-button">Sign Up</Link>
            </div>
        </header>
        </div>
    );
}

export default ContactHero;
