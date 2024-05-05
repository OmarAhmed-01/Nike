import React, { useContext } from 'react'
import "./men.css"
import { assets } from '../../assets/assets'
import Popular from '../../components/Popular/Popular'
import { StoreContext } from '../../context/StoreContext'

const Men = () => {

    const { handleSubCategory, handleShopClick } = useContext(StoreContext);

  return (
    <div className='men-container'>
        <div className="title">
            <h1>Men</h1>
        </div>
        <div className="heading" onClick={() => handleShopClick("Men")}>
            <img src={assets.heading} alt="" />
            <div className='heading-details'>
                <p>Step into the Unreal</p>
                <h1>AIR MAX DN</h1>
                <h2>Dynamic Camavinga - everywhere all at once.</h2>
                <button onClick={() => handleShopClick("Men")}>Shop Now</button>
            </div>
        </div>
        <div className="essentials">
            <div className='essentials-title'>
                <h1>Shop the Essentials</h1>
            </div>
            <div className="items">
                <div className='clothing'>
                    <img src={assets.men_clothing} onClick={() => handleSubCategory("Men", "Clothing")} alt="" />
                    <p>Clothing</p>
                </div>
                <div className='shoes'>
                    <img src={assets.men_shoes} onClick={() => handleSubCategory("Men", "Shoes")} alt="" />
                    <p>Shoes</p>
                </div>
                <div className='accessories'>
                    <img src={assets.men_accessories} onClick={() => handleSubCategory("Men", "Accessories")} alt="" />
                    <p>Accessories</p>
                </div>
            </div>
        </div>
        <Popular/>
    </div>
  )
}

export default Men