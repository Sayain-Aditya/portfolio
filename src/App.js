import React, { useEffect, useState } from "react";
import "./index.css";
import Home from "./Routers/Home";
import "./Components/Preloader.css";
import Projects from "./Routers/Projects";
import About from "./Routers/About";
import Contact from "./Routers/Contact";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 

const App = () => {
  const [percentage, setPercentage] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval); // Stop the interval when loading is complete
          setLoadingComplete(true);
          return prev;
        }
      });
    }, 45); // Adjust speed by changing the interval duration

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  if (!loadingComplete) {
    return (
      <div className="loader">
        <div className="load" style={{ width: `${percentage}%` }}>
          <span className="loader-text">{percentage}% </span>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
