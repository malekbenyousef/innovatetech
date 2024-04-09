import React from 'react'
import Header from '../components/hompage/Header'
import Hero from '../components/hompage/Hero'
import FeaturesSection from '../components/hompage/FeaturesSection'
import Blog from '../components/hompage/Blog'
import Footer from '../components/hompage/Footer'

export function Home() {
    return (
        <div>
            <Header className='headerHome'/>
            <Hero/>
            <FeaturesSection/>
            <Blog/>
           <Footer/>
        </div>
    )
}
