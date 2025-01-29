import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
    <div className='formWrapper'>
        <span className="logo">Cardova Chat</span>
        <span className="title">Register</span>
        <form>
            <input type="text" placeholder='display name'/>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <input type="file" id='file'/>
            <label htmlFor="file">
                <img src="" alt="" />
            </label>
            <button>Sign Up</button>
        </form>
        <p>Already registered? Login</p>
    </div>
     
    </div>
  )
}

export default Register
