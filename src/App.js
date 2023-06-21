import {useState} from 'react';
import './App.css';
import LoginPage from './components/login';
import SignupPage from './components/signup';
import OrderList from './components/OrderList';

function App() {
  const [signup,setSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const setSignupOption = () => {
    setSignup(!signup);
  }

  if(signup){
    return (<SignupPage />);
  }
  else {
    if (isLoggedIn){
      return (
        <OrderList />
      );
    }
    else {
      return (
          <LoginPage signup={setSignupOption} handleLogin={handleLogin} />
        );
    }
  }
  
}

export default App;
