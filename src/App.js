import React from "react";
import "./index.css"
import Home from "./Routers/Home"
import Projects from "./Routers/Projects"
import About from "./Routers/About"
import Contact from "./Routers/Contact"

import { Route, Routes } from "react-router-dom";
function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/project" element={<Projects />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
   </Routes>
   </>
  );
}

export default App;
