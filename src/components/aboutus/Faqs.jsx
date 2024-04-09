import React from 'react';
import './Faqs.css';

function Faqs() {
    return (
        <section className="faq-section">
            <h1 className="faq-heading">FAQ</h1>
            <p className="faq-subheading">Frequently asked questions about ......</p>
            <div className="faq-items">
                <div className="faq-item">
                    <div className="faq-item-content">
                        <h2 className="faq-question">about</h2>
                        <p className="faq-answer">Gene had to use "Jean Grey", the nickname he obtained when he became the temporary flag bearer...</p>
                       
                    </div>
                    
                </div>
                <div className="faq-item">
                    <div className="faq-item-content">
                        <h2 className="faq-question"></h2>
                        <p className="faq-answer">Does the water bowl act to purify the hookah aerosol?</p>

                    </div>
                   
                </div>
                <div className="faq-item">
                    <div className="faq-item-content">
                        <h2 className="faq-question"></h2>
                        <p className="faq-answer">Is a one-hour hookah session the same as smoking 100 or 200 cigarettes ?</p>

                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Faqs;
