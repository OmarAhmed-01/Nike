import React, { useContext, useEffect, useState } from 'react'
import './checkout.css'
import axios from 'axios'
import { StoreContext} from '../../context/StoreContext.jsx'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {

    const { backend_url, products, cartItem, cartTotalAmount, token } = useContext(StoreContext);
    const navigate = useNavigate();
    const [data, setData] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Address: "",
        City: "",
        Country: "",
        Zipcode: "",
        MobileNumber: "", 
    })

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data, [name]: value}))
    }

    const placeOrder = async (event) => {
        event.preventDefault();
        let orderItems = [];
        products.map((item) => {
            if(cartItem[item._id] > 0){
                let item_info = item;
                item_info["quantity"] = cartItem[item._id];
                orderItems.push(item_info);
            }
        })
        let orderData = {
            address: data,
            items: orderItems,
            amount: cartTotalAmount() + 2,
        }
        let response = await axios.post(backend_url + '/api/orders/place-order', orderData, {headers: {token}});
        if(response.data.success){
            const { session_url } = response.data;
            window.location.replace(session_url);
        }
        else{
            alert("Error");
        }

        useEffect(() => {
            if(!token){
                navigate("/");
            }
            else if(cartTotalAmount() === 0){
                navigate("/cart");
            }
        }, [token])
    }

  return (
    <form onSubmit={placeOrder} className='place-order'>
        <div className="place-order-left">
            <p className="contact-info">Contact Details</p>
            <hr />
            <div className="names">
                <input type="text" name='FirstName' value={data.FirstName} onChange={handleInputChange} placeholder='First name'/>
                <input type="text" name='LastName' value={data.LastName} onChange={handleInputChange} placeholder='Last name'/>
            </div>
            
            <input type="email" name='Email' value={data.Email} onChange={handleInputChange} placeholder='Email'/>
            <input type="text" name='Address' value={data.Address} onChange={handleInputChange} placeholder='Address'/>

            <div className="city">
                <input type="text" name='City' value={data.City} onChange={handleInputChange} placeholder='City'/>
                <input type="text" name='Country' value={data.Country} onChange={handleInputChange} placeholder='Country'/>
            </div>

            <div className="mobile">
                <input type="text" name='Zipcode' value={data.Zipcode} onChange={handleInputChange} placeholder='Zipcode'/>
                <input type="text" name='MobileNumber' value={data.MobileNumber} onChange={handleInputChange} placeholder='Mobile number'/>
            </div>
        </div>

        <div className="place-order-right">
            <div className="cart-price-total">
                <h1>Cart Total</h1>
                <hr />
                <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>${cartTotalAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>${cartTotalAmount() === 0 ? 0:2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Total</p>
                    <p>${cartTotalAmount() === 0 ? 0:cartTotalAmount() + 2}</p>
                </div>
            </div>
            <button type='submit'>Proceed to payment</button>
        </div>
    </form>
  )
}

export default Checkout