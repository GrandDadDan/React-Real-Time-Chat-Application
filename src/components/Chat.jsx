import React from 'react'
import Cam from '../img/camera.png'
import Add from '../img/addFriend.png'
import More from '../img/moreOptions.png'
import Messages from './Messages'
import Input from './Input'


const Chat = () => {
  return (
    <div className="chat">
      <div className='chatInfo'>
        <span>Daniel</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
