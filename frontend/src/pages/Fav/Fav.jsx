import React, { useContext } from 'react'
import './fav.css'
import { assets, products } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const Fav = () => {
    const { favItem, removeFav, handleProductClick } = useContext(StoreContext)
  return (
    <div className="fav-wrapper">
        <h1>Favourites</h1>
        <div className="fav-container">
            {
                products.map((fav, index) => {
                    if(favItem[fav.id] > 0){
                        return (
                            <div className='items' key={index}>
                                <div className='fav-item-image'>
                                    <img src={fav.img[0]} alt="" />
                                </div>
                                <div className="name-desc">
                                    <h2>Nike {fav.label}</h2>
                                    <p>{fav.desc}</p>
                                </div>
                                <div className="price">
                                    <p>${fav.price}</p>
                                </div>
                                <div className="add-remove">
                                    <button onClick={() => handleProductClick(fav.id)}>Go to Product</button>
                                    <img src={assets.trash} onClick={() => removeFav(fav.id)} alt="" />
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    </div>
  )
}

export default Fav