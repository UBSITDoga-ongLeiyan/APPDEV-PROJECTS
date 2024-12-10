import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <h1>KeyStaxx</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/mission-vision">Mission & Vision</Link>
        <Link to="/products">Products</Link>
        <Link to="/company-profile">Company Profile</Link>
        <Link to="/developer-page">Developer Page</Link>
      </nav>
    </header>
  );
};

export default Header;
