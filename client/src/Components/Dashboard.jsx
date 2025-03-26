import React from 'react'
import logo from './imgs/logo.png'
import "./Navbar.css"
import Footer from './Footer'
import Logout from './Logout'

function Dashboard() {
  return (
    <div>
     <nav className="navbar bg-red-600 p-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex-1">
        <a href="/" className="flex">
          <img src={logo} className="w-10 h-10" alt="Blood Hive Logo" />
          <h5 className="text-xl font-semibold text-white">Blood Hive</h5>
        </a>
      </div>
          <Logout/>
      <div>

      </div>

   </nav>
    <div className="pt-16">
    <Footer/>
    </div>
    
    
    </div>
  )
}

export default Dashboard