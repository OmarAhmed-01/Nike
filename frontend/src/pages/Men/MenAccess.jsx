import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import { products } from '../../assets/assets';
import './menAccess.css'

const MenAccess = () => {

    const { handleProductClick } = useContext(StoreContext)
    const Men_Accessories_Products = products.filter(product => product.category.includes("Accessories") && product.category.includes("Men"));
  
  return (
    <div className=' men-accessories-container'>
        <div className=' men-accessories-products'>
            <h1>Accessories ({Men_Accessories_Products.length})</h1>
            <div className=' product-cart'>
                {
                    Men_Accessories_Products.map((item, index) => {
                        return(
                            <div className=' men-accessories-list-item' key={index} onClick={() => handleProductClick(item.id)}>
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

export default MenAccess