import React from 'react';
import logo from './assets/logo.jpg'; 

const Header = () => {
    return (
        <header style={{ padding: '20px', textAlign: 'center', background: '#282c34', color: 'white' }}>
            <img src={logo} alt="KeyCrafter Logo" style={{ width: '100px', height: 'auto', marginBottom: '10px' }} />
            <h1>KeyCrafter</h1>
            <h2>Keyboard Documentation</h2>
        </header>
    );
};

export default Header;
