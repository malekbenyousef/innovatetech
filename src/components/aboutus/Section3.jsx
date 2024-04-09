import React from 'react';
import './Section3.css';
import card1 from '../../assets/card1.jpg'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.jpg'
import card4 from '../../assets/card4.jpg'
function Section3() {
    return (
        <div className="section-three" >
            <h2 className="section-title">The Executive Team</h2>
            <p className="section-subtitle">
                There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill.
            </p>
            <div className="cards-container">
            <div className="team-card">
            <div className="card-image-container">
                <img src={card1} alt="Mariam Omar" className="card-image" />
            </div>
            <div className="card-text-container">
                <h3 className="card-name">Mariam Omar</h3>
                <p className="card-role">UI Designer</p>
                <p className="card-description">Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
            </div>
            
            </div>
            <div className="team-card">
            <div className="card-image-container">
                <img src={card2} alt="Mariam Omar" className="card-image" />
            </div>
            <div className="card-text-container">
                <h3 className="card-name">C.Aziz Usman</h3>
                <p className="card-role">Boss</p>
                <p className="card-description">Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
            </div>
            
            </div>
            <div className="team-card">
            <div className="card-image-container">
                <img src={card3} alt="Mariam Omar" className="card-image" />
            </div>
            <div className="card-text-container">
                <h3 className="card-name">Rahma</h3>
                <p className="card-role">COO</p>
                <p className="card-description">Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
            </div>
            
            </div>
            <div className="team-card">
            <div className="card-image-container">
                <img src={card4} alt="Mariam Omar" className="card-image" />
            </div>
            <div className="card-text-container">
                <h3 className="card-name">Ahmed Shariff</h3>
                <p className="card-role">Js Developer</p>
                <p className="card-description">Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
            </div>
            
            </div>
               

            </div>
        </div>
    );
}

export default Section3;
