import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'

const About = () => {
  return (
    <div>
      <NavBar/>
      <Heroimg2 heading ="ABOUT." text ="Im a friendly Front-End Developer"/>
      <Footer/>
    </div>
  )
}

export default About