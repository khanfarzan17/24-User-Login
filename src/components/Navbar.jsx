import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="Nav-bar">
      <Link to="/">Home</Link>
      {user ? (
        <>
          <span> Welcome {user.name}</span>
          <button onClick={logout} className="Login-btn">
            {" "}
            Logout
          </button>
        </>
      ) : (
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
