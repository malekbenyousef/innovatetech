import React from 'react';
import './Section2.css';
import backgroundImage from '../../assets/frameimg.jpg'; 
function Section2() {
    return (
        <div className="frame-part">
            <div className="text-section">
                <div className="mission">
                    <h2>Mission</h2>
                    <p>
                    "Our mission is to empower learners globally with accessible, high-quality education. Through innovation and engaging content, we inspire curiosity, critical thinking, and positive societal impact, unlocking the full potential of every individual, regardless of background. Together, we create a future where education is limitless, enabling everyone to thrive and make a difference."
                    </p>
                </div>
                <div className="vision">
                    <h2>Vision</h2>
                    <p>
                    "Vision: To become the premier global platform for transformative education, connecting learners with limitless opportunities and fostering a world where knowledge transcends boundaries, enabling individuals to achieve their fullest potential and create positive change for generations to come."
                     </p>
                </div>
            </div>
            <div className="image-section">
                <div className="circle-overlay">
                    <img src={backgroundImage} alt="Circle Background" className="circle-image" />
                </div>
            </div>
        </div>
    );
}

export default Section2;
