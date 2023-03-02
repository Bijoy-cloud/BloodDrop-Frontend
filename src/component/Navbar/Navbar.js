import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
function Navbar() {


  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const token  = sessionStorage.getItem('token');
  const logout = () =>{
    sessionStorage.removeItem('token')
    setIsLoggedOut(true)
    window.location.reload()
  }
  return (
    <div>
      <div className="navbar">
        <Link to={"/"}>
          <div className="logo">
            <img className="logoImg" src={logo} alt="logo" />
          </div>
        </Link>

        <ul className="navList">
          <Link className="li" to="/" style={{ textDecoration: "none"}}>
            Home
          </Link>
          <Link className="li" to="/search" style={{ textDecoration: "none" }}>
            search Blood
          </Link>
          <Link className="li" to="/donor-register" style={{ textDecoration: "none" }}>
            Donor-Register
          </Link>
          { token ? <span className="li"  onClick={logout} style={{cursor:"pointer"}}>Logout</span>:"" }

         
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
