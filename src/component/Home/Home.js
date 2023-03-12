import React from "react";
import { useState } from "react";
import mainPic from "./mainPic.svg";
import doctorImg from "./doctorImg.jpg";
import "./Home.css";
import Footer from "../Footer/Footer";
import Service from "./Services/Service";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
function Home() {
  
  // const token = sessionStorage.getItem('token')

  const [isLoggedOut, setIsLoggedOut] = useState(sessionStorage.getItem('token')?true:false);

 

// const btn = () =>{axios.get("/getcookie",{ withCredentials: true }
// //   {
// //     withCredentials: true,
// //     headers: { 'Content-Type': 'multipart/form-data' },
// // }
// ).then(res=>{
//     console.log("res",res)
//   })
// .catch(err=>{
//   console.log("err is",err)
// })}
  return (
    <>
      <div className="header">
      <Navbar/>
      {/* {console.log("tokeen is",Cookies.get("access_token"))} */}
        <div className="headerContent">
          <div className="headerContainer_one">
            <span className="headerText" >
              Be A hero - IT's
            </span>
            {/* <button onClick={btn}>HEZllo</button> */}
            <span className="headerText">In your</span>
            <span className="headerText">Blood</span>
           { isLoggedOut ? "": <div className="headerButton">
              <button className="registerBtn">
                <Link to="/signup" style={{ textDecoration: 'none', color:'white'}}>Sign Up</Link>
                </button>
              <button className="registerBtn">
                <Link to="/login" style={{ textDecoration: 'none', color:'white' }}>Log In</Link>
                </button>
            </div>}
          </div>
          <div className="headerContainer_two">
            <img id="mainImg" src={mainPic} alt="Pic-1" />
          </div>
        </div>
      </div>

      <div className="homeAbout">
        <span className="headerText">About</span>
        <div className="aboutContainer">
        <img className="doctorImg" src={doctorImg} alt="doctorImg" />
          <p>
           
Blood donation is an important and generous act of humanity. It helps save lives, as blood is a crucial element for treating some medical conditions. Unfortunately, not enough people donate blood due to various reasons. BloodDrop is a website which helps in facilitating blood donations. It connects those who are willing to donate, with those who need it. Through BloodDrop, the donors can easily register and find out about the nearest blood donation center where they can donate.
          </p>
         
        </div>
      </div>
      <Service />
      <Footer />
    </>
  );
}

export default Home;
