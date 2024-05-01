import React, { useContext } from 'react'
import './golf.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import Popular from '../../components/Popular/Popular'

const Golf = () => {

    const { handleGolfClick, handleGolfApparel, handleGolfShoes, handleGolfPros, handleGolfEquipment } = useContext(StoreContext)
    
  return (
    <div className='golf-container'>
        <div className="title">
            <h1>Golf</h1>
        </div>
        <div className="heading" onClick={handleGolfClick}>
            <img src={assets.golf_header} alt="" />
            <div className='heading-details'>
                <h1>BROOK'S PICKS</h1>
                <h2>Explore the latest must-haves handpicked by pro golfer Brooks Koepka --on and off course.</h2>
                <button onClick={handleGolfClick}>Shop All</button>
            </div>
        </div>
        <div className="essential">
            <div className='essential-title'>
                <h1>Popular Right Now</h1>
            </div>
            <div className="golf-items">
                <div className="items-left">
                    <div className='golf-clothing'>
                        <p>Apparel</p>
                        <button onClick={handleGolfApparel}>Shop</button>
                    </div>
                    <div className='golf-accessories'>
                        <p>Accessories & Equipment</p>
                        <button onClick={handleGolfEquipment}>Shop</button>
                    </div>
                </div>
                <div className='items-right'>
                    <div className='footwear'>
                        <p>Footwear</p>
                        <button onClick={handleGolfShoes}>Shop</button>
                    </div>
                    <div className='inspired'>
                        <p>Inspired by<br/>The Pros</p>
                        <button onClick={handleGolfPros}>Shop</button>
                    </div>
                </div>  
            </div>
        </div>
        <Popular/>
    </div>
  )
}

export default Golf