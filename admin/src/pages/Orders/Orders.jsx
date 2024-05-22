import React, { useContext, useEffect, useState } from 'react'
import './orders.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const Orders = ({ backend_url }) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async() => {
    try {
      const response = await axios.get(backend_url + "/api/orders/list");
      if(response.data.success){
        setOrders(response.data.data);
      }
      else{
        toast.error("Error Displaying Orders");
      }
    } catch (error) {
      toast.error("Error fetching orders")
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const StatusHandler = async (event, orderId) => {
    const response = await axios.post(backend_url + "/api/orders/status", {
      orderId,
      status: event.target.value
    });
    if(response.data.success){
      await fetchAllOrders();
    }
  }

  return (
    <div className='container'>
      <h1>Orders</h1>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <div className='order-item-food'>
              {
                order.items.map((item, itemIndex) => {
                  if(itemIndex === order.items.length - 1){
                    return ("Nike " + item.label + " x " + item.quantity);
                  }
                  else{
                    return ("Nike " + item.label + " x " + item.quantity + ", ");
                  }
                })
              }
            </div>
            <p className='order-item-name'>{order.address.FirstName + " " + order.address.LastName}</p>
            <div className='order-item-address'>
              <p>{order.address.Address}, {order.address.Zipcode}, {order.address.City}, {order.address.Country}</p>
            </div>
            <p>{order.address.MobileNumber}</p>
            <p>${order.amount}</p>
            <select value={order.status} onChange={(event) => StatusHandler(event, order._id)}>
              <option value="Processing">Processing</option>
              <option value="Delivery">Delivery</option>
              <option value="Arrived">Arrived</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders