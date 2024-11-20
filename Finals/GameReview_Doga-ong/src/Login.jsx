import React, { useState } from 'react';
import './App.css';

export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
        onLogin();
        } else {
        alert('Invalid username or password');
        }
    };

    return (
        <div className="container">
        <h1>Welcome to Wormmmy's Reviews!</h1>
        <h4>Login to Continue:</h4>
        <div className="login-form">
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <br />
            <br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br />
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
        </div>
    );
}