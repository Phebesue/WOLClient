import React, { useState, useEffect } from 'react';
import Sitebar from './home/Navbar';
import Auth from './auth/Auth';


function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(()=> {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log("sessionToken: ",newToken); //altered, different from modules
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
    console.log("sessionToken: ",sessionToken); //added, not in modules
  }
  
  return (
    <div>   
      <Sitebar clickLogout={clearToken} /> 
      <Auth updateToken={updateToken}/>
    </div>
  );
}

export default App;
