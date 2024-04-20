import React from 'react'
import './Sidebar.css'
import './Chats.css'
const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/20350952/pexels-photo-20350952/free-photo-of-great-blue-heron-600mm-4x5.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="userChatInfo">        
          <span>Bharat</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/20350952/pexels-photo-20350952/free-photo-of-great-blue-heron-600mm-4x5.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="userChatInfo">        
          <span>Bharat</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/20350952/pexels-photo-20350952/free-photo-of-great-blue-heron-600mm-4x5.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="userChatInfo">        
          <span>Bharat</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats
