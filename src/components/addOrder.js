import React,{useCallback,useState} from "react";

const AddOrder = () => {
    const [newOrder, setNewOrder] = useState();
    const [phone, setPhone] = useState();

    const addOrders = useCallback(async ()=>{
      console.log(localStorage.getItem('token'))
      try {
        const response = await fetch("https://voosh-backend-test.onrender.com/add-order", {
          method: 'POST',
          body: JSON.stringify({ sub_total: newOrder, phone_number: phone }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'authorization': localStorage.getItem('token'),
          }
        });
    
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },[newOrder,phone]);

    return (
        <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-1\/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter a subtotal"
          onChange={(e) => setNewOrder(e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-1\/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Enter a phone number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
          onClick={()=>addOrders()}
        >
          Add Order
        </button>
      </div>
    );
}

export default AddOrder;