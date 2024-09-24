import "./NavbarStyles.css"
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleclick = () => setClick(!click);

  return (
    <div className="Header">
        <Link to="/">
        <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" :"nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="Hamburger" onClick={handleclick}>
            {click ?(
                <FaTimes size={20} style={{color: "white"}} />
            ) : (
                <FaBars size={20} style={{color: "white"}} />

            )}
            
                    </div>
    </div>
  );
};

export default NavBar