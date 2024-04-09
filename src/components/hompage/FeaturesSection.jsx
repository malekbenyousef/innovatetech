// FeaturesSection.js
import React from 'react';
import './FeaturesSection.css'; 



const FeatureItem = ({icon, title, description }) => {
  return (
    <div className="feature-item">
      <div className='icn'>
        {icon}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">All-in-One <mark style={{background:'transparent'}}>Solution</mark></h2>
        <p className="section-subtitle">
          Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
        </p>
        <div className="features-grid">
          <FeatureItem 
            icon= {<i className="fa-solid fa-file-pen"></i>}
            title="Flexible Learning"
            description="Study on your terms with self-paced courses, allowing you to learn when it suits you best."
          />
          <FeatureItem 
           icon= {<i className="fa-solid fa-calendar-days"></i>}
            title="Expert Instructors"
            description="Learn from professionals and experts in their respective fields, ensuring high-quality education."
          />
          <FeatureItem 
            icon= {<i class="fa-solid fa-users"></i>}
            title="Interactive Community"
            description="Engage with a diverse community of learners, fostering discussions, collaboration, and peer learning."
          />
          
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
