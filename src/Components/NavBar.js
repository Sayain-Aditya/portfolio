import "./NavbarStyles.css"
import React, {  useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
 // You can also use <link> for styles

const NavBar = () => {
   

    const [click, setClick] = useState(false);
    const handleclick = () => setClick(!click);

    const [color, setcolor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >=100){
            setcolor(true);
        }else{
            setcolor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "Header Header-bg":"Header"} data-aos="fade-down">
        <Link to="/">
        <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" :"nav-menu"} >
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Projects</Link>
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