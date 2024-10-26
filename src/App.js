import React from "react";
import "./index.css"
import Home from "./Routers/Home"
import Projects from "./Routers/Projects"
import About from "./Routers/About"
import Contact from "./Routers/Contact"
import Preloader from "./Components/Preloader";
import  {useEffect, useState} from "react";

import { Route, Routes } from "react-router-dom";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust as needed
  }, []);
  return (
   <>
   <Preloader isLoading={isLoading}/>
   {!isLoading && (
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/project" element={<Projects />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
   </Routes>
   )}
   </>
  );
}

export default App;
