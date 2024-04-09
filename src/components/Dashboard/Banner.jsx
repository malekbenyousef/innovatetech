import React from 'react';
import './Banner.css';

function Banner() {
    return (
        <div className="banner">
            <div className="banner-stars">
            </div>
            <p className="banner-subtitle">ONLINE COURSE</p>
            <h2 className="banner-title">Sharpen Your Skills With Professional Online Courses</h2>
            <button className="banner-button">
                Join Now
                <i className="fa-regular fa-circle-play" > </i>
            </button>
        </div>
    );
}

export default Banner;
