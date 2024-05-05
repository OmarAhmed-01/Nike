import React, { useRef } from 'react'
import './women.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import Popular from '../../components/Popular/Popular'

const Women = () => {
    const { handleSubCategory, handleScrollLeft, handleScrollRight, handleShopClick } = useContext(StoreContext);
    const scrollRef = useRef(null);
  return (
    <div className='women-container'>
        <div className="title">
            <h1>Women</h1>
        </div>
        <div className="heading" onClick={() => handleShopClick("Women")}>
            <img src={assets.women_heading} alt="" />
            <div className='heading-details'>
                <p>Step into the Unreal</p>
                <h1>AIR MAX DN</h1>
                <h2>The Dynamic Style of Jane Doe</h2>
                <button onClick={() => handleShopClick("Women")}>Shop Now</button>
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
                    <img src={assets.women_clothing} onClick={() => handleSubCategory("Women", "Clothing")} alt="" />
                    <p>Clothing</p>
                </div>
                <div className='shoes'>
                    <img src={assets.women_shoes} onClick={() => handleSubCategory("Women", "Shoes")} alt="" />
                    <p>Shoes</p>
                </div>
                <div className='accessories'>
                    <img src={assets.women_accessories} onClick={() => handleSubCategory("Women", "Accessories")} alt="" />
                    <p>Accessories</p>
                </div>
                <div className='bras'>
                    <img src={assets.women_bras_leggings} onClick={() => handleSubCategory("Women", "Bras")} alt="" />
                    <p>Bras & Leggings</p>
                </div>
            </div>
        </div>
        <Popular/>
    </div>
  )
}

export default Women