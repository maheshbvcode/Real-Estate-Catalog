import React from 'react'
import profile from '../assets/profile.png';
import downarr from '../assets/fi-rr-angle-small-down.png';
import '../styles/navbar.css'
const Navbar = () => {
  return (
    <div>
      <div className='nav'>
        <div className='nav-userId'>
          USER ID: 06PPD125
        </div>
        <div className='username'>
            <div>
              <img src={profile} alt=''/>
            </div>
            <div>
            <img src={downarr} alt=''/>
            </div>
        </div>
      </div>
       <div className='hr'></div>
    </div>
  )
}

export default Navbar