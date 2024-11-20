import React, { useState } from 'react';
import Login from './Login';
import Reviews from './Reviews';
import './App.css';

export default function App() {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const handleLogin = () => {
    setIsLoginPage(false);
  };

  return (
    <div>
      {isLoginPage ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Reviews />
      )}
    </div>
  );
}