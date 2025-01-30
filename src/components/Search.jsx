import React from 'react'
import Add from '../img/myPfp.jpeg';

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='find user'/>
      </div>
      <div className="userChat">
        <img src={Add} alt="" />
       <span>Daniel</span>
      </div>
      
    </div>
  )
}

export default Search
