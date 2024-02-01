import React from 'react'
import Overview from '../components/Overview'
// import SideBar from '../components/sideBar'
// import SideBar from '../components/SideBar';
// import SideBar from '../components/SideBar';
import SideBar from '../components/sideBar';
import Header from '../components/header'
import { Outlet } from "react-router-dom";


const Home = () => {

  return (
    <>
     <div className="sideBar-contents">
    <SideBar/>
    <div>
      {/* <Header/>  */}
    {/* <Overview/> */}
    <Outlet/>
    </div>
    
    </div>
    </>
  )
}

export default Home