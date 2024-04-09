import React from 'react';
import './InformationSection.css';
import mapimg from '../../assets/map.png'

function InformationSection() {
    return (
        <div className="contact-section">
            <div className="left-section">
                <h2>Say Hi!</h2>
                <p>We'd like to talk with you.</p>
                <form className="contact-form">
                   
                    <label>My name is</label>
                    <input type="text" placeholder="Full Name" />
                    <label>I'm looking for</label>
                    <input type="text" placeholder="What you love" />
                    <label>Your message</label>
                    <textarea placeholder="I want to say that..."></textarea>
                    <button type="submit" className="send-message">SEND MESSAGE</button>
                </form>
            </div>
            <div className="contact-info-section-right" >
                <div className="contact-info-content-right">
                    <h3>Contact Information</h3>
                    <p>Fill up the form and our Team will get back to you within 24 hours.</p>
                    <p className="contact-info-detail-right">(+40) 772 100 200</p>
                    <p className="contact-info-detail">hello@creative-tim.com</p>
                    <p className="contact-info-detail">Dyonisie Wolf Bucharest, RO 010458</p>
                    <div className="contact-info-map" style={{ backgroundImage: `url(${mapimg})` }}></div>
                    <div className="social-links">
                        <a href="#facebook" className="social-icon"></a>
                        <a href="#instagram" className="social-icon"></a>
                        <a href="#twitter" className="social-icon"></a>
                        <a href="#google-plus" className="social-icon"></a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default InformationSection;
