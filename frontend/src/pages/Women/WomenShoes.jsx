import React, { useContext } from 'react'
import './womenShop.css'
import { StoreContext } from '../../context/StoreContext'
import { products } from '../../assets/assets'

const WomenShoes = () => {
    const { handleProductClick } = useContext(StoreContext)
    const WomenProducts = products.filter(product => product.category.includes("Women") && product.category.includes("Shoes"));
  return (
    <div className='women-container'>
        <div className="women-products">
            <h1>Women Shoes ({WomenProducts.length})</h1>
            <div className="product-cart">
                {
                    WomenProducts.map((item, index) => {
                        return (
                            <div className="women-list-item" key={index} onClick={() => handleProductClick(item.id)}>
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

export default WomenShoes