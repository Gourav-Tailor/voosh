import React,{useCallback, useState} from 'react';

const LoginPage = ({signup, handleLogin}) => {
    const [phone,setPhone] = useState();
    const [password,setPassword] = useState();

    const signingUp = useCallback(async ()=>{
      try{
        const response = await fetch("https://voosh-backend-test.onrender.com/login-user",{
            method: 'POST',
            body: JSON.stringify({phone_number: phone, password: password, login_by: "Google"}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        const data = await response.json();
        if(response.ok){
          localStorage.setItem('token', data.token);
          handleLogin();
        }
      } catch(error) {
        console.error(error);
        throw error;
      }
    },[]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={()=>signingUp()}
            >
              Sign In
            </button>
            <p
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
              onClick={signup}
            >
              New User
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

