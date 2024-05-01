import React, { useContext, useRef, useState } from 'react'
import './popular.css'
import { assets, popular } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const Popular = () => {

    const { handleScrollLeft, handleScrollRight } = useContext(StoreContext)
    const scrollRef = useRef(null);

  return (
    <div className=' popular-container'>
        <div className=' popular-title'>
            <div className=' popular-title-title'>
                <h1>Popular Right Now</h1>
            </div>
            <div className=' popular-arrows'>
                <div className='arrow-left' onClick={() => handleScrollLeft(scrollRef)}>
                    <img src={assets.arrowLeft}/>
                </div>
                <div className=' arrow-right' onClick={() => handleScrollRight(scrollRef)}>
                    <img src={assets.arrowRight}/>
                </div>
            </div>
        </div>
        <div className=' popular-cards' ref={scrollRef}>
            {
                popular.map((item, index) => {
                    return(
                        <div className=' popular-list-item' key={index}>
                            <img src={item.img}/>
                            <h1>{item.label}</h1>
                            <h2>{item.category} Shoe</h2>
                            <p>${item.price}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Popular