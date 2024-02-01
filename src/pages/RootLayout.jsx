import React from "react";
import NavBar from "../components/navBar";
// import SideBar from "../components/sideBar";
import Home from "./Home";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      {/* <SideBar /> */}
      {/* <Home/> */}
      <Outlet />
    </>
  );
};

export default RootLayout;
