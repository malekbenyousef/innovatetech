import React from 'react';
import './TaskCard.css';
import card4 from '../../assets/card4.jpg'

function TaskCard() {
    return (
        <div className="taskcontainer">
        <div className="card">
            <img src="dashimg.jpg" alt="Card Cover" className="card-image" />
            <span className="tag">FRONTEND</span>
            <h3 className="card-title">Full Stack Developer</h3>
        
        <div className="developer-info">
          <img src={card4} alt="C. Aziz Osman" className="developer-pic" />
          <div>
            <div className="developer-name">C. Aziz Osman</div>
            <div className="developer-role">Software Developer</div>
          </div>
        </div>
  
        <div className="progress-bar">
          <div className="progress" style={{ width: '80%' }}></div> 
        </div>
  
        <button className="like-btn">
           <i class="fa-regular fa-heart"></i>
        </button>
      </div>
    
      </div>

    );
}

export default TaskCard;
