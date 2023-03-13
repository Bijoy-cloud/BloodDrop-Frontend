import React from "react";
import {  useState } from "react";
import searchLogo from "./searchLogo.svg"
import "./BloodGroupList.css";
import Navbar from "../Navbar/Navbar";
import axios from "../../api/axios";
import BloodProfile from "./BloodProfile/BloodProfile";
import loading from "../login/loading.gif"
// function BloodGroupList() {
//         const [data, setData] = useState([]);
//         const [startIndex, setStartIndex] = useState(0);
//         const [endIndex, setEndIndex] = useState(10);

//         useEffect(() => {
//           async function getData() {
//             const response = await fetch('apiurlhere');
//             const json = await response.json();
//             setData(json);
//           }
//           getData();
//         }, []);

//         const handleMoreClick = () => {
//           setStartIndex(startIndex + 10);
//           setEndIndex(endIndex + 10);
//         };

//         return (
//           <div>
//             {data.slice(startIndex, endIndex).map((item, index) => (
//               <div key={index}>
//                 <h1>{item.title}</h1>
//                 <p>{item.description}</p>
//               </div>
//             ))}
//             <button onClick={handleMoreClick}>More</button>
//           </div>
//         );

// }
function BloodGroupList(params) {
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState('');
  const [bloodGroup, setBloodGroup] = useState('O%2B');
  const [apiData, setApiData] = useState([])
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    // console.log(bloodGroup)
    try{
  await axios
  .get(`/findDonor?bloodgroup=${bloodGroup}&city=${city}`)
  .then(response => {
    setApiData(response.data.data)
    if(response.data.data.length===0){
      alert("No Donor Found")
    }
    // handle the response here
  })
  .catch(error => {
    console.log("error",error)
    // handle the error here
  });
}catch{

}finally{
  setIsLoading(false)
}
    // axios.get("/getcookie", {
    //   params: data
    // })
    //   .then(res => {
    //     setApiData(res)
    //   })
    //   .catch(error => console.log(error))
  }





  return (
    <div>
      <Navbar />
      <div className="searchResultContainer">

        <form className="searchContainer" onSubmit={handleSubmit}>
          <select name="bloodGroup" id="bloodGroup" className="searchInput" value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            required>
            <option value="O%2B">O+</option>
            <option value="A%2B">A+</option>
            <option value="B%2B">B+</option>
            <option value="AB%2B">AB+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
            <option value="AB-">Ab-</option>
          </select>
          <input type="text" className="searchInput" placeholder="city" value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {/* <div className="searchSubmitContainer">

          </div> */}
          <button className="searchSubmit" type="submit">
            <img className="searchLogo" src={searchLogo} alt="searchLogo" />
          </button>
        </form>
        <br/>
      
      </div>
      <div className="bloodGroup">
      {isLoading && 
        <img className="loading-icon" src={loading} alt="loading"/>
        }
        {
          apiData.map(data => (
            <BloodProfile
              name={data.name}
              lastname={data.lastname}
              bloodgroup={data.bloodGroup}
              location={data.location}
              number={data.phoneNumber}
            />
          ))
        }
        </div>
    </div>
  );
}


export default BloodGroupList;
