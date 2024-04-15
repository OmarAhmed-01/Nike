import React, { useContext } from 'react'
import './golf.css'
import { golf } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const Golf = () => {
    const { handleProductClick } = useContext(StoreContext)
  return (
    <div className=' golf-container'>
        <div className=' golf-products'>
            <h1>Golf and Lifestyle ({golf.length})</h1>
            <div className=' product-cart' onClick={handleProductClick}>
                {
                    golf.map((item, index) => {
                        return(
                            <div className=' golf-list-item' key={index}>
                                <img src={item.img}/>
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

export default Golf