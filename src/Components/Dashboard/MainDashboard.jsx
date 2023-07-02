import React from 'react'
import './css/dashboard.css'
import SideNav from './SideNav'
import Dash from './Dash'


const MainDashboard = () => {
  return (
    <div className='dash-cont'>
      <SideNav />
      <Dash />
    </div>
  )
}

export default MainDashboard;