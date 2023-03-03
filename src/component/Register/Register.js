import React, { useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import authImg from '../login/authImg.svg'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const register = async (e) => {
    console.log(e.target);
    e.preventDefault();
    try {
      await axios.post("/register", {
        name: name,
        password: password,
      }).then(res=>{
        alert("Sign Up SuccessFul");
        navigate("/");
      }).catch((error)=>{

        alert( error.response.data)
        // if (error.response) {
        //   console.log(error.data.msg);
        // }
      })
    } catch (error) {
      
    }
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
          <img
            src={authImg}
            alt="authImg"
            id="authImg"
          />
        </div>
      </div>
      <div className="subAuthContainer_right">
        <span className="headerText">Hello! Welcome back</span>
        <div className="registerContainer">
        <div className="authSubcontainer">
      <span className="headerText loginHeader">Sign Up</span>
      <form onSubmit={register} action="" className="signUp_form">
      <label className="label" for="name">Username</label>
        <input type="text" id="name" className='input' placeholder='userName'
        value={name} onChange={(e)=>setName(e.target.value)}
        />
        <label className="label" for="password">Password</label>
        <input type="password"  id="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
       
        <button type='submit' className='auth_btn submitBtn'>SignUp</button>
      </form>
    </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Register;
