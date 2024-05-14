import React, { useContext } from 'react'
import './header.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Header = () => {

  const { handleGolfClick, handleShopClick } = useContext(StoreContext)

  return (
    <div className=' header-container'>
        <div className=' golf-section' onClick={() => handleShopClick("Golf")}>
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