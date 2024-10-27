import React from "react";
import "./index.css";
import Home from "./Routers/Home";
import "./Components/Preloader.css";
import Projects from "./Routers/Projects";
import About from "./Routers/About";
import Contact from "./Routers/Contact";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [percentage, setPercentage] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   // setPercentage((prev) => {
    //   //   if (prev < 100) {
    //   //     return prev + 1;
    //   //   }
    //   // });

    //   // if (percentage < 100) {
    //   //   setPercentage((prev) => prev + 1);
    //   // }
    // }, 50); // Adjust speed by changing the interval duration

    percentage !== 100 &&
      setTimeout(() => {
        setPercentage((prev) => prev + 1);
      }, 45);

    percentage === 100 && setLoadingComplete(true);
    // percentage === 100 && setPercentage(0); // Stop the interval when loading is complete
  }, [percentage, loadingComplete]);

  return (
    <>
      {!loadingComplete && (
        <div className="loading-container">
          <div className="loading-bar" style={{ width: `${percentage}%` }}>
            <span className="percentage-text">{percentage}%</span>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
