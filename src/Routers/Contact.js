import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import Form from '../Components/Form'

const Contact = () => {
  return (
    <div>
      <NavBar/>
      <Heroimg2 heading = "CONTACT." text = "Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact