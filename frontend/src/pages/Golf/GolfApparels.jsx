import React, { useContext } from 'react'
import { products } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import './golfShop.css'

const GolfApparels = () => {

  const { handleProductClick } = useContext(StoreContext)
  const golfApparels = products.filter(product => product.category.includes("Golf") && product.category.includes("Clothing"))

  return (
    <div>
      <div className=' golf-container'>
        <div className=' golf-products'>
            <h1>Golf Clothing ({golfApparels.length})</h1>
            <div className=' product-cart'>
                {
                    golfApparels.map((item, index) => {
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
    </div>
  )
}

export default GolfApparels