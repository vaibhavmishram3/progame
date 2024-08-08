import React from "react";
import Home from "./Components/Home";
import Nabar from "./Components/Navbar";
import Hero from "./Components/Hero";
import SecondPage from "./Components/SecondPage";
import Git from "./Components/Git";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Nabar /> <Home /></>,
    },
    {
      path: "/second",
      element:<><Nabar /> <SecondPage /></>,
    },
    {
      path: "/hero",
      element:<><Nabar /> <Hero /></>,
    },
    {
      path: "/git",
      element:<><Nabar /> <Git /></>,
    },
  ]);
  return (
    <>

      <RouterProvider router={router} />

      
    </>
  );
}

export default App;
