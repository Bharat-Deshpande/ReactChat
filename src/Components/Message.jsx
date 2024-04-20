import React from 'react'
import './message.css'
const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="" alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://images.pexels.com/photos/20350952/pexels-photo-20350952/free-photo-of-great-blue-heron-600mm-4x5.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}

export default Message
