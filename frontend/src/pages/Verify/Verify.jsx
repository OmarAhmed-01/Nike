import React, { useContext, useEffect } from 'react'
import './verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");

    const { backend_url } = useContext(StoreContext);

    const navigate = useNavigate();

    const verifyPayment = async (req, res) => {
        const response = await axios.post(backend_url + '/api/orders/verify', {success, orderId});
        if(response.data.success){
            navigate('/orders');
        }
        else{
            navigate('/');
        }
    }

    useEffect(() => {
        verifyPayment();
    }, []);

  return (
    <div className='verify'>
        <h1>Loading...</h1>
    </div>
  )
}

export default Verify