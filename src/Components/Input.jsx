import React from 'react'
import './Input.css'
const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type Something' />
      <div className='send'>
        <img src="" alt="" />
        <input type="file" style={{display:'none'}} id='file'/>
        <label htmlFor="file">
          <img src="" alt="" />
        </label>
        <button>Send</button>
      </div>

    </div>
  )
}

export default Input
