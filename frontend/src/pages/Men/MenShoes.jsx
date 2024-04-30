import React, { useContext } from 'react'
import './menClothes.css'
import { products } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const MenShoes = () => {

  const { handleProductClick } = useContext(StoreContext)
  const Men_Shoes_Products = products.filter(product => product.category.includes("Shoes") && product.category.includes("Men"));
    
  return (
    <div className=' men-clothes-container'>
        <div className=' men-clothes-products'>
            <h1>Men Clothing ({Men_Shoes_Products.length})</h1>
            <div className=' product-cart'>
                {
                    Men_Shoes_Products.map((item, index) => {
                        return(
                            <div className=' men-clothes-list-item' key={index} onClick={() => handleProductClick(item.id)}>
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

export default MenShoes