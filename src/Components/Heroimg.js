import "./HeroimgStyles.css";

import React from 'react'
import Background from "../assets/Background.avif"
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="content">
            <p>HI, I AM FREELANCER.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/project"
                className="btn">
                    Projects                   
                </Link>
                <Link to="/Contact"
                className="btn-light">
                    Contact                   
                </Link>
            </div>
            <div className="mask">
              <img className="bg-img" src={Background} alt="bg"/>
            </div>
        </div>
     </div>
  )
}

export default Heroimg