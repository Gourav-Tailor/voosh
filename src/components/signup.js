import React, { useCallback, useState } from 'react';

const SignupPage = () => {
  const [name,setName] = useState();
  const [phone,setPhone] = useState();
  const [password,setPassword] = useState();
  const [msg,setMsg] = useState("");

  const signingUp = useCallback(()=>{
    fetch("https://voosh-backend-test.onrender.com/add-user",{
        method: 'POST',
        body: JSON.stringify({name: name, phone_number: phone, password: password}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'authorization': document.cookie,
        }
    })
    .then(x=>x.json())
    .then(data => {
        setMsg("User is Added!, Please Login");
    })
    .catch(err=>{setMsg(err)})
  },[name,phone,password]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
      <h1>{msg}</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email address"
              onChange={(e)=>setPhone(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={()=>signingUp()}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
