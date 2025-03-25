import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import Work from '../Components/Work';
const Projects = () => {
  return (
    <div>
      <NavBar/>
      <Heroimg2 heading ="PROJECTS." text ="Some of my recent projects"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Projects