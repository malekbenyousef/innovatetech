import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <img src="/logo.png" alt="Innovate Tech Logo" className="header-logo" />
            <nav className="header-nav">
                <Link to="/" className="nav-link active">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                <Link to="/dashboard" className="nav-link">Learn</Link>
            </nav>
            <div className="header-actions">
                <Link to="/login" className="btn btn-login">Login</Link>
                <Link to="/signup" className="btn btn-signup">Sign Up</Link>
            </div>
        </header>
    );
}

export default Header;