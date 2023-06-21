import React, { useEffect, useState,useCallback } from 'react';

const OrderList = () => {
  const [newOrder, setNewOrder] = useState();
  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3001/get-user",{
        method: 'POST',
        body: JSON.stringify({userId: "1234"}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(x=>x.json())
    .then(data => {
        setOrders(data);
    })
  },[]);


  return (
    <div className="bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-2xl font-bold mb-4">Order List</h2>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter a new order"
          value={newOrder}
          onChange={(e) => setNewOrder(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
      
        >
          Add Order
        </button>
      </div>
      {orders.map((order) => (
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <span className="font-bold mr-2">{order.phone_number}</span>
            <span className="text-gray-500">${order.subTotal}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
