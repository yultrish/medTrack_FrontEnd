import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const openSidebar = () => {
//     setSidebarOpen(true);
//   };

//   const closeSidebar = () => {
//     setSidebarOpen(false);
//   };
  return (
    <>
      <header className="header">
        {/* <div className="menu-icon">
          <span className="material-icons-outlined">
            menu
          </span>
        </div> */}
        <div className="header-left">
          {/* <span className="material-icons-outlined">search</span> */}
          <input className="search-bar" placeholder="Search..." type="text" />
          <Link to='/add-drug'>
          <button className="app-content-headerButton">Add Product</button>
          </Link>
        </div>
        {/* <div className="header-right">
         
          <span className="material-icons-outlined">notifications</span>
          <span className="material-icons-outlined">email</span>
          <span className="material-icons-outlined">account_circle</span>
        </div> */}
      </header>
    </>
  );
};

export default Header;
