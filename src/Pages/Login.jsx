import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='formContainer'>
    <div className='formWrapper'>
      <span className='logo'>React Chat</span>
      <span className="title">Login</span>
      <form action="">
          {/* <input type="text" placeholder='Display name'/> */}
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password'/>
          {/* <input type="file" id='file'/>
          <label htmlFor="file">
            <img src="" alt="" /> 
            <span>Add an avatar</span></label> */}
          <button>Sign In</button>
      </form>
      <p>Don't have an account? Register</p>
    </div>
  </div>
  )
}

export default Login
