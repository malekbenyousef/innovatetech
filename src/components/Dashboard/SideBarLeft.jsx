import React from 'react';
import './SideBarLeft.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SideBarLeft() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

    return (<>
       
        <aside className="sidebar-left">
            
             <div className="sidebar-menu">
                <Link to='/' className="menu-item">
                <i class="fa-solid fa-house"></i>
                    <span>Home</span>
                </Link>
                <a href="#" className="menu-item">
                <i class="fa-solid fa-list-check"></i>
                    <span>My Tasks</span>
                </a>
                <Link to='/contact' className="menu-item">
                <i class="fa-solid fa-user"></i>
                    <span>Members</span>
                </Link>
                <Link to='/profile' className="menu-item">
                <i class="fa-solid fa-gear"></i>
                    <span>Settings</span>
                </Link>
                <div className="menu-separator"></div>
                <div className="menu-section-label">TEAMS</div>
                <Link to='/contact' className="menu-item">
                <i class="fa-solid fa-message"></i>
                    <span>Message</span>
                </Link>
                <a href="#" className="menu-item">
                <i class="fa-solid fa-phone"></i>
                    <span>Call Meeting</span>
                </a>
                <div className="menu-section-label">GENERAL</div>
                <a href="#" className="menu-item-log">
                <i class="fa-solid fa-arrow-right-from-bracket fa-rotate-180"></i>
                    <span>Log Out</span>
                </a>
            </div>
            
        </aside>
        </>
    );
}

export default SideBarLeft;
