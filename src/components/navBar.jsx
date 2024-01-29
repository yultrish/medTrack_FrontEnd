// import React from "react";
import medTrackLogo from "/MedTrack-Logo.svg";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

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
          {/* <span className="material-symbols-outlined">menu</span> */}
          <IoMenu
            className="menu-icon"
            onClick={toggleMenu}
          />
        </div>
        <ul className={`nav-list ${menuVisibility ? "visible" : ""}`}>
          {/* <span className="material-symbols-outlined">home</span> */}
          <li className="active">Home</li>
          <li className="list-item">Product</li>
          <li className="list-item">About</li>
          <li className="list-item">Partners</li>
          <li className="list-item">block</li>
          <li>
            <div className="nav-btn">
              <button>Get Started</button>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
