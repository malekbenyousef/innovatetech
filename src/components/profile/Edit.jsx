import React from 'react';
import './Edit.css';

function Edit() {
    return (
        <div className="edit-profile">
            <div className="sidebar-menu">
                <button className="menu-item active">Edit Profile</button>
                <button className="menu-item">Notifications</button>
                <button className="menu-item">Choose Plan</button>
                <button className="menu-item">Password & Security</button>
            </div>
            <div className='container4'>
            <div className="edit-profile-header">
                <h2>Edit Profile</h2>
                <button className="edit-profile-camera">
                    <i className='fa-solid fa-camera'></i>
                </button>
            </div>
            <div className="edit-profile-body">
                <div className="profile-section personal">
                    <h3>Personal</h3>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Surname" />
                    <input type="date" placeholder="birthday" />
                    
                </div>
                <div className="profile-section contact">
                    <h3>Contact</h3>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Phone Number" />
                    <input type="text" placeholder="country" />
                    <input type="text" placeholder="city" />
                    <button className="btn-save">Save</button>
                </div>
                
            </div>
            </div>
        </div>
    );
}

export default Edit;
