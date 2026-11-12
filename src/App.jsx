
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function Home() {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <h2 className="logo">🌿 Paradise Nursery</h2>
        <Link to="/about" className="nav-link">About Us</Link>
      </nav>

      <div className="hero-content">
        <h1>Welcome to Paradise Nursery</h1>
        <h2>Bring Nature Into Your Home</h2>

        <p>
          Discover our beautiful collection of indoor plants.
          Make your living space greener, fresher, and happier.
        </p>

        <Link to="/plants" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

