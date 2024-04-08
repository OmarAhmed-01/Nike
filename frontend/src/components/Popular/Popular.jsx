import React, { useRef, useState } from 'react'
import './popular.css'
import { assets, popular } from '../../assets/assets'

const Popular = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const popularRef = useRef(null);

    const handleScrollLeft = () => {
        if (popularRef.current) {
            popularRef.current.scrollTo({
            left: popularRef.current.scrollLeft - 600, // Adjust the scroll distance as needed
            behavior: 'smooth' // Smooth scrolling
            });
        }
    };
    
    const handleScrollRight = () => {
        if (popularRef.current) {
          popularRef.current.scrollTo({
            left: popularRef.current.scrollLeft + 600, // Adjust the scroll distance as needed
            behavior: 'smooth' // Smooth scrolling
            });
        }
    };

  return (
    <div className=' popular-container'>
        <div className=' popular-title'>
            <div className=' popular-title-title'>Popular Right Now</div>
            <div className=' popular-arrows'>
                <div className='arrow-left' onClick={handleScrollLeft}>
                    <img src={assets.arrowLeft}/>
                </div>
                <div className=' arrow-right' onClick={handleScrollRight}>
                    <img src={assets.arrowRight}/>
                </div>
            </div>
        </div>
        <div className=' popular-cards' ref={popularRef}>
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