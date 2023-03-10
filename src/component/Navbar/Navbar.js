import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import barsIcon from "./bars-solid.svg"
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>

function Navbar() {
  const [navbtn,setNavbtn] = useState(false)
  const navClick = () =>{
    setNavbtn(!navbtn);
  }
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
        <img className="barsIcon" src={barsIcon} alt="barsIcon" style={{height:"30px",cursor:"pointer"}} onClick={navClick} />
        <div className= {`navList ${navbtn? "show":""}`}>
        <ul >
        <li>
          <Link className="li" to="/" style={{ textDecoration: "none"}}>
            Home
          </Link>
        </li>
        <li>
          <Link className="li" to="/search" style={{ textDecoration: "none" }}>
            search Blood
          </Link>
        </li>
        <li>
          <Link className="li" to="/donor-register" style={{ textDecoration: "none" }}>
            Donor-Register
          </Link>
        </li>
          { token ? <li className="li"  onClick={logout} style={{cursor:"pointer"}}>Logout</li>:"" }

         
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
