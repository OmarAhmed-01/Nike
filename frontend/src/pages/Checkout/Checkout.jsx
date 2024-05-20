import React from 'react'
import './checkout.css'

const Checkout = () => {
  return (
    <form action="" className='place-order'>
        <div className="place-order-left">
            <p className="contact-info">Contact Details</p>
            <hr />
            <div className="names">
                <input type="text" placeholder='First name'/>
                <input type="text" placeholder='Last name'/>
            </div>
            
            <input type="email" placeholder='Email'/>
            <input type="text" placeholder='Address'/>

            <div className="city">
                <input type="text" placeholder='City'/>
                <input type="text" placeholder='Country'/>
            </div>

            <div className="mobile">
                <input type="text" placeholder='Zipcode'/>
                <input type="text" placeholder='Mobile number'/>
            </div>
        </div>

        <div className="place-order-right">
            <div className="cart-price-total">
                <h1>Cart Total</h1>
                <hr />
                <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>$50</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>$2</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Total</p>
                    <p>$52</p>
                </div>
            </div>
            <button type='submit'>Proceed to payment</button>
        </div>
    </form>
  )
}

export default Checkout