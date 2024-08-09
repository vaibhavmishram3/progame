import React from "react";
import Home from "./Components/Home";
// import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import SecondPage from "./Components/SecondPage";
import Git from "./Components/Git";
import {HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/git" exact element={<Git />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
