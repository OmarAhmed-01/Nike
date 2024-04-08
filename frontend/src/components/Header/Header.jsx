import React from 'react'
import './header.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();
  const handleGolfClick = () => {
    navigate('/w/golf-and-lifestyle');
  }

  return (
    <div className=' header-container'>
        <div className=' golf-section' onClick={handleGolfClick}>
            <img src={assets.header_img1} alt='header image'/>
            <div className=' golf-section-details'>
                <p>Brook's Looks</p>
                <h1>GEAR-UP FOR <br/>THE MAJORS</h1>
                <h2>How the golf sensation is gearing up for this season's Majors and beyond. </h2>
                <button>Shop the collection</button>
            </div>
        </div>
    </div>
  )
}

export default Header