import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  // Define the URL of your hero image

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-heading">Welcome to Our Web App</h1>
        <p className="hero-subtitle">
          Explore our amazing features and services.
        </p>
        <Link to="/login" className="hero-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
