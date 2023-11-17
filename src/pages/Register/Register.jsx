import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div class="parent_reg">
<div class="div1_reg"> </div>
<div class="div2_reg">
<form class="form_reg">
  <input type="text" class="input_reg" placeholder="Enter your Fisrtname"/>
  <input type="text" class="input_reg" placeholder="Enter your Lastname"/>
  <input type="text" class="input_reg" placeholder="Enter your email"/>
  <input type="text" class="input_reg" placeholder="Enter your Address"/>
  <input type="password" class="input_reg" placeholder="*********"/>

  <button className='btn_reg'>Register</button>
</form>
     </div>
</div>

  )
}

export default Register