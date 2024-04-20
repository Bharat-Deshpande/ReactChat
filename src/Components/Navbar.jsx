import React from 'react'
import './Sidebar.css'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>React Chat</span>
      <div className='user'>
        <img src="https://images.pexels.com/photos/20350952/pexels-photo-20350952/free-photo-of-great-blue-heron-600mm-4x5.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>Bharat</span>
        <button>Logout</button>
      </div>
      
    </div>
  )
}

export default Navbar
