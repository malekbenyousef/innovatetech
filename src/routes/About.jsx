import React from 'react'
import Section1 from '../components/aboutus/Section1'

import './About.css'
import Section2 from '../components/aboutus/Section2'
import Section3 from '../components/aboutus/Section3'
import Faqs from '../components/aboutus/Faqs'
import Footer from '../components/hompage/Footer'


function About() {
    return (
        <div>
           
            <Section1/>
            <Section2/>
            <Section3/>
            <Faqs/>
            <Footer/>
        </div>
    )
}



export default About