import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="logo.png" alt="Company Logo" />
            <p>
            "At Innovate TechX, we believe that education is the key to unlocking unlimited potential.
             Our commitment to excellence, innovation, and inclusivity drives us to provide top-notch learning experiences that empower individuals worldwide.
             Join us in shaping the future of education and unleash your brilliance with confidence and purpose." </p>
        </div>
        <div className="footer-columns">
            
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>How to work?</li>
              <li>Popular Course</li>
              <li>Service</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>FAQ</li>
              <li>Help Center</li>
              <li>Career</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Info</h4>
            <ul>
              <li>+90 536 481 25 80</li>
              <li>aziz@jourrapide.com</li>
              <li>4808 Skinner Hollow Road</li>
              <li>Days Creek, OR 97429</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <a href="#facebook" className="social-link"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#instagram" className="social-link"><i className="fa-brands fa-instagram"></i></a>
          <a href="#twitter" className="social-link"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#linkedin" className="social-link"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
        
        <hr />
        <div className="footer-copy">
            
          <p>aziz All Right Reserved, 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
