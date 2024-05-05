import React, { useContext } from 'react'
import './shop.css'
import { products } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Shop = () => {

    const { handleProductClick } = useContext(StoreContext)

  return (
    <div className='shop-container'>
        <div className="shop-products">
            <h1>Shop ({products.length})</h1>
            <div className="cart">
                {
                    products.map((item, index) => {
                        return(
                            <div className="list-items" key={index} onClick={handleProductClick}>
                                <img src={item.img[0]} alt="" />
                                <h1>Nike {item.label}</h1>
                                <h2>{item.desc}</h2>
                                <h3>{item.colors.length} Colors</h3>
                                <p>${item.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Shop