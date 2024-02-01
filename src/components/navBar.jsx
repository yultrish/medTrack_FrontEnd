// import React from "react";
import medTrackLogo from "/MedTrack-Logo.svg";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import SideBar from "./sideBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility((prevVisibility) => !prevVisibility);
  };

  return (
    
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={medTrackLogo} alt="" width="20%" />
          <IoMenu className="menu-icon" onClick={toggleMenu} />
        </div>
      </nav> 

      <div className="nav-sidebar">
      <ul className={`nav-list ${menuVisibility ? "visible" : ""}`}>
            {/* <span className="material-symbols-outlined">home</span> */}
            <Link to="/">
            <li className="active">Home</li>
            </Link>
            <Link to="/drugList">
            <li className="list-item">Drug List</li>
            </Link>
            <Link to="/add-drug">
            <li className="list-item">Add Drug</li>
            </Link>
            <li className="list-item">Lab List</li>
            <li className="list-item">Add LabItem</li>
            <li>
              <div className="nav-btn">
                <button>View Chart</button>
              </div>
            </li>
          </ul>
        </div> 
      
    </>
  );
};

export default NavBar;
