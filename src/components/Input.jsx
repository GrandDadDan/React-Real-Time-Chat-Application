import React from 'react'
import AddImage from '../img/attachImage.png'
import AddDocument from '../img/paperclip.png'
const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...'/>
      <div className='send'>
      <img src={AddDocument} alt="" />
      
      <input type='file' style={{display:"none"}}/>
      <label htmlFor="file">
      <img src={AddImage} alt="" />
      </label>
      <button>Send</button>
    </div>
    </div>
  )
}

export default Input
