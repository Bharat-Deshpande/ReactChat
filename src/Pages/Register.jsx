import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>React Chat</span>
        <span className="title">Register</span>
        <form action="">
            <input type="text" placeholder='Display name'/>
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password'/>
            {/* <input type="file" id='file'/>
            <label htmlFor="file">
              <img src="" alt="" /> 
              <span>Add an avatar</span></label> */}
            <button>Sign Up</button>
        </form>
        <p>You have an accound already? Login</p>
      </div>
    </div>
  )
}

export default Register
