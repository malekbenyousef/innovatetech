import React from 'react'
import Profile from '../components/profile/Profile'
import Edit from '../components/profile/Edit'
import Footer from '../components/hompage/Footer'
import Profilehead from '../components/profile/Profilehead'

function Settings() {
    return (
        <div>
            <Profilehead/>
            <Profile/>
            <Edit/>
            <Footer/>
        </div>
    )
}

export default Settings