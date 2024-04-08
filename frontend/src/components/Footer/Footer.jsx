import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { socials } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className=' footer-details'>
            <div className=' resources'>
              <ul className=' resources-list'>
                <li><Link>RESOURCES</Link></li>
                <li><Link>GIFT CARDS</Link></li>
                <li><Link>FIND A STORE</Link></li>
                <li><Link>BECOME A MEMBER</Link></li>
                <li><Link>NIKE X NBA</Link></li>
                <li><Link>NIKE JOURNAL</Link></li>
                <li><Link>Site Feedback</Link></li>
              </ul>
            </div>
            <div className=' help'>
              <h1>HELP</h1>
              <ul className=' help-list'>
                <li><Link>Get Help</Link></li>
                <li><Link>Order Status</Link></li>
                <li><Link>Shipping and Delivery</Link></li>
                <li><Link>Returns</Link></li>
                <li><Link>Order Cancellation</Link></li>
                <li><Link>Payment Options</Link></li>
                <li><Link>Gift Card Balance</Link></li>
                <li><Link>Contact Us</Link></li>
              </ul>
            </div>
            <div className=' company'>
              <h1>COMPANY</h1>
              <ul className=' company-list'>
                <li><Link>About Nike</Link></li>
                <li><Link>News</Link></li>
                <li><Link>Careers</Link></li>
                <li><Link>Investors</Link></li>
                <li><Link>Purpose</Link></li>
                <li><Link>Sustainability</Link></li>
              </ul>
            </div>
            <div className=' promotions'>
              <h1>PROMOTIONS & DISCOUNTS</h1>
              <ul className=' promotion-list'>
                <li><Link>Student</Link></li>
                <li><Link>Military</Link></li>
                <li><Link>Teacher</Link></li>
                <li><Link>First Responders & Medical Professionals</Link></li>
                <li><Link>Birthday</Link></li>
              </ul>
            </div>
            <div className=' socials'>
              <ul className=' socials-list'>
                {
                  socials.map((item, index) => {
                    return(
                      <li key={index}>
                        <a href={item.link} className=' image-container' target='_blank' rel="noopener noreferrer">
                          <img src={item.img} alt={item.alt}/>
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
        </div>
        <div className=' copyright'>
            <p>© 2024 Nike, Inc. All Rights Reserved</p>
            <ul className='copyright-terms-items'>
              <li>
                <a>Guides</a>
              </li>
              <li>
                <a>Terms of Sale</a>
              </li>
              <li>
                <a>Terms of Use</a>
              </li>
              <li>
                <a>Nike Privacy Policy</a>
              </li>
              <li>
                <a>Your Privacy Choices</a>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer