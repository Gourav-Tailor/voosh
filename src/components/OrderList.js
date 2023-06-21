import React, { useEffect, useState } from 'react';
import AddOrder from './addOrder';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
    
          const response = await fetch("https://voosh-backend-test.onrender.com/get-order", {
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'authorization': localStorage.getItem('token'),
            },
          });
    
          const data = await response.json();
          setOrders(data);
        } catch (error) {
          // Handle any errors that occurred during the fetch request or processing
          console.error(error);
        }
      };
    
      fetchData();
    }, []);

  return (
    <>
    <div className="bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-2xl font-bold mb-4">Order List</h2>
      <AddOrder orders={orders} setOrders={setOrders} />
      {orders.map((order,index) => (
        <div key={index} className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <span className="text-gray-500 mr-8">${order.subTotal}</span>
            <span className="font-bold">{order.phoneNumber}</span>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default OrderList;