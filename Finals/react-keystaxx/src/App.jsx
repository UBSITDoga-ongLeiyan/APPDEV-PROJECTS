import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footers";
import Home from "./Components/Home";
import MissionVision from "./Components/MissionVision";
import Products from "./Components/Products";
import ProductDetail from "./Components/ProductDetail";
import ProductListing from "./Components/ProductListing";
import CompanyProfile from "./Components/CompanyProfile";
import DeveloperPage from "./Components/DeveloperPage";
import EmpResume from "./Components/EmpResume"; // Import the Resume component
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission-vision" element={<MissionVision />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/developer-page" element={<DeveloperPage />} />
        <Route path="/resume/:id" element={<EmpResume />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
