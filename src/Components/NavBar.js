import "./NavbarStyles.css"
import React from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Header">
        <Link to="/">
        <h1>Portfolio</h1>
        </Link>
        <ul className="nav-menu">
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
        <div className="Hamburger">
            <FaBars size={20} style={{color: "white"}} />
        </div>
    </div>
  );
};

export default NavBar