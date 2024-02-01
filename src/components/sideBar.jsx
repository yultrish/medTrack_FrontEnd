import React from 'react'
import { IoMenu } from "react-icons/io5";
import { useState} from 'react';
import { Link } from 'react-router-dom';
const SideBar = () => {
 
  return (
    <>
     <div className="sidebar">
          <ul>
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
  )
}

export default SideBar