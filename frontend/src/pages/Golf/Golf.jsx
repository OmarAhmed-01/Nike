import React from 'react'
import './golf.css'
import { golf } from '../../assets/assets'

const Golf = () => {
  return (
    <div className=' golf-container'>
        <div className=' golf-products'>
            <h1>Golf and Lifestyle ({golf.length})</h1>
            <div className=' product-cart'>
                {
                    golf.map((item, index) => {
                        return(
                            <div className=' golf-list-item' key={index}>
                                <img src={item.img}/>
                                <h1>Nike {item.label}</h1>
                                <h2>{item.desc}</h2>
                                <p>{item.colors.length} Color</p>
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