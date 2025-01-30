import React from 'react'
import Add from '../img/myPfp.jpeg'

const Chats = () => {
  return (
    <div className='chats'>
       <div className="userChat">
        
             <img src={Add} alt="" />
             <div className='userChatInfo'>
             <span>Daniel</span>
             <p>Hello</p>
             </div>
           </div>
       <div className="userChat">
        
             <img src={Add} alt="" />
             <div className='userChatInfo'>
             <span>Daniel</span>
             <p>Hello</p>
             </div>
           </div>
       <div className="userChat">
        
             <img src={Add} alt="" />
             <div className='userChatInfo'>
             <span>Daniel</span>
             <p>Hello</p>
             </div>
           </div>
       <div className="userChat">
        
             <img src={Add} alt="" />
             <div className='userChatInfo'>
             <span>Daniel</span>
             <p>Hello</p>
             </div>
           </div>
    </div>
  )
}

export default Chats
