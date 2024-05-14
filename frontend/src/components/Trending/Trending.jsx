import React, { useRef } from 'react'
import './trending.css'
import { assets, trending } from '../../assets/assets'

const Trending = () => {

    const trendingRef = useRef(null);

    const handleScrollLeft = () => {
        if (trendingRef.current) {
            trendingRef.current.scrollTo({
            left: trendingRef.current.scrollLeft - 600, // Adjust the scroll distance as needed
            behavior: 'smooth' // Smooth scrolling
            });
        }
    };
    
    const handleScrollRight = () => {
        if (trendingRef.current) {
          trendingRef.current.scrollTo({
            left: trendingRef.current.scrollLeft + 600, // Adjust the scroll distance as needed
            behavior: 'smooth' // Smooth scrolling
            });
        }
    };

  return (
    <div className=' trending-container'>
        <div className=' trending-title'>
            <div className=' trending-title-title'>
                <h1>Trending</h1>
            </div>
            <div className=' trending-arrows'>
                <div className='arrow-left' onClick={handleScrollLeft}>
                    <img src={assets.arrowLeft}/>
                </div>
                <div className=' arrow-right' onClick={handleScrollRight}>
                    <img src={assets.arrowRight}/>
                </div>
            </div>
        </div>
        <div className=' trending-cards' ref={trendingRef}>
            {
                trending.map((item, index) => {
                    return(
                        <div className=' trending-list-item' key={index}>
                            <img src={item.img}/>
                            <p>{item.label}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Trending