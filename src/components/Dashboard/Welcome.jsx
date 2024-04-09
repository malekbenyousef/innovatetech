import React from 'react';
import './Welcome.css';

function Welcome() {
    return (
        <div className="welcome-message">
            
            <div className="message-text">
                <h2>Welcome back Mariam!</h2>
                <p>You’ve learned 80% of your goal this week! Keep it up and improve yourself.</p>
            </div>
            <img src='dasimg2.jpg' alt="Mariam" className="mariam-image" />
        </div>
    );
}

export default Welcome;
