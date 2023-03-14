import React from 'react'
import profilePic from "./profilepic.svg";
import './BloodProfile.css'
function BloodProfile(props) {
  return (
    <div className="bloodProfile">
        <div className="bloodProfileContainer">
          <div className="profileContainerOne">
            <img className="profilePic" src={profilePic} alt="profilePic" />
          </div>
          <div className="profileContainerTwo">
            <div className="profileSubcontainerOne">
              <h3 className="name">{props.name} {props.lastname}</h3>
              <span>conatact Number-{props.number}</span>
            </div>
            <div className="profileSubcontainerOne">
              <div>
                <h3 className="tag">Location : </h3>
                <span>{props.location}</span>
              </div>
              <div>
                <h3 className="tag">BloodGroup : </h3>
                <span>{props.bloodgroup}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BloodProfile