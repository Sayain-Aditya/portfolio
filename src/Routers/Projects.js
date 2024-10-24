import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import WorkCard from '../Components/WorkCard';
const Projects = () => {
  return (
    <div>
      <NavBar/>
      <Heroimg2 heading ="PROJECTS." text ="Some of my recent projects"/>
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Projects