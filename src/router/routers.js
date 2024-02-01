// import { createBrowserRouter } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/Rootlayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        // children: [
        //   {
        //     path: "/create-post",
        //     element: <NewPost />,
        //     action: actionData,
        //   },
        //   // {
        //   //   path: "/edit-post",
        //   //   element: <Edit />,
        //   //   action: PatchAction,
        //   // },
        // ],
      },
      {
        //  path: "/create-post",
        // element: <NewPost/>
      },
    ],
  },
]);

