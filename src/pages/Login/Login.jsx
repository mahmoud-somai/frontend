import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div class="parent">
      <div class="div1"> </div>
      <div div class="div2"> 
          <form class="form">
            <input placeholder="Enter your email" class="input" type="text"/>
            <input placeholder="*********" class="input" type="password"/>
            <button className='btn_log'>Login</button>
          </form>
      </div>
    </div>

  )
}

export default Login