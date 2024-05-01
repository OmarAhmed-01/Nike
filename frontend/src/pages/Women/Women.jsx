import React, { useRef } from 'react'
import './women.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import Popular from '../../components/Popular/Popular'

const Women = () => {
    const {handleWomenClick, handleWomenClothes, handleWomenShoes, handleWomenAccess, handleWomenBras, handleScrollLeft, handleScrollRight } = useContext(StoreContext);
    const scrollRef = useRef(null);
  return (
    <div className='women-container'>
        <div className="title">
            <h1>Women</h1>
        </div>
        <div className="heading" onClick={handleWomenClick}>
            <img src={assets.women_heading} alt="" />
            <div className='heading-details'>
                <p>Step into the Unreal</p>
                <h1>AIR MAX DN</h1>
                <h2>The Dynamic Style of Jane Doe</h2>
                <button onClick={handleWomenClick}>Shop Now</button>
            </div>
        </div>
        <div className="essentials">
            <div className='essential-title'>
                <h1>Shop the Essentials</h1>
                <div className=' popular-arrows'>
                    <div className='arrow-left' onClick={() => handleScrollLeft(scrollRef)}>
                        <img src={assets.arrowLeft}/>
                    </div>
                    <div className=' arrow-right' onClick={() => handleScrollRight(scrollRef)}>
                        <img src={assets.arrowRight}/>
                    </div>
                </div>
            </div>
            <div className="items" ref={scrollRef}>
                <div className='clothing'>
                    <img src={assets.women_clothing} onClick={handleWomenClothes} alt="" />
                    <p>Clothing</p>
                </div>
                <div className='shoes'>
                    <img src={assets.women_shoes} onClick={handleWomenShoes} alt="" />
                    <p>Shoes</p>
                </div>
                <div className='accessories'>
                    <img src={assets.women_accessories} onClick={handleWomenAccess} alt="" />
                    <p>Accessories</p>
                </div>
                <div className='bras'>
                    <img src={assets.women_bras_leggings} onClick={handleWomenBras} alt="" />
                    <p>Bras & Leggings</p>
                </div>
            </div>
        </div>
        <Popular/>
    </div>
  )
}

export default Women