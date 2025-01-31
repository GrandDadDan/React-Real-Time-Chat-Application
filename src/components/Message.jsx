import React from 'react'
import Boy from '../img/boy.png'
const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
      <img
       src={Boy} alt="" />
      <span>Just now</span>
      </div>
      <div className="messageContent">
       <p>Hello</p>
       <img src={Boy} alt="" />
      </div>
    </div>
  )
}

export default Message
