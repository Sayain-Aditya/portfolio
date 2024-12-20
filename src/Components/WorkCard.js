import "./WorkCardstyles.css";
import React from 'react'
import pro1 from "../assets/Project1.jpg";
import { NavLink } from "react-router-dom";

function WorkCard() {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
       <div className="project-container">
        <div className="project-card">
        <img src={pro1} alt="im" />
        <h2 className="project-title">
          FOODY ZONE
        </h2>
        <div className="pro-details">
          <p>This is the paragraph</p>
          <div className="pro-btns">
            <NavLink to="url.com" className="btn">View</NavLink>
            <NavLink to="url.com" className="btn">Source</NavLink>
        </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default WorkCard