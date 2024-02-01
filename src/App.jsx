import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Rootlayout";
import Home from "./pages/Home";
import PharmDrug from "./pages/CreateDrug";
import PharmacyTable, { DrugsLoaderData } from "./components/DrugList";
import Overview from "./components/Overview";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path:"/",
        element: <Home />,
        children: [
          {
            index: true,
            element: < Overview/>,
          },
          {
            path: "/drugList",
            element: < PharmacyTable/>,
            loader: DrugsLoaderData
          },
          {
            path: "/add-drug",
           element: <PharmDrug/>,
          //  action: actionData,
           
         },
          // {
          //   path: "/edit-post",
          //   element: <Edit />,
          //   action: PatchAction,
          // },
        ],
      },
      
    ],
  },
]);

function App() {
  <ToastContainer
    position="top-left" 
    autoClose={5000} 
  />;

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;