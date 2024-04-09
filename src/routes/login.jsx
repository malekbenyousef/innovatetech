import React from 'react'
import Dashhead from '../components/Dashboard/Dashhead'
import SideBarLeft from '../components/Dashboard/SideBarLeft';
import Footer from '../components/hompage/Footer'
import Welcome from '../components/Dashboard/Welcome';
import TaskCard from '../components/Dashboard/TaskCard';
import Banner from '../components/Dashboard/Banner';

 function Dashboard() {
    return (
        <div className='loginjsx'>
            <Dashhead/>
            <SideBarLeft/>
            <Welcome/>
            <TaskCard/>
            <Banner/>
            <Footer/>
        </div>
    )
}
export default Dashboard;