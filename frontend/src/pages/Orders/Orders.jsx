import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import './orders.css';

const Orders = () => {

    const [data, setData] = useState([]);
    const { backend_url, token } = useContext(StoreContext);
    
    const fetchOrders = async(req, res) => {
        const response = await axios.post(backend_url + "/api/orders/user-orders", {}, {headers: {token}});
        setData(response.data.data);
        console.log(data);
    }

    useEffect(() => {
        if(token){
            fetchOrders();
        }
    }, [token])

  return (
    <div className='my-orders'>
        <h1>My Orders</h1>
        <div className="container">
            {
                data.map((orders, index) => {
                    return(
                        <div key={index} className='my-orders-order'>
                            <p>{orders.items.map((item, index) => {
                                if(index === orders.items.length-1){
                                    return "Nike " + item.label+" x "+item.quantity;
                                }
                                else{
                                    return "Nike " + item.label+" x "+item.quantity+", ";
                                }
                            })}</p>
                            <p>${orders.amount}.00</p>
                            <p>{orders.items.length < 2 ? `${orders.items.length} item` : `${orders.items.length} items`}</p>
                            <p>{`Status: ${orders.status}`}</p>
                            <button onClick={fetchOrders}>Check Status</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Orders