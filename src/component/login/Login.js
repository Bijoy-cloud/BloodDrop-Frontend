import React, { useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import authImg from "./authImg.svg";
import "./Login.css";
import Cookies from 'js-cookie';
import {useCookies} from 'react-cookie';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Login() {
  const [cookies, setCookie] = useCookies(['access_token']);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log("tokeen is",Cookies.get("access_token"))

  const btn = () =>{axios.get("/getcookie",{ withCredentials: true }
//   {
//     withCredentials: true,
//     headers: { 'Content-Type': 'multipart/form-data' },
// }
)
  .then(res=>{
    console.log("res",res)
  })}
  
  const Auth = async (e) => {
    e.preventDefault();
      await axios.post("/login", {
        name: name,
        password: password,
      },{
        withCredentials:true
      })
      .then(function(res){
        // console.log(res.cookies)
      //  console.log("cookies",res.)
      setCookie(res.data, { path: "/" });
        alert("Log In SuccessFul")
        navigate("/");
      }
      ).catch(function (error) {
        console.log("error is",error);
      });

      
   
  };
  return (
    <>
    <Navbar/>
    <div className="authContainer">
      <div className="subAuthContainer_left">
        <div className="authContainerHeading">
          <span className="headerText">Welcome to our</span>
          <span className="headerText">Website</span>
        </div>
        <div className="authImgContainer">
          <img src={authImg} alt="authImg" id="authImg" />
        </div>
      </div>
      <div className="subAuthContainer_right">
        <span className="headerText">Hello! Welcome back</span>
 
        {/* <div className="loginContainer"> */}
          <div className="authSubcontainer">
            <span className="headerText loginHeader">Login</span>
            <form onSubmit={Auth} action="" className="signUp_form">
              <label className="label" for="name">
                Username
              </label>
              <input
                type="text"
                for="name"
                className="input"
                placeholder="userName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="label" for="password">
                Password
              </label>
              <input
                type="password"
                className="input"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit" className="auth_btn submitBtn">
                Log In
              </button>
            </form>
          </div>
        {/* </div> */}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Login;
