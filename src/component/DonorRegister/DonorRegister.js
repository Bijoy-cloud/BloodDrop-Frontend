import React from "react";
import { useState } from "react";
import axios from "../../api/axios";
import "./DonorRegister.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import loading from "../login/loading.gif"
function DonorRegister() {
  const [isLoading,setIsLoading] = useState(false)
  const [yesColor, setYesColor] = useState("#f6b69d");
  const [noColor, setNoColor] = useState("#f6b69d");
  const [previousBloodDonation, setpreviousBloodDonation] = useState(true);
  const navigate = useNavigate();
  const handleYesClick = () => {
    if (noColor === "#f6b69d") {
      setYesColor("#ff6518de");
    } else {
      setYesColor("#ff6518de");
      setNoColor("#f6b69d");
    }

    setpreviousBloodDonation(true);
  };

  const handleNoClick = () => {
    if (yesColor === "#f6b69d") {
      setNoColor("#ff6518de");
    } else {
      setYesColor("#f6b69d");
      setNoColor("#ff6518de");
    }
    setpreviousBloodDonation(false);
  };


  const donorRegisterSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    // console.log("e holo", e.target.name.value);
    const token = sessionStorage.getItem('token');
    console.log(token)
    await axios
      .post(
        "/registerDonor",
        {
          name: e.target.name.value,
          lastname: e.target.lastname.value,
          phoneNumber: e.target.number.value,
          bloodGroup: e.target.bloodGroup.value
            ? e.target.bloodGroup.value
            : "O+",
          city: e.target.city.value,
          previousBloodDonation: previousBloodDonation,
        },{
          headers:{
            token:token
          }
        }
        
        
      )
      .then((res) => {
        // console.log(res)
        setIsLoading(false)
        alert("Donor Registration Successful");
         navigate("/")
      })
      .catch((err) => {
        setIsLoading(false)
        console.log(err)
        alert(err.response.data.message)
      });
  };

  return (
    <>
      <Navbar />
      {isLoading && 
        <img className="loading-icon" src={loading} alt="loading"/>
        }
      <div className="donorRegisterContainer">
        <div className="donorRegisterFormContainer">
          <div className="donorRegister">
            <span className="headerText registerHeader">
              Donor Register Form
            </span>
          
            <form className="donorRegisterForm" onSubmit={donorRegisterSubmit}>
              <div className="flex flex_donorRegister">
                <div className="flex subGroup">
                  <label for="name" className="label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="donorInput"
                    placeholder="first name"
                    //  defaultValue={formData.name}

                    required
                  />
                </div>
                <div className="flex subGroup">
                  <label for="lastname" className="label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    className="donorInput"
                    placeholder="last name"
                    //  value={formData.lastname}

                    required
                  />
                </div>
              </div>

              <label for="number" className="label">
                Number
              </label>
              <input
                id="number"
                type="tel"
                maxLength={10}
                className="donorInput"
                placeholder="0123456789"
                required
              />
              <label for="city" className="label">
                What is your address?
              </label>
              <input
                type="text"
                id="city"
                className="donorInput"
                placeholder="City"
                //  value={formData.city}

                required
              />
              <label for="number" className="label">
                BloodGroup
              </label>
              <select
                name="bloodGroup"
                id="bloodGroup"
                className="donorInput"
                required
              >
                <option value="O+">O+</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="O-">O-</option>
                <option value="AB-">Ab-</option>
              </select>
              <label for="" className="label">
                Have you done a blood Donation Ever
              </label>
              <div className="checkBoxBtn">
                <button
                  className="donorBtn"
                  type="button"
                  onClick={handleYesClick}
                  style={{ backgroundColor: yesColor }}
                >
                  yes
                </button>
                <button
                  className="donorBtn"
                  type="button"
                  onClick={handleNoClick}
                  style={{ backgroundColor: noColor }}
                >
                  No
                </button>
              </div>
              <button className="donorRegisterBtn" >
                Submit
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default DonorRegister;
