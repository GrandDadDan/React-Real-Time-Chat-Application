import React from 'react';
import Add from "../img/myPfp.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className='logo'>Cardova Chat</span>
      <div className='user'>
        <img src={Add} alt="" />
        <span>Daniel</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
