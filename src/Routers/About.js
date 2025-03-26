import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <div>
      <NavBar/>
      <Heroimg2 heading ="ABOUT." text ="Im a friendly Front-End Developer"/>
      <AboutContent />
      <Footer/>
    </div>
  )
}

export default About