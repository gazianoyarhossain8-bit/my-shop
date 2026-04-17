import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';

function Order() {
    const [order, setOrder] = useState([]);

    const getOrder = async () =>{
        try {
            const res = await axios.get("https://shop-backend-mz62.onrender.com/api/orders");
            setOrder(res.data);

            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() =>{
        getOrder();


    },[])
  return (
    <div>
      
{order.map((item) => (
  <div key={item._id}>
    <img
      src={`https://shop-backend-mz62.onrender.com/${item.productId.image}`}
      alt={item.productId?.name} 
      className="w-40 rounded"
    />

    
    <h3>{item.productId?.name}</h3>
    <p>{item.productId?.description}</p>
    <p>₹{item.productId?.price}</p>
    <p>Qty: {item.quantity}</p>
  </div>
))}
    </div>
  )
}

export default Order