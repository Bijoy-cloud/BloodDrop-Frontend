import React from "react";
import donateImg from "./donateImg.svg";
import searchImg from "./searchImg.svg";
import "./Service.css";
import { Link } from "react-router-dom";

function Service() {
  return (
    <div className="service">
      <span className="headerText serviceHeader">Services</span>
      <ul className="serviceContainer">
        <Link to={"/donor-register"} style={{ textDecoration: "none" }}>
          <li className="serviceList">
            <img src={donateImg} alt="donateImg" className="serviceImg" />
            <span className="serviceText">Donate</span>
          </li>
        </Link>
        <Link to={"/search"} style={{ textDecoration: "none" }}>
          <li className="serviceList">
            <img src={searchImg} alt="searchImg" className="serviceImg" />

            <span className="serviceText">Search</span>
          </li>
        </Link>
        {/* <li className="serviceList">
          <img src={reciptImg} alt="searchImg" className="serviceImg" />

          <span className="serviceText">Reciept</span>
        </li> */}
      </ul>
    </div>
  );
}

export default Service;
