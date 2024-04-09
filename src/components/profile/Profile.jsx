import React from 'react';
import './Profile.css';
import card3 from '../../assets/card3.jpg'

function  Profile() {
    return (
        <aside className="edit-profile-sidebar" style={{ backgroundImage: `url('vector.avif')` }}>
        <div className="profile-header">
          <img src={card3} alt="Profile" className="profile-image" />
          <button className="camera-button">
                <i class="fa-solid fa-camera"></i>
          </button>
          <div className="profile-info">
            <div className="profile-name">Mariam Omar</div>
            <div className="profile-status">College Student</div>
          </div>
        </div>
        
      </aside>
    );
}

export default Profile;
