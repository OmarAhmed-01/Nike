import React, { useContext, useEffect } from 'react'
import './mensShop.css'
import { products } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
const MensShop = () => {

    const { handleProductClick } = useContext(StoreContext)
    const MenProducts = products.filter(product => product.category.includes("Men"));

    // useEffect(() => {
    //     setCategory("");
    // }, []);

  return (
    <div className=' men-container'>
        <div className=' men-products'>
            <h1>Men ({MenProducts.length})</h1>
            <div className=' product-cart'>
                {
                    MenProducts.map((item, index) => {
                        return(
                            <div className=' men-list-item' key={index} onClick={() => handleProductClick(item.id)}>
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

export default MensShop