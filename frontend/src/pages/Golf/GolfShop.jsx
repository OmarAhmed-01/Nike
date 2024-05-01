import React, { useContext } from 'react'
import './golfShop.css'
import { products } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const GolfShop = () => {
    
    const { handleProductClick } = useContext(StoreContext)
    const golfProducts = products.filter(product => product.category.includes("Golf"));

  return (
    <div className=' golf-container'>
        <div className=' golf-products'>
            <h1>Golf and Lifestyle ({golfProducts.length})</h1>
            <div className=' product-cart'>
                {
                    golfProducts.map((item, index) => {
                        return(
                            <div className=' golf-list-item' key={index} onClick={() => handleProductClick(item.id)}>
                                <img src={item.img[0]}/>
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

export default GolfShop