import "./AboutContentStyles.css"
import pro4 from "../assets/Project4.jpeg"
import pro5 from "../assets/Project5.jpeg"


import React from 'react'
import { Link } from "react-router-dom"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>I am a react front-end developer. I create responsive secure website for my client.</p>
        <Link to="/contact">
        <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="Image-Container">
          <div className="Img-Stack-top">
            <img src={pro4} className="Img" alt="pass"/>
          </div>
          <div className="Img-Stack-bottom">
            <img src={pro5} className="Img" alt="pass"/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutContent